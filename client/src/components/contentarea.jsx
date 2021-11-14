import React, { useState, useEffect } from "react";

import { Avatar } from "antd";
import axios from "axios";

const Contentarea = () => {
  const [state, setState] = useState([]);

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/user/getlist");
      console.log("Result : ", res.data);
      setState(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    console.log("hello");
    getUser();
  }, []);

  return (
    <div>
      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <td>Tickets Details</td>
            <td>Customer Name</td>
            <td>Date</td>
            <td>Priority</td>
          </tr>
        </thead>
        <tbody>
          {state.map((record, i) => (
            <tr>
              <td>
                <Avatar style={{ backgroundColor: "orange" }}>U</Avatar>{" "}
                <span style={{ fontSize: "1rem" }}>
                  Contact Email not Linked
                </span>
                <p>Updated 1 day ago</p>
              </td>
              <td>{record.fullname}</td>
              <td>May 26, 2019</td>
              <td>
                <button className="btn btn-danger">High</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contentarea;
