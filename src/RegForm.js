import React from "react";
import { useForm } from "react-hook-form";

export const RegForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { 
      text: todo ? todo.text : "",
      description: todo ? todo.description : ""
      }
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <form onSubmit={submitHandler}>
<div className="form-group">
            <h1 id="main-title">Registration Form</h1>
                <div id="first-name" class="placeholders">
                    <label id="pl_first_name" for="text" class="">First name</label>
                    <input {...register('text')} className="form-control" type="text" name="firstname" id="pl_first_name" placeholder="Enter your first name..." required />
                </div>

                <div id="username" class="placeholders">
                    <label id="pl_username" for="text" class="">Username (up to 8 characters)</label>
                    <input {...register('text')} className="form-control"  type="text" name="username" id="pl_username" maxlength="8" placeholder="Enter your username..."/>
                </div>

                <div id="email" class="placeholders">
                    <label id="pl_email" for="text" class="">Email</label>
                    <input {...register('text')} className="form-control" type="email" name="email" id="pl_email" placeholder="Enter your email..."/>
                </div>

                <div id="password" class="placeholders">
                    <label id="pl_password" for="text" class="">Password</label>
                    <input {...register('text')} className="form-control" type="password" name="password" id="pl_password" maxlength="8" placeholder="Enter your password..." />
                </div>


      
        <label htmlFor="text">Text:</label>
        <input {...register('text')} className="form-control" type="text" name="text" id="text" />
        <label htmlFor="description">Description:</label>
        <input {...register('description')} className="form-control" type="text" name="description" id="description" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
