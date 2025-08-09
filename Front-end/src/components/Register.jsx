import React,{useState} from 'react';
import axios from 'axios';


const Register = () => {
    const [form,setForm] = useState({name:"",email:"",password:""});
    
    const hc = e=>setForm({...form,[e.target.name]:e.target.value});

    const hs = async(e) =>{
        e.preventDefault();
        await axios.post('http://localhost:3600/api/auth/register',form);
        alert("Registration successfully");
    };


  return <>
  <form onSubmit={hs}>
    <div className='form-group'>
        <label>Name: </label>
        <input 
        type='text' 
        className='form-control col-md-3'
        name='name'
        onChange={hc}
        required

        />

    </div>
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
    <button type='submit' className='btn btn-success mt-2'>Register</button>

    </form>
  </>
}

export default Register