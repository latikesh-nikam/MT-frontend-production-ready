import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { schema } from "./Signup.validation";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import styles from "../Signup/Signup.module.scss";
import ISignupProps from "./Signup.types";
import { useRef, useState } from "react";

const Signup = () => {
  const [securityQuestion, setSecurityQuestion] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSecurityQuestion(event.target.value as string);
  };

  const { t } = useTranslation();
  const captchaRef = useRef<any>(null);
  const [captchaToken, setCaptchaToken] = useState("");

  console.log(t("home"));

  const resolver = yupResolver(schema);

  console.log(captchaRef.current);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignupProps>({
    defaultValues: {
      email: "",
      name: "",
      phone: 0,
      gender: "",
      occupation: "",
      newPassword: "",
      confirmPassword: "",
      securityQuestion: "",
      securityQuestionAnswer: "",
    },
  });
  const formData: any = {};
  const submit = (data: any) => {
    console.log(data);
    const token = captchaRef.current.getValue();
    setCaptchaToken(token);
    captchaRef.current.reset();
    formData["data"] = data;
    formData["captchaToken"] = token;
    console.log(formData);
    reset({
      email: "",
      name: "",
      phone: 0,
      gender: "",
      occupation: "",
      newPassword: "",
      confirmPassword: "",
      securityQuestion: "",
      securityQuestionAnswer: "",
    });
  };
  return (
    <>
      <Paper elevation={3} className={styles.signUp}>
        <Box>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className={styles.formContainer}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h1">
                Sign up
              </Typography>
              <Box sx={{ mt: 1 }}>
                <form onSubmit={handleSubmit((data) => submit(data))}>
                  <Box className={styles.box1}>
                    <Controller
                      name="name"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          error={!!errors.name}
                          helperText={errors.name ? errors.name?.message : ""}
                          margin="dense"
                        />
                      )}
                    />
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Enter Email"
                          variant="outlined"
                          fullWidth
                          error={!!errors.email}
                          helperText={errors.email ? errors.email?.message : ""}
                          margin="dense"
                        />
                      )}
                    />
                  </Box>
                  <Box className={styles.box2}>
                    <Controller
                      name="phone"
                      control={control}
                      defaultValue={0}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Enter Phone Number"
                          variant="outlined"
                          fullWidth
                          error={!!errors.phone}
                          helperText={errors.phone ? errors.phone?.message : ""}
                          margin="dense"
                        />
                      )}
                    />
                    <Controller
                      name="occupation"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Enter Occupation"
                          variant="outlined"
                          fullWidth
                          error={!!errors.occupation}
                          helperText={
                            errors.occupation ? errors.occupation?.message : ""
                          }
                          margin="dense"
                        />
                      )}
                    />
                  </Box>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue="other"
                    render={({ field }) => (
                      <>
                        {/* <FormControl variant="outlined"> */}
                        <FormLabel id="gender">Select Gender</FormLabel>
                        <RadioGroup {...field} row aria-labelledby="gender">
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                            name="female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                            name="male"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label="Other"
                            name="other"
                          />
                        </RadioGroup>
                        {/* </FormControl> */}
                      </>
                    )}
                  />
                  <Box className={styles.box3}>
                    <Controller
                      name="securityQuestion"
                      control={control}
                      defaultValue={""}
                      render={({ field }) => (
                        <>
                          <FormControl
                            sx={{ marginTop: "0.5rem", minWidth: "47%" }}
                          >
                            <InputLabel id="securityQuestion-label">
                              Select Security Question
                            </InputLabel>
                            <Select
                              {...field}
                              labelId="securityQuestion-label"
                              id="securityQuestions"
                              label="Select Security Question"
                              error={!!errors.securityQuestion}
                              margin="dense"
                            >
                              <MenuItem value={"10"}>
                                What is your Favourite Food?
                              </MenuItem>
                              <MenuItem value={"20"}>
                                Who is your role model?
                              </MenuItem>
                              <MenuItem value={"30"}>
                                Where were you born?
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </>
                      )}
                    />
                    <Controller
                      name="securityQuestionAnswer"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Enter Security Question Answer"
                          variant="outlined"
                          fullWidth
                          error={!!errors.securityQuestionAnswer}
                          helperText={
                            errors.securityQuestionAnswer
                              ? errors.securityQuestionAnswer?.message
                              : ""
                          }
                          margin="dense"
                        />
                      )}
                    />
                  </Box>
                  <Box className={styles.box4}>
                    <Controller
                      name="newPassword"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Enter New Password"
                          variant="outlined"
                          fullWidth
                          error={!!errors.newPassword}
                          helperText={
                            errors.newPassword
                              ? errors.newPassword?.message
                              : ""
                          }
                          margin="dense"
                        />
                      )}
                    />
                    <Controller
                      name="confirmPassword"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Confirm New Password"
                          variant="outlined"
                          fullWidth
                          error={!!errors.confirmPassword}
                          helperText={
                            errors.confirmPassword
                              ? errors.confirmPassword?.message
                              : ""
                          }
                          margin="dense"
                        />
                      )}
                    />
                  </Box>
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY || ""}
                    ref={captchaRef}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </form>
                <Grid container>
                  <Grid item xs className={styles.link}>
                    <a href="#">Back to Login</a>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      </Paper>
    </>
  );
};
export default Signup;
