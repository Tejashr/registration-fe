import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Form from './form';
import Update from './update';

function App() {
  return (
    <>
     <Router>
        <div className="container">
          <Switch>
            <Route path="/" component={Form} exact />
            <Route path="/update/:id" component={Update} exact />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
