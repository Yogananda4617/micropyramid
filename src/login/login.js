import { useState, useEffect } from "react";
import { Link, useHistory} from "react-router-dom";
import "./login.css";

function Login() {
  const initialValues = {  email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
   
  };

  useEffect(() => {
    console.log(formErrors);
    let mail  = localStorage.getItem("email");
    let password  = localStorage.getItem("password");
    if (Object.keys(formErrors).length === 0 && isSubmit  ) {
      console.log(JSON.stringify(formValues.email));
      console.log(mail)
      if(mail == JSON.stringify(formValues.email) && password == JSON.stringify(formValues.password)){
      history.push('/home');
      }
      else{
        alert("Please register first ");
        history.push('/register');
      }
    }
  }, [formErrors]);
  const validate = (values) => {
    var errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than 5 characters";
    } 
    return errors;
  };

  return (
    <div className="container">
     

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        
       
          
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="submitbttn" >Submit</button>
        <br/>
        <Link to="/register">
		<button type="button" className="white_btn">register</button>
	</Link>
      </form>
    </div>
  );
}

export default Login;
