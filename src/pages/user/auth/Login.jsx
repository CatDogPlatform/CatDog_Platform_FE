import React, { useState } from "react";
import "./Login.scss";
import SignUp from "./SignUp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setError(alert("Vui lòng nhập dữ liệu"));
    } else {
      const url = new URL("https://64a7842d096b3f0fcc8165a8.mockapi.io/pdfAPi");
      url.searchParams.append("email", email);
      url.searchParams.append("password", password);

      axios
        .get(url)
        .then((response) => {
          console.log(response);
          if (response.data.length > 0) {
            alert("success");
            navigate("/");
          } else {
            setError(
              "Đăng nhập thất bại. Vui lòng kiểm tra tài khoản và mật khẩu."
            );
          }
        })
        .catch((error) => {
          setError("Đăng nhập thất bại. Đã xảy ra lỗi.");
          console.error(error);
        });
    }
  };

  return (
    <div className="login">
      <div className="login-sign">
        <h1>Sign in</h1>
      </div>
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
        <div>
          <input
            type="password"
            placeholder="Password"
            style={{ marginTop: "20px" }}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className="login-forgot">
        <p>Forgot Password ?</p>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div className="login-confirm">
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
