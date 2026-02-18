import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Update() {

    const [id, setId] = useState(0);
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setname(localStorage.getItem('name'));
        setage(localStorage.getItem('age'));
        setemail(localStorage.getItem('email'));
    }, []);

    const handleupdate = (e) => {
        e.preventDefault();
        axios.put(`https://67efbf102a80b06b88959c93.mockapi.io/curd/${id}`, {
            e_name: name,
            e_age: age,
            e_email: email
        }).then(() => {
            navigate('/');
        });
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>

                    <div className='bg-primary p-3 text-center'>
                        <h2>Update Data</h2>
                    </div>

                    <form className='border' onSubmit={handleupdate} >
                        <div className='form-group'>
                            <label htmlFor="">Enter Name: </label>
                            <input
                                type="text"
                                placeholder='name'
                                className='form-control'
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Enter age: </label>
                            <input
                                type="number"
                                placeholder='age'
                                className='form-control'
                                value={age}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Enter Email: </label>
                            <input
                                type="email"
                                placeholder='email'
                                className='form-control'
                                value={email}
                                onChange={(e) => setname(e.target.value)}
                            />
                        </div>
                        <br />

                        <div className='d-grid'>
                            <input type="submit" value="Update" className='btn btn-primary ' />
                        </div>

                    </form>

                    <div className='mt-2'>
                        <Link to='/'>
                            <button className="btn btn-secondary">Read Data</button>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Update
