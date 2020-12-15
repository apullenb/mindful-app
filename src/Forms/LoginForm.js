import React, { useState } from "react";
import config from "../config";
import { Link } from "react-router-dom";

function LoginForm({ setAuth }) {
  const [formHandleUser, setformHandleUser] = useState("");
  const [formHandlePass, setformHandlePass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newLogin = { username: formHandleUser, password: formHandlePass };
      const loginRequest = {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newLogin),
      };
      const response = await fetch(
        `${config.API_ENDPOINT}/api/users/login`,
        loginRequest
      );

      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
        alert(parseRes.error);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          {" "}
          Username:
          <p>
            <input
              type="text"
              name="user"
              value={formHandleUser}
              onChange={(e) => setformHandleUser(e.target.value)}
            />
          </p>{" "}
        </label>
        <label>
          {" "}
          Password:
          <p>
            <input
              type="password"
              name="pass"
              value={formHandlePass}
              onChange={(e) => setformHandlePass(e.target.value)}
            />
          </p>{" "}
        </label>
        <button onClick={handleSubmit}>Login</button>
      </form>
      <h4 style={{ marginTop: "15px", textAlign: "center", color: "white" }}>
        Need to Create an Account?{" "}
        <Link to={{ pathname: "/register" }}>
          {" "}
          <button
            style={{ fontSize: "unset", fontSize: "14px", padding: "8px" }}
          >
            Create Account
          </button>
        </Link>{" "}
      </h4>

      <p style={{ marginTop: "12px", textAlign: "center", color: "white" }}>
        Just want to test the app?
        <span> Use the Demo Account </span>
      </p>
      <p
        style={{
          marginTop: "5px",
          textAlign: "center",
          color: "white",
          fontSize: "14px",
        }}
      >
        Username: Test1 | Password: 12345
      </p>
    </div>
  );
}

export default LoginForm;
