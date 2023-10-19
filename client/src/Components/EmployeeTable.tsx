import React from "react";
import {useGetEmployeesQuery} from "../features/employee/employeeApi";

const EmployeeTable: React.FC = () => {
  const {data: employees, error, isLoading} = useGetEmployeesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred</p>;

  return (
    <table>
      <thead>
        <tr>
          {/* Add table headers */}
          <th>Employee#</th>
          <th>First Name</th>
          <th>Last Name</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {employees?.map((employee) => (
          <tr key={employee.employeeNumber}>
            <td>{employee.employeeNumber}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            {/* Add more cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
