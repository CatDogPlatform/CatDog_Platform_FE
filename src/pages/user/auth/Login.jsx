import React, { useState } from "react";
import "./Login.scss";
import SignUp from "./SignUp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; // Thêm import này

const Login = () => {
  const jsonString = localStorage.getItem("userInfor");
  const users = JSON.parse(jsonString);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); // Thêm dòng này

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // ...
  };

  React.useEffect(() => {
    switch (
      user?.role // Sử dụng user từ Redux store
    ) {
      case "admin":
        navigate("/admin");
        break;
      case "recruiter":
        navigate("/recruiter");
        break;
      case "interviewer":
        navigate("/interviewer");
        break;
      case "user":
        navigate("/candidate");
        break;
      default:
        navigate("/loginpage");
        break;
    }
  }, [user]);

  return (
    <div className="login">
      <div>
        <p className="login-ask">
          Don't have an account ?{" "}
          <Link to="/signup" className="login-register">
            Register
          </Link>
        </p>
      </div>
      <div className="login-input">
        <div>
          <input
            placeholder="Email"
            value={email}
            onChange={handleUsernameChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
