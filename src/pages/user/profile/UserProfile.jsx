import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { object, string } from "yup";
import { Select, MenuItem } from "@mui/material";

const Profile = () => {
  const id = useParams();
  const jsonString = localStorage.getItem("userInfor");
  const user = JSON.parse(jsonString);
  const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
  const [initialValues, setInitialValues] = useState(user);
  const [isAvatarChanged, setAvatarChanged] = useState(false);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const updatedAvatar = e.target.result;
        const updatedValues = { ...initialValues, avatar: updatedAvatar };
        setInitialValues(updatedValues);
        setAvatarChanged(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (!isAvatarChanged) {
        values.avatar = initialValues.avatar;
      }
      // Dispatch update user action here if needed
      const updatedUserString = JSON.stringify(values);
      localStorage.setItem("userInfor", updatedUserString);
      toast.success("Update successful!");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Update unsuccessful!");
    }
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Stack spacing={1}>
          <Paper>
            <Grid container>
              <Stack direction="row">
                <Grid item xs={4} margin={5}>
                  <Avatar
                    type="Profile/img"
                    sx={{ width: 180, height: 180 }}
                    src={initialValues.avatar}
                    alt="Avatar"
                  />
                  <Typography marginLeft={5}></Typography>
                </Grid>

                <Grid item xs={8} marginLeft={15}>
                  <h2 name="username" style={{ fontSize: 50 }}>
                    {/* {user.username} */}
                  </h2>
                  <Button
                    onClick={() =>
                      document.getElementById("avatarInput").click()
                    }
                    variant="contained"
                    startIcon={<DriveFolderUploadIcon />}
                  >
                    Upload Avatar
                  </Button>
                  <input
                    id="avatarInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleAvatarChange}
                  />
                </Grid>
              </Stack>
            </Grid>
          </Paper>
          <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={object({
              fullName: string()
                .required("Please enter user name")
                .min(2, "Name is too short"),
              email: string()
                .required("Please enter email")
                .min(2, "Invalid email"),
              phone: string()
                .required("Please enter new phone number")
                .matches(phoneRegExp, "Phone number is not valid")
                .min(10, "Phone number should be a minimum of 10 digits"),
              password: string().required("Please enter Full name"),
              gender: string().required("Please select Gender"),
            })}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Paper style={{ padding: 30 }}>
                <Grid container>
                  <Stack direction="row" justifyContent="center">
                    <Grid item xs={4} marginRight={20}>
                      <Typography paragraph marginRight={5}>
                        Full Name*
                      </Typography>
                      <Typography paragraph marginRight={5} marginTop={7}>
                        Email *
                      </Typography>
                      <Typography paragraph marginRight={5} marginTop={7}>
                        Phone
                      </Typography>
                      <Typography paragraph marginRight={5} marginTop={7}>
                        Password
                      </Typography>
                      <Typography paragraph marginRight={5} marginTop={7}>
                        Gender
                      </Typography>
                    </Grid>
                    <Form>
                      <Grid item xs={8}>
                        <Typography paragraph>
                          <Field
                            as={TextField}
                            name="fullName"
                            style={{ width: 700, height: 60 }}
                            error={Boolean(errors.fullName) && touched.fullName}
                            helperText={touched.fullName && errors.fullName}
                          />
                        </Typography>
                        <Typography paragraph>
                          <Field
                            as={TextField}
                            type="email"
                            name="email"
                            style={{ width: 700, height: 60 }}
                            error={Boolean(errors.email) && touched.email}
                            helperText={touched.email && errors.email}
                          />
                        </Typography>
                        <Typography paragraph>
                          <Field
                            as={TextField}
                            name="phone"
                            style={{ width: 700, height: 60 }}
                            error={Boolean(errors.phone) && touched.phone}
                            helperText={touched.phone && errors.phone}
                          />
                        </Typography>
                        <Typography paragraph>
                          <Field
                            as={TextField}
                            name="password"
                            type="password"
                            style={{ width: 700, height: 60 }}
                            error={Boolean(errors.password) && touched.password}
                            helperText={touched.password && errors.password}
                          />
                        </Typography>
                        <Typography paragraph>
                          <Field
                            as={Select}
                            name="gender"
                            style={{ width: 700, height: 60 }}
                            error={Boolean(errors.gender) && touched.gender}
                            helperText={touched.gender && errors.gender}
                          >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </Field>
                        </Typography>

                        <Typography>
                          <Button
                            variant="contained"
                            type="submit"
                            startIcon={<ModeEditIcon />}
                            disabled={!isValid || !dirty}
                          >
                            Edit
                          </Button>
                        </Typography>
                      </Grid>
                    </Form>
                  </Stack>
                </Grid>
              </Paper>
            )}
          </Formik>
        </Stack>
      </Container>
    </div>
  );
};

export default Profile;
