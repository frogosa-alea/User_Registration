import React from 'react'
import { RegistrationForm } from './RegistrationForm';
import { registerUser } from './api'
import { useHistory } from 'react-router-dom';

export const RegisterUser = () => {
    const history = useHistory()
    const onSubmit = async (data) => {
        const obj = await registerUser(data)
        console.log(obj)
        history.push("/")
    }
    return (
            <div className="mt-4 form-container">
                <RegistrationForm onSubmit={onSubmit} />
        </div>
    )
}
