import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EmployeeItem({ id, name, position, salary }) {

    const navigate = useNavigate()

    const handleEditEmployee = (e) => {
        e.preventDefault();
        navigate('/form/' + id)
        console.log(id);
        
    }

    return (
        <>
            <div>
                <span>{id}</span>
                <h4>Name: {name}</h4>
                <p>Position: {position}</p>
                <p>Salary: {salary}</p>
                <button onClick={(e) => handleEditEmployee(e)}>EDIT</button>
            </div>
        </>
    )
}
