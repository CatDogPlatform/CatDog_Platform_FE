import React from "react"
import "./Login.scss"
const LoginAdmin = () => {
    return (
        <div className="body">
            <div className="login1">
                <h1>Sign in</h1>
            </div>
            <div className="log-register">
                <p>
                    {" "}
                    Don't have an account? <span className="register">Register</span>
                </p>
            </div>
            <div className="input-form">
                <div className="username">
                    <input placeholder="Username"></input>
                </div>
                <div className="pass">
                    <input placeholder="Password"></input>
                </div>
                <div className="forgot-pass">
                    <p> Forgot Password ?</p>
                </div>
            </div>

            <div className="log-button">
                <button>Login</button>
            </div>
        </div>
    )
}

export default LoginAdmin
