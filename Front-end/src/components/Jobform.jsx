import React, { useState } from 'react'
import axios from 'axios'

const Jobform = ({ onjobadd }) => {
    const [form, setForm] = useState({
        position: '',
        company: '',
        image: null,
    });

    const hc = (e) => {
        const { name, value, files } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };
    const hs = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('position', form.position);
        data.append('company', form.company);
        data.append('image', form.image);

        const res = await axios.post('http://localhost:3600/api/jobs', data);
        if (res.status === 201) {
            alert('Job added successfully');
            onjobadd();
            setForm({
                position: '',
                company: '',
                image: null,
            })
        }
    };
    return <>
    <h1 className='mt-5'>Add Job</h1>
    <form onSubmit={hs} encType='multipart/form-data'>
    <div className='form-group'>
        <label>Job Name: </label>
        <input 
        type='text' 
        className='form-control col-md-3'
        name='position'
        value={form.position}
        onChange={hc}
        required

        />

    </div>
    <div className='form-group'>
        <label>Company: </label>
        <input 
        type='text' 
        className='form-control col-md-3'
        name='company'
        value={form.company}
        onChange={hc}
        required
        />

    </div>
    <div className='form-group'>
        <label>Image: </label>
        <input 
        type='file' 
        className='form-control-file'
        name='image'
        onChange={hc}
        required

        />

    </div>
    <button type='submit' className='btn btn-success mt-2'>Add</button>

    </form>

    </>
}

export default Jobform