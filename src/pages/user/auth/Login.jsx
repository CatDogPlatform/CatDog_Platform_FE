import React, { useState } from "react"
import "./Login.scss"
import SignUp from "./SignUp"
import { Link } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = () => {
        if (!username || !password) {
            setError(alert("Vui lòng nhập dữ liệu"))
        } else console.log("Thực hiện đăng nhập...")

        setError(null)
        
    }

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
                        placeholder="Username"
                        value={username}
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
    )
}

export default Login
