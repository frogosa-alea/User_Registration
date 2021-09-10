import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTodos, deleteUser } from './api';

export const RegisteredUserList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodos();
      setItems(todos);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <br></br>
      <h3> Registered Users </h3><br></br>
      <table>
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Middle Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
  <tbody>
    {items.map((todo) => (
              <tr key={todo._id}>
                <td data-label="Firstname">{todo.firstName}</td>
                <td data-label="Middlename">{todo.middleName}</td>
                <td data-label="Lastname">{todo.lastName}</td>
                <td data-label="Username">{todo.username}</td>
                <td data-label="Email">{todo.email}</td>
                <td data-label="Edit">
                <div class="table-button-container">
                  <button class="btn btn-dark btn-xs">
                    <Link to={`/edit/${todo._id}`}>Edit</Link></button>&nbsp;&nbsp;
                  <button class="btn btn-danger btn-xs">
                    Delete</button>&nbsp;&nbsp;
                </div>
                </td>
              </tr>
            ))}
  </tbody>
  </table>
    </div>
  );
};