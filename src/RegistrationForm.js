import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import { ErrorMessage } from "@hookform/error-message";
import './style.css'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
}));

export const RegistrationForm = ({ user, onSubmit }) => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        criteriaMode: "all",
        defaultValues: {
            firstName: user ? user.firstName : "",
            middleName: user ? user.middleName : "",
            lastName: user ? user.lastName : "",
            email: user ? user.email : "",
            number: user ? user.number : "",
            birthplace: user ? user.birthplace : "",
            sex: user ? user.sex : "Male",
            address: user ? user.address : "",
            province: user ? user.province : "",
            city: user ? user.city : "",
            zip: user ? user.zip : "",
        }
    });
    const classes = useStyles();

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    })
    return (
        <div className="form-group main-container">
            <form onSubmit={submitHandler}>
            <head>
                <title>Registration Form</title>
                <link rel="stylesheet" href="https://codepen.io/gymratpacks/pen/VKzBEp#0"></link>
                <link href='https://fonts.googleapis.com/css?family=Nunito:400,300' rel='stylesheet' type='text/css'></link>
            </head>
                <div className="col-12">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input {...register('firstName', { required: "*First name is required." })} className="form-control" type="text" name="firstName" id="firstName" placeholder="Enter your first name" />
                    <ErrorMessage
                        errors={errors}
                        name="firstName"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="middleName" className="form-label">Middle name</label>
                    <input {...register('middleName', { required: "*Middle name is required." })} className="form-control" type="text" name="middleName" id="middleName" placeholder="Enter your middle name" />
                    <ErrorMessage
                        errors={errors}
                        name="middleName"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input {...register('lastName', { required: "*Surname is required." })} className="form-control" type="text" name="lastName" id="lastName" placeholder="Enter your last name" />
                    <ErrorMessage
                        errors={errors}
                        name="lastName"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input {...register('email', { required: "*Email is required." })} type="email" className="form-control" id="email" placeholder="Enter your email" />
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="number" className="form-label">Contact Number</label>
                    <input {...register('number', { required: "*Mobile number is required." })} type="text" className="form-control" id="number" placeholder="Enter your contact number" />
                    <ErrorMessage
                        errors={errors}
                        name="number"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="birthplace" className="form-label">Birthplace</label>
                    <input {...register('birthplace', { required: "*Birthplace is required." })} type="text" className="form-control" id="birthplace" placeholder="Enter your birthplace" />
                    <ErrorMessage
                        errors={errors}
                        name="birthplace"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="col-12">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input {...register('address', { required: "*Address is required." })} type="text" className="form-control" id="address" placeholder="Enter your permanent address" />
                    <ErrorMessage
                        errors={errors}
                        name="address"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="form-group">
                    <Button
                        type="submit"
                        variant="contained"
                        style={{
                            backgroundColor: '#343a40',
                            color: '#fff',
                            width: '100%'
                        }}
                        size="medium"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </div>
            </form>
        </div>
    )
}
