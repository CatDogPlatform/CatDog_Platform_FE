import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "../../../hook/UseAuth";
import * as Yup from "yup";
import { useFormik } from "formik";
import loginApi from "../../../utils/LoginAPI";

export default function SignIn() {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const validationSchema = Yup.object({
        email: Yup.string().required("Username is required").min(3, "Username must be at least 3 characters"),
        password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await loginApi.login({
                    email: values.email,
                    password: values.password,
                });
                console.log("abc", response);
                console.log("abccdsad", response.access_token);
                localStorage.setItem("access_token", response.access_token);
                localStorage.setItem("userInfor", JSON.stringify(response.data));
                console.log("first", response.data);
                setAuth({ user: response.data, accessToken: response.access_token });
                navigate("/");
                toast.success(response.message);
            } catch (error) {
                if (error.response) {
                    toast.error("account or password is wrong, please check again! ");
                } else {
                    toast.error("Login Failed, please check your username or password again!");
                }
            }
        },
    });

    return (
        <Box
            className="login_container"
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        p: "40px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        border: "2px solid grey",
                        borderRadius: "10px",
                        boxShadow: "5px 10px 8px #888888",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="email"
                            name="email"
                            autoComplete="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            autoComplete="current-password"
                        />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                        <br />

                        <div className="display__button">
                            <button className="button-type2" type="submit" onClick={formik.handleSubmit}>
                                <span className="btn-txt2">SIGN IN</span>
                            </button>
                        </div>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
