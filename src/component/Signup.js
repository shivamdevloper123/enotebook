import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

const Signup = () => {
 try{
  const [credentials, setCredentials] = useState({name:"",email: "", password: ""}) 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const {name,email,password} =credentials
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name,email,password})
      });
      const json = await response.json()
     console.log(json)
      if (json.success){
          // Save the auth token and redirect
          localStorage.setItem('token', json.authtoken); 
          navigate("/");

      }
      else{
          alert("Invalid credentials");
      }
  } 
    const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className='container'>
     
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label" >Name</label>
    <input type="text" className="form-control" id="name" aria-describedby="name" name= "name" onChange={onChange} minLength={3} required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label" >Email address</label>
    <input type="text" className="form-control" id="email" aria-describedby="email" name= "email" onChange={onChange} minLength={5} required/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password'onChange={onChange} minLength={5} required />
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )

} catch (error) {
  console.error(error)
}
}

export default Signup
