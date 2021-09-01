import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTodos } from './api';

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
      <div className="mt-3">
        <h3>Registered Users</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Text</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((todo) => (
              <tr key={todo._id}>
                <td>{todo.password}</td>
                <td>{todo.username}</td>
                <td>{todo.email}</td>
                
                <td>{todo.text}</td>
                <td>{todo.description}</td>
                <td>
                  <Link to={`/edit/${todo._id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};