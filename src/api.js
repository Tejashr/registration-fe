import axios from "axios";

//posting the data of the users
export function PostUserData(data){
    return axios.post(`https://reg-form-be.herokuapp.com/user`,data)
}

//getting the details of users
export function Getusers(){
    return axios.get(`https://reg-form-be.herokuapp.com/users`)
}

//getting the user details by id
export function Getuserbyid(id){
    return axios.get(`https://reg-form-be.herokuapp.com/user/${id}`)
}

//deleting the user
export function Deleteuserbyid(id){
    return axios.delete(`https://reg-form-be.herokuapp.com/user/${id}`)
}

//updating the user
export function Updateuserbyid(id,data){
    return axios.put(`https://reg-form-be.herokuapp.com/user/${id}`,data)
}