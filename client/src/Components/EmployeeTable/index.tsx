import React from "react";
import {useGetEmployeesQuery} from "../../features/employee/employeeApi";
import './index.css'
const EmployeeTable: React.FC = () => {
  const {data: employees, error, isLoading} = useGetEmployeesQuery();

  if (isLoading) return <p>Loading...</p>;
  //   if (error) return <p>Error occurred</p>;

  return (
    <table className="unstyledTable">
      <thead>
        <tr>
          <th>Employee #</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Salutation</th>
          <th>Profile Colour</th>
        </tr>
      </thead>

      <tbody></tbody>
    </table>
  );
};

export default EmployeeTable;
