import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShieldDog } from "@fortawesome/free-solid-svg-icons"
import "./Login.scss"

const Login = () => {
    return (
        <div className="login">
            <div className="login-sign">
                <h1>Sign in</h1>
            </div>
            <div>
                <p className="login-ask">
                    Don't have an account ?{" "}
                    <span className="login-register">Register</span>
                </p>
            </div>
            <div className="login-input">
                <div>
                    <input placeholder="Username" />
                </div>
                <div>
                    <input placeholder="Password" style={{ marginTop: "20px" }} />
                </div>
            </div>
            <div className="login-forgot">
                <p>Forgot Password ?</p>
            </div>
            <div className="login-confirm">
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login
