import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUsers } from './api'
import { FaUserEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/fa';
import './style.css'

export const UserList = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers()
            setUsers(users)
        }
        fetchUsers()
    }, [])
    return (
        <div className="container">
            <div className="mt-3">
                <h3>Registered Users</h3>
                <table className="table table-striped  mt-3">
                    <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Middle Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => {
                                return (
                                    <tr key={user._id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.middleName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.sex}</td>
                                        <td>{user.address}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={`/edit/${user._id}`} ><FaUserEdit style={{ color: '#343a40' }} /></Link>
                                            <Link to={`/edit/${user._id}`} ><MdDelete style={{ color: '#343a40' }} /></Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
