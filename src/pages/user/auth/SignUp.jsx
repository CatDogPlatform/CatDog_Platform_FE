import React, { useState } from "react"
import "./Login.scss"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordMatch, setPasswordMatch] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleSignUp = () => {
        if (!email && !password && !confirmPassword) {
            setError(alert("thiếu thông tin"))
            blurPassword()
        } else if (passwordMatch === false) {
            console.log("không trùng mật khẩu")
        } else {
            axios.post("https://64a7842d096b3f0fcc8165a8.mockapi.io/pdfAPi", {
                email: email,
                password: password,
            })
            navigate("/login")
        }
    }
    const blurPassword = () => {
        if (password === confirmPassword) {
            setPasswordMatch(true)
        } else {
            setPasswordMatch(false)
        }
    }
    return (
        <div className="login">
            <div className="login-sign">
                <h1>Sign Up</h1>
            </div>
            <div className="login-input">
                <div>
                    <input
                        placeholder="Email"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        style={{ marginTop: "20px" }}
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <input
                        placeholder="Confirm Password"
                        style={{ marginTop: "20px" }}
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        onBlur={blurPassword}
                    />
                </div>
            </div>
            {!passwordMatch ? (
                <p style={{ color: "red" }}>Mật khẩu không khớp</p>
            ) : (
                <p></p>
            )}
            <div className="login-confirm" style={{ marginTop: "50px" }}>
                <button onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUp
