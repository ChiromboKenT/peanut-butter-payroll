import React, {useState} from "react";
import './index.css'
const EmployeeForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Add more state variables as needed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., make an API call to add a new employee
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="heading">Current Employees</h1>
        <div style={{margin: "2rem"}}>
          <button className="heading-button">Cancel</button>
          <button className="heading-button">Save</button>
        </div>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label htmlFor="name">First Name(s): {` `}</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="inputContainer">
          <label htmlFor="fullname">Full Name*: {` `}</label>
          <input type="text" id="fullname" name="fullname" />
        </div>
        <div className="inputContainer">
          <label htmlFor="lastName">Last Name*: {` `}</label>
          <input type="text" id="lastName" name="lastName" />
        </div>
        <div className="inputContainer">
          <label htmlFor="fullname">Gross Salary $PY: {` `}</label>
          <input type="text" id="fullname" name="fullname" />
        </div>
        <div className="inputContainer">
          <label htmlFor="salutation">Salutation *</label>
          <select id="salutation" name="salutation">
            <option value="">Select Salutation...</option>
            <option value="DR">DR</option>
            <option value="MR">MR</option>
            <option value="MS">MS</option>
            <option value="MRS">MRS</option>
            <option value="MX">MX</option>
          </select>
        </div>
        <div className="inputContainer">
          <label htmlFor="gender">Gender</label>
          <div>
            <label htmlFor="male">Male</label>
            <input type="radio" id="gender" name="gender" value="Male" />
            <label htmlFor="female">Female</label>
            <input type="radio" id="female" name="female" value="Female" />
            <label htmlFor="unspecified">Unspecified</label>
            <input
              type="radio"
              id="unspecified"
              name="unspecified"
              value="Unspecified"
            />
          </div>
        </div>
        <div className="inputContainer">
          <label htmlFor="fullname">Employee Profile Colour: {` `}</label>
          <input type="text" id="fullname" name="fullname" />
        </div>
        <div className="inputContainer">
          <label htmlFor="employeeNumber">Employee #: {` `}</label>
          <input type="text" id="employeeNumber" name="employeeNumber" />
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
