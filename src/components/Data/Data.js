import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Data.css'

const Data = (props) => {
    const {name, image, id, designation, phone, email, salary} = props.employeeData;
    return (
        <div className = "employee">
            <div>
                <br/>
                <img src={image} className = "photo" alt=""/>
            </div>
            <div className = "info-container">
                <h3 className = "name">{name}</h3>
                <h5>Employee Id: {id}</h5>
                <h5>Designation: {designation}</h5>
                <h5>Phone No. {phone}</h5>
                <h5>email : {email}</h5>
                <h4>Salary : {salary}</h4>
                <button className="pay-button" onClick = {() => props.handleAddSalary(props.employeeData)}> <FontAwesomeIcon icon={faUserPlus} />  Pay Salary</button>
            </div>            
        </div>
    );
};

export default Data;