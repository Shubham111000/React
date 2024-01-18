import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ListEmployee.css";
function ListEmployee() {
  const [employees, setEmployee] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5132/api/Employee")
      .then((res) => res.json())
      .then((result) => {
        setEmployee(result);
      });
  }, []);
  return (
    <div>
      <h4>
        <Link to="/create">Create</Link>
      </h4>
      <h2>Employees Data...</h2>
      <table>
        {" "}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Departmrnt</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>

              <td>
                {" "}
                <a href={"/emp/" + emp.id}>display</a>
              </td>

              <td>
                {" "}
                <a href={"/empup/" + emp.id}>Edit</a>
              </td>

              <td>
                {" "}
                <a href={"/empdel/" + emp.id}>delete</a>
              </td>
            </tr>
          ))}
        </tbody>{" "}
      </table>
    </div>
  );
}
export default ListEmployee;
