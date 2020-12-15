import React, { useState } from "react";
import config from "../config";

function Register(props) {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { username, password };
      if (!username || !password) {
        alert('Username and Password Must Not Be Blank!')
      }
      const response = await fetch(
        `${config.API_ENDPOINT}/api/users/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        props.setAuth(true);
      } else {
        props.setAuth(false);
        alert(parseRes.error);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          {" "}
          Username:
          <p>
            <input
              type="text"
              name="username"
              value={username}
              required
              onChange={(e) => onChange(e)}
            />
          </p>{" "}
        </label>
        <label>
          {" "}
          Password:
          <p>
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={(e) => onChange(e)}
            />
          </p>{" "}
        </label>
        <label>
          {" "}
          Confirm Password:
          <p>
            <input type="password" name="confpass" required/>
          </p>{" "}
        </label>
        <button onClick={onSubmit}>Create Account</button>
      </form>
    </div>
  );
}
export default Register;
