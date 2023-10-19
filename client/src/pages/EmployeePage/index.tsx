import React from 'react'
import './index.css'
import EmployeeTable from '../../Components/EmployeeTable';
import EmployeeForm from '../../Components/EmployeeForm';

const EmployeePage = () => {

    return <div className='container'>
        <div className='header'>
            <h1 className='heading'>Current Employees</h1>
            <button className='heading-button'>Add Employee</button>
        </div>
        <EmployeeTable />
        <EmployeeForm/>
    </div>

}

export default EmployeePage