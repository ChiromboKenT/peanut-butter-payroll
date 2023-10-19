import React from "react";
import {useGetEmployeesQuery} from "../../features/employee/employeeApi";
import './index.css'
const EmployeeTable: React.FC = () => {
  const {data : response, error, isLoading} = useGetEmployeesQuery();

  if (isLoading) return <p>Loading...</p>;



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

      <tbody>
        {error || !Array.isArray(response?.data) ? (
          <tr>
            {" "}
            <td colSpan={5} style={{textAlign: "center"}}>
              No Data
            </td>
          </tr>
        ) : (
          response?.data.map((employee, id) => {
            return (
              <tr key={`emp-${id}`}>
                <td>{employee?.employeeNumber}</td>
                <td>{employee?.firstName}</td>
                <td>{employee?.lastName}</td>
                <td>{employee?.salutation}</td>
                <td>{employee?.profileColor}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
