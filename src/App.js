import {BrowserRouter as Router, Route, Redirect, exact } from "react-router-dom";
import './App.css';
import Login from './login/login';
import Register from './register/register';
import Home from './home/home';

function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">
      <Router>
      {user && <Route path="/home" ><Home exact /> </Route>}
			<Route exact path="/register"><Register/></Route> 
			<Route exact path="/login"> <Login /> </Route> 
			<Route path="/" > <Redirect to="/login" /> </Route>
      </Router>
    </div>
  );
}

export default App;
