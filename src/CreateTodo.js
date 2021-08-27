import React from 'react'
import { RegForm } from './RegForm';
import { createTodo } from './api'
import { useHistory } from 'react-router-dom';

export const CreateTodo = () => {
    const history = useHistory()
    const onSubmit = async (data) => {
        await createTodo(data)
        history.push("/")
    }
    return (
        <div className="container">
                <RegForm onSubmit={onSubmit} />
        </div>
    )
}