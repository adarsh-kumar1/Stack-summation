import React, { useState } from "react";
// import { useHistory } from "react-router";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin() {
  let navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const login = async (e) => {
    e.preventDefault();
    console.log("submitted Data : ", state);
    try {
      const res = await axios.post("http://localhost:5000/userLogin", state);
      console.log("Result : ", res.data);
      if (res.data) {
        alert("Login Successfully ", res.data);
        navigate("/dashboard");
      } else {
        alert("Wrong Username/Password ");
      }
    } catch (err) {
      console.log(err.message);
      alert("Login failed");
    }
  };

  return (
    <div style={{ marginLeft: "30%", marginTop: "17%" }}>
      <div
        className="card"
        style={{
          width: "500px",
          padding: "20px",
          display: "flex",
          backgroundColor: "lightblue",
        }}
      >
        <h2 style={{ textAlign: "center", padding: "5px" }}>User Login</h2>
        <form onSubmit={login}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Username
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onInput={(e) => {
                setState((preval) => ({
                  ...preval,
                  username: e.target.value,
                }));
              }}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Password
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              aria-label="password"
              aria-describedby="basic-addon1"
              onInput={(e) => {
                setState((preval) => ({
                  ...preval,
                  password: e.target.value,
                }));
              }}
            />
          </div>

          <Link className="btn btn-primary float-left" to="/register">
            {" "}
            Register
          </Link>

          <button
            className="btn btn-primary float-right"
            style={{ float: "right" }}
            type="submit"
          >
            {" "}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
