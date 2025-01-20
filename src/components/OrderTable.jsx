import React from "react";
import Degradable from "../assets/images/1.jpeg";
import Plastic from "../assets/images/3.jpeg";
import Medical from "../assets/images/4.jpg";
import Nylon from "../assets/images/5.jpg";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
const DataTable = () => {
  const data = [
    {
      id: Degradable,
      name: "Agatha Onuigbo",
      email: "No 5, abiru str, ikorodu lagos state",
      project: "Degradable Waste",
      status: "Done",
      statusClass: "status-done",
    },
    {
      id: Plastic,
      name: "Oluwadamilare Ozil",
      email: "No 5, abiru str, ikorodu lagos state",
      project: "Plastic Waste",
      status: "Done",
      statusClass: "status-done",
    },
    {
      id: Nylon,
      name: "John Lanre",
      email: "No 5, abiru str, ikorodu lagos state",
      project: "Nylon",
      status: "Done",
      statusClass: "status-done",
    },
    {
      id: Medical,
      name: "Dimeji Jamil",
      email: "No 5, abiru str, ikorodu lagos state",
      project: "Medical Waste",
      status: "Pending",
      statusClass: "status-pending",
    },
    {
      id: Degradable,
      name: "Esther Daniel",
      email: "No 5, abiru str, ikorodu lagos state",
      project: "Degradable waste",
      status: "Close",
      statusClass: "status-close",
    },
    {
      id: Medical,
      name: "Anee Micheal",
      email: "No 5, abiru str, ikorodu lagos state",
      project: "Medical Waste",
      status: "Active",
      statusClass: "status-active",
    },
  ];

  return (
    <div className="table-body">
    <div className="data-table-container ">
      <h2>ORDER</h2>
      <p>
        
      </p>
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Waste Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>
                <div className="profile">
                  <img
                    src={`${row.id}`}
                    alt={row.name}
                    className="profile-img"
                  />
                  {row.name}
                </div>
              </td>
              <td>{row.email}</td>
              <td>{row.project}</td>
              <td>
                <span className={`status-badge ${row.statusClass}`}>
                  {row.status}
                </span>
              </td>
              <td>
              <button className="edit-btn"><FaEdit/></button>
                <button className="delete-btn"><FaRegTrashAlt /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></div>
  );
};

export default DataTable;
