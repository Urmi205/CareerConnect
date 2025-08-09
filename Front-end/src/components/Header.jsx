import React from 'react'
import{Link,useNavigate} from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const hl = ()=>{
    localStorage.removeItem('token');
    navigate('/login');
  };
  return <>
  <div className='container-fluid bg-dark text-light text-center'>
    <h1>Career Connect</h1>
  </div>
  <div className='container-fluid'>
    <ul className='nav float-right'>
      <Link to="/">Register</Link>|<Link to="/login">Login</Link>|{''}

      {token &&(
          <>
        <li className='nav-item'>
            <Link to="/home" className='nav-link'>Home</Link>
        </li>
         <li className='nav-item'>
            <Link to="/about" className='nav-link'>About</Link>
        </li>
         <li className='nav-item'>
            <Link to="/contact" className='nav-link'>Contact</Link>
        </li>
        <li className='nav-item'>
            <Link to="/service" className='nav-link'>Service</Link>
        </li>
        <li className='nav-item'>
            <Link to="/dashboard" className='nav-link'>Dashboard</Link>
        </li>
        <li className='nav-item'>
          <button onClick={hl}>Logout</button>
        </li>
        </>
      )}
        
    </ul>
  </div>
  </>
}

export default Header