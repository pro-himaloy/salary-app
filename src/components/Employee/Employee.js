import React, { useState } from 'react';
import fakeData from '../../fakeData/employeeInfo'
import './Employee.css'
import Data from '../Data/Data';
import Salary from '../Salary/Salary';


const Employee = () => {
    const employeeGenInfo = fakeData;
    const [employee, setEmployee] =useState(employeeGenInfo);
    const [number, setNumber] = useState([]);
    const handleAddSalary = (employeeData) => {
        const newNumber = [...number, employeeData]
        setNumber(newNumber);
    }
    return (
        <div className = "body">
            <div className="employee-container">
                <h1>Employee's Detail Information</h1>
                    {employee.map(employee => <Data handleAddSalary = {handleAddSalary} employeeData= {employee}></Data>)}                  
            </div>
            <div className="salary-container">
                <Salary number = {number}></Salary>
            </div>
        </div>
    );
};

export default Employee;