import React from 'react';

const Salary = (props) => {
    const number = props.number
    let total = 0
    for (let i = 0; i < number.length; i++) {
        const sal = number[i];
        total = total + sal.salary;
    }
    return (
        <div>
            <h3>Salary Summery</h3>
            <h4>Number of Employee: {number.length} </h4>
            <h4>Total Salary: {total}</h4>
        </div>
    );
};

export default Salary;