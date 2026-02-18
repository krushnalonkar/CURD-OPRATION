import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Read() {

    const [apidata, setapidata] = useState([]);

    function getData() {
        axios.get('https://67efbf102a80b06b88959c93.mockapi.io/curd')
            .then((response) => {
                setapidata(response.data)
            })
    }

    function setDataTostorage (id, name, age, email) {
        localStorage.setItem('id',id);
        localStorage.setItem('name', name);
        localStorage.setItem('age', age);
        localStorage.setItem('email',email);
    }

    function handleDelete(id) {
        axios.delete(`https://67efbf102a80b06b88959c93.mockapi.io/curd/${id}`)
            .then(() => {
                getData();
            })
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='mb-2 mt-2'>
                        <Link to='/Create'>
                            <button className="btn btn-primary">Create New Data</button>
                        </Link>
                    </div>
                    <table className='table table-bordered table-striped table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>EMAIL</th>
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apidata.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.e_name}</td>
                                                <td>{item.e_age}</td>
                                                <td>{item.e_email}</td>
                                                <td>
                                                    <Link to='/Update'>
                                                        <button className="btn btn-primary" onClick={() => setDataTostorage(item.id, item.e_name, item.e_age, item.e_email)}>EDIT</button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => { if (window.confirm('Are you sure to delete data??')) { handleDelete(item.id) } }}>DELETE</button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Read
