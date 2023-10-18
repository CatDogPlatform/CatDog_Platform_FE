import React from "react"
import "./Login.scss"
function SignUp() {
    return (
        <div className="login">
            <div className="login-sign">
                <h1>Sign Up</h1>
            </div>
            <div className="login-input">
                <div>
                    <input placeholder="Email" />
                </div>
                <div>
                    <input placeholder="Password" style={{ marginTop: "20px" }} />
                </div>
                <div>
                    <input
                        placeholder="Confirm Password"
                        style={{ marginTop: "20px" }}
                    />
                </div>
            </div>
            <div className="login-confirm" style={{ marginTop: "50px" }}>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp
