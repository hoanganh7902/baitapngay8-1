import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function EmployeeForm() {

    const { id } = useParams()
    const [employee, setEmployee] = useState([])
    console.log(employee);


    const fetchData = async () => {
        const response = await fetch('/employee.json')
        console.log("response", response);
        
        const dataResponse = await response.json()        
        const currentEmployee = dataResponse.find((employeeC) => (
            employeeC.id === parseInt(id)
        ))
        setEmployee(currentEmployee)
        console.log("currentEmployee", currentEmployee);
        
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <form onSubmit={(e) => (e)}>
            <h1>Edit information {id}</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name:</th>
                        <th>Position:</th>
                        <th>Salary:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="number" name="id" value={id} readOnly />
                        </td>
                        <td>
                            <input type="text" name="name" value={employee.name}/>
                        </td>
                        <td>
                            <input type="texttext" name="position"/>
                        </td>
                        <td>
                            <input type="number" name="salary"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
}
