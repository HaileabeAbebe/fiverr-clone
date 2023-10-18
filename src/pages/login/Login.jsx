import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import newRequest from "./../../utils/newRequest";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post(
        "/auth/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await newRequest.post("/auth/login", {
  //       username,
  //       password,
  //     });
  //     localStorage.setItem("token", res.data.token);
  //     navigate("/");
  //     window.location.reload();
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //     setError(err.response.data.message);
  //   }
  // };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          placeholder="myPassword2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <span style={{ color: "#B00020", fontSize: "14px" }}>
          {error && error}
        </span>
      </form>
    </div>
  );
};

export default Login;
