import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  let navigate = useNavigate()
  const handleChange = (e) => {
    //const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); console.log(JSON.stringify({ name: formData.name, email: formData.email, password: formData.password, geolocation: formData.geolocation }));

    try {                          //createuser is changed to login user
      const response = await fetch("http://localhost:8080/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:formData.email,password:formData.password})
      });

      const json = await response.json();
      console.log(json)
      // if (!json.success) {
      //   // Handle successful sign-up (e.g., redirect to login page)
      //   alert("Enter Valid Credentials!")
      // }
      if (json.success) {
        localStorage.setItem("userEmail", formData.email)

        localStorage.setItem("authToken", json.authToken)
        console.log(localStorage.getItem('authToken'))
        navigate("/");
      } else {
        // Handle sign-up failure (e.g., display error message)
        alert(json.message || "Enter Valid Credentials!");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }



  return (
    <div>
      <div className='container'>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/createuser" className='m-3 mx-1 btn btn-danger'>Im New user</Link> {/* Removed extra comma */}
        </form>
      </div>
    </div>
  )
}
