import React,{useState,useEffect} from 'react'
import axios from 'axios'

const About = () => {
  const [jobs,setJobs] = useState([]);
  const fetchjobs = async()=>{
    const res = await axios.get('http://localhost:3600/api/jobs');
    setJobs(res.data);
  }
  useEffect(()=>{
    fetchjobs();
  },[]);
  return <>
  <div className='container-fluid mt-5'>
    <h3>Job List</h3>
    <div className='row'>
      {jobs.map(x=>(
        <div className='col-md-3'>
          <div className='card mb-3' style={{width:'18rem'}}>
            <img src={`http://localhost:3600/uploads/${x.image}`} className='card-img-top' alt="img"/>
            <div className='card-body'>
                <h4 className='card-title'>{x.position}</h4> 
                <p className='card-text'>company:{x.company}</p>
              </div>
            </div>

          </div>
      ))}
    </div>
  </div>
  </>
}

export default About