import React, { useState } from 'react';
import fakeData from '../../fakeData/employeeInfo'
import './Employee.css'


const Employee = () => {
    const employeeGenInfo = fakeData;
    const [employee, setEmployee] =useState(employeeGenInfo);
    return (
        <div className = "body">
            <div className="employee-container">
                <h1>Employee's Detail Information</h1>
                <ul>
                    {
                        employee.map(employee => <li>{employee.name}</li>)
                    }
                    
                </ul>
            </div>
            <div className="salary-container">
                <h4>Salary Calculation</h4>
            </div>
        </div>
    );
};

export default Employee;