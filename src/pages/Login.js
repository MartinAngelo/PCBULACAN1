import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Navcss from "../Component/Nav";
import Nav from "../Component/Nav";

export default function Login() {
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (prop) => (e) => {
    setPayload({ ...payload, [prop]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();

    //backend

    if (payload.username === "admin" && payload.password === "password") {
      //go to home page
      history.push("/Home");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div >
      <Header />
      <Nav />

        <form className="form">
          <h2>Login</h2>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange("username")}
            value={payload.username}
          />

          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange("password")}
            value={payload.password}
          />

          <button onClick={login}>Login</button>
        </form>
     
      <Footer />
      
    </div>
  );
}
