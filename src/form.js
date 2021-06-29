import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Deleteuserbyid, Getusers, PostUserData } from "./api";

function Form() {
    //bellow mentioned states are used to take the details of user from input
    let [name, setName] = useState("");
    let [jobtype, setJobtype] = useState("");
    let [location, setLocation] = useState("");
    let [phone, setPhone] = useState("");
    let [dob, setDob] = useState("");
    let [email, setEmail] = useState("");
    //state used for setting the user details to array
    let [user, setUser] = useState([]);

    //userData is used to store all the details of the user in Json form
    let userData = { name, jobtype, location, phone, dob, email }
    let history = useHistory();

    useEffect(async () => {
        //getting all the users details
        let jobs = await Getusers();
        setUser(jobs.data)
    }, [])

    return (
        <>
            <form className="border border-3 border-dark rounded mt-5 px-3 py-3 bg-light" onSubmit={async (e) => {
                e.preventDefault();
                //posting the details of the user after submitting the form
                await PostUserData(userData)
                setName("");
                setJobtype("");
                setLocation("");
                setPhone("");
                setDob("");
                setEmail("");
                history.push("/")
            }}>
                <div className="row">
                    <h1 className="text-secondary">Registration Form</h1>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="name"><h5 className="text-secondary">Full Name</h5></label>
                        <input type="text" class="form-control" id="name" required placeholder="Name" value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="phone"><h5 className="text-secondary">Phone Number</h5></label>
                        <input type="tel" class="form-control" placeholder="99xx99xx99" required pattern="[0-9]{10}" id="phone" value={phone} onChange={(e) => {
                            setPhone(e.target.value);
                        }} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4"><h5 className="text-secondary">Email</h5></label>
                        <input type="email" class="form-control" id="inputEmail4" required placeholder="Email" value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                </div>
                <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0"><h5 className="text-secondary">Job Type</h5></legend>
                    <div class="col-sm-4">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="FT" onChange={(e) => {
                                setJobtype(e.target.value);
                            }} />
                            <label class="form-check-label" for="gridRadios1">
                                FT
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="PT" onChange={(e) => {
                                setJobtype(e.target.value);
                            }} />
                            <label class="form-check-label" for="gridRadios2">
                                PT
                            </label>
                        </div>
                        <div class="form-check ">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="Consultant" onChange={(e) => {
                                setJobtype(e.target.value);
                            }} />
                            <label class="form-check-label" for="gridRadios3">
                                Consultant
                            </label>
                        </div>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="dob"><h5 className="text-secondary">DOB</h5></label>
                        <input type="date" class="form-control" placeholder="Date Posted" id="dob" required value={dob} onChange={(e) => {
                            setDob(e.target.value);
                        }} />
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-md-4">
                        <label for="location"><h5 className="text-secondary">Prefered Location</h5></label>
                        <select id="location" class="form-control" required onChange={(e) => {
                            setLocation(e.target.value);
                        }} >
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Mysuru">Mysuru</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-2">
                    <input type="submit" className="btn btn-primary col-2 offset-9" value="submit" />
                </div>
            </form>

            {/* displaying the details of the user in the table form */}
            <table class="table table-striped border border-3 border-dark rounded mt-5 px-3 py-3 bg-light">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Job Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* here the user data are displyaed using map function */}
                    {
                        user.map((use, index) => {
                            return (
                                <tr>
                                    <th>{use.name}</th>
                                    <td>{use.email}</td>
                                    <td>{use.phone}</td>
                                    <td>{use.dob}</td>
                                    <td>{use.jobtype}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm" onClick={async () => {
                                            history.push(`/update/${use._id}`)
                                        }}>Update</button>
                                        <button className="btn btn-danger btn-sm" onClick={async () => {
                                            await Deleteuserbyid(use._id);
                                            history.push('/')
                                        }}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Form;