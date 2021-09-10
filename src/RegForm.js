import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export const RegForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: todo?todo.firstName : "",
      middleName: todo?todo.middleName: "",
      lastName: todo?todo.lastName: "",
      username: todo ? todo.username : "",
      email: todo ? todo.email : "",
      },
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <form onSubmit={submitHandler}>

<head>
        <title>Registration Form</title>
        <link rel="stylesheet" href="https://codepen.io/gymratpacks/pen/VKzBEp#0"></link>
        <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'></link>
        
    </head>
    <body>
      <div class="row">
    <div class="col-md-12">
      <form>
        <h1> Registration Form </h1><br></br>

        <fieldset>
          <label for="name">First Name:</label>
          <input {...register('firstName', { required: true })} className="form-control" type="text" name="firstName" id="firstName" placeholder="First name" required />

          <label for="name">Middle Name:</label>
          <input {...register('middleName')} className="form-control" type="text" name="middleName" id="firstName" placeholder="Middle name" />

          <label for="name">Last Name:</label>
          <input {...register('lastName', { required: true })} className="form-control" type="text" name="lastName" id="firstName" placeholder="Last name" required />

          <label for="username">Username:</label>
          <input {...register('username', { required: true })} className="form-control"  type="text" name="username" id="pl_username" maxlength="8" placeholder="Enter your username..." required/>

          <label for="email">Email:</label>
          <input {...register('email', { required: true })} className="form-control" type="email" name="email" id="pl_email" placeholder="Enter your email..." required/>
         </fieldset>
         <br></br><br></br>
        <div className="form-group">
        <button type="button" class="btn btn-primary btn-lg" id="submit-button"  >Submit</button>

      </div>
        
       </form>
        </div>
      </div>
      
    </body>

    </form>
  );
};
