import React,{useState} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const Login = () => {
    const [form,setForm] = useState({email:"",password:""});
    
    const hc = e=>setForm({...form,[e.target.name]:e.target.value});

    const hs = async(e) =>{
        e.preventDefault();
        const res = await axios.post('http://localhost:3600/api/auth/login',form);
        localStorage.setItem('token',res.data.token);
        Navigate('/dashboard');
        
    };


  return <>
  <form onSubmit={hs}>
   
  <div className='form-group'>
        <label>Email: </label>
        <input 
        type='email' 
        className='form-control col-md-3'
        name='email'
        onChange={hc}
        required

        />

    </div>
    <div className='form-group'>
        <label>Password: </label>
        <input 
        type='password' 
        className='form-control col-md-3'
        name='password'
        onChange={hc}
        required

        />

    </div>
    <button type='submit' className='btn btn-success mt-2'>Login</button>

    </form>
  </>
}

export default Login