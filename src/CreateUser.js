import React from 'react'
import { RegForm } from './RegForm';
import { createTodo } from './api'
import { useHistory } from 'react-router-dom';

export const CreateUser = () => {
    const history = useHistory()
    const onSubmit = async (data) => {
        await createTodo(data)
        history.push("/")
    }
    return (
        <div>
                <RegForm onSubmit={onSubmit} />
        </div>
    )
}