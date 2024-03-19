import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//Front end hai!
export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "", // Changed from "name" to "name"
        email: "",
        password: "",
        geolocation: ""
    });

   
const handleChange=(e)=>{
    setFormData({
        ...formData, [e.target.name]: e.target.value
    })
}
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(JSON.stringify({email:formData.email,password:formData.password}));
        try {
          //  console.log(JSON.stringify({ email: formData.email, password: formData.password }));

            const response = await fetch("http://localhost:8080/api/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const json = await response.json();
console.log(json)
            if (json.success) {
                // Handle successful sign-up (e.g., redirect to login page)
            } else {
                // Handle sign-up failure (e.g., display error message)
                alert(json.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name" // Changed from "name" to "name"
                            value={formData.name} // Changed from "name" to "name"
                            onChange={handleChange}
                        />
                    </div>
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
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="location"
                            value={formData.geolocation}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 mx-1 btn btn-danger'>Already a user</Link>  {/* Removed extra comma */}
                </form>
            </div>
        </>
    )
};

