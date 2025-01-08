import React, { useState } from 'react'
import EmployeeItem from './EmployeeItem';

export default function EmployeeList() {

    const [employees, setEmployees] = useState([
        { id: 1, name: 'Nguyen Van A', position: 'Manager', salary: 15000000 },
        { id: 2, name: 'Tran Thi B', position: 'Developer', salary: 12000000 },
        { id: 3, name: 'Le Van C', position: 'Designer', salary: 10000000 },
        { id: 4, name: 'Pham Thi D', position: 'Tester', salary: 9000000 },
        { id: 5, name: 'Hoang Van E', position: 'HR', salary: 11000000 },
    ]);


    return (
        <>
            <h1>Employee List</h1>
            {employees.map((employee) => (
                <EmployeeItem id={employee.id} name={employee.name}
                    position={employee.position} salary={employee.salary} />
            ))}
        </>

    )
}
