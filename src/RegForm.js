import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export const RegForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstname: todo ? todo.firstname : "",
      username: todo ? todo.username : "",
      email: todo ? todo.email : "",
      text: todo ? todo.text : "",
      description: todo ? todo.description : ""
      }
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <form onSubmit={submitHandler}>

<head>
        <title>Sign Up Form</title>
        <link rel="stylesheet" href="https://codepen.io/gymratpacks/pen/VKzBEp#0"></link>
        <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'></link>
        
    </head>
    <body>
      <div class="row">
    <div class="col-md-12">
      <form action="index.html" method="post">
        <h1> Registration Form </h1><br></br>
        
        <fieldset>
          
        
          <label for="firstname">Name:</label>
          <input {...register('firstname')} className="form-control" type="text" name="firstname" id="pl_first_name" placeholder="Enter your name..." required />

          <label for="username">Username:</label>
          <input {...register('username')} className="form-control"  type="text" name="username" id="pl_username" maxlength="8" placeholder="Enter your username..."/>

          <label for="email">Email:</label>
          <input {...register('email')} className="form-control" type="email" name="email" id="pl_email" placeholder="Enter your email..."/>
        
          <label>Age:</label><br></br>
          <input type="radio" id="under_13" value="under_13" name="user_age"/><label for="under_13" class="light">Under 13</label><br></br>
          <input type="radio" id="over_13" value="over_13" name="user_age"/><label for="over_13" class="light">Over 13</label><br></br><br></br>

          <label>Gender:</label><br></br>
          <input type="radio" id="male" value="Male" name="gender"/><label for="male" class="light">Male</label><br></br>
          <input type="radio" id="female" value="Female" name="gender"/><label for="female" class="light">Female</label><br></br><br></br>
          
         <label for="job">Year Level:</label>
          <select id="job" name="year">
              <option value="initial"></option>
              <option value="first">First Year</option>
              <option value="second">Second Year</option>
              <option value="third">Third Year</option>
              <option value="fourth">Fourth Year</option>
          </select>

         </fieldset>
         <br></br><br></br>
        <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
        
       </form>
        </div>
      </div>
      
    </body>

    </form>
  );
};
