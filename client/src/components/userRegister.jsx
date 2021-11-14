import React, { useState } from "react";
import axios from "axios";

export default function UserRegister() {
  const [state, setState] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    profileimage: "",
  });
  const userRegister = async (e) => {
    e.preventDefault();
    console.log("submitted Data : ", state);
    try {
      const res = await axios.post("http://localhost:5000/adduser", state);
      console.log("Result : ", res.data);
      if (res.data) {
        alert("User Registered Successfully ", res.data);
      } else {
        alert("Username already exist please try another ");
      }
    } catch (err) {
      console.log(err.message);
      alert("Login failed");
    }
  };
  return (
    <>
      <div style={{ marginLeft: "30%", marginTop: "17%" }}>
        <div
          className="card"
          style={{
            width: "800px",
            padding: "20px",
            display: "flex",
            backgroundColor: "white",
          }}
        >
          {" "}
          <h2 style={{ textAlign: "center" }}>User Register Page</h2>
          <form onSubmit={userRegister}>
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
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                E-mail
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your E-mail ID "
                aria-describedby="basic-addon1"
                onInput={(e) => {
                  setState((preval) => ({
                    ...preval,
                    email: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Full Name
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Full Name "
                aria-describedby="basic-addon1"
                onInput={(e) => {
                  setState((preval) => ({
                    ...preval,
                    fullname: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Profile Photo
              </span>
              <input
                type="file"
                className="form-control"
                aria-describedby="basic-addon1"
                onInput={(e) => {
                  setState((preval) => ({
                    ...preval,
                    profileimage: e.target.value,
                  }));
                }}
              />
            </div>
            <button
              className="btn btn-primary float-right"
              style={{ marginLeft: "80%" }}
              type="Register"
            >
              {" "}
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
