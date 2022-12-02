import { Fragment } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormLabel } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Paper } from '@mui/material';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { Select } from '@mui/material';
import { TextField } from '@mui/material';
import { MainDivBox } from './signup.style';
import { getData } from '../../services/http';
import { postData } from '../../services/http';
import { ISignupProps } from './Signup.types';
import { IQuestionProps } from './Signup.types';
import { LocalisationContext } from '../../hoc/Localization/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/Localization/localisationProvider.types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Signup = () => {
  const [questions, setQuestions] = useState<IQuestionProps[]>([]);
  const [captchaToken, setCaptchaToken] = useState('');
  const { localisation, updateLocalisation } = useContext(
    LocalisationContext,
  ) as ILocalisationContext;
  const { localString } = localisation;
  const captchaRef = useRef<any>(null);
  const required = localString['required'];
  const emailMessage = localString['emailMessage'];
  const minLengthPassword = localString['minLengthSix'];
  const minLengthPhone = localString['minLengthTen'];
  const maxLengthPhone = localString['maxLengthTen'];
  const passwordValidator = localString['passwordValidation'];

  const signUpSchema = Yup.object({
    name: Yup.string().required(required),
    email: Yup.string().required(required).email(emailMessage),
    password: Yup.string().required(required).min(6, minLengthPassword),
    phone: Yup.string()
      .required(required)
      .min(10, minLengthPhone)
      .max(10, maxLengthPhone),
    confirmPassword: Yup.string()
      .required(required)
      .min(6, minLengthPassword)
      .oneOf([Yup.ref('password'), null], passwordValidator),
    gender: Yup.string().required(required),
    occupation: Yup.string().required(required),
    securityQuestion: Yup.string().required(required),
    securityAnswer: Yup.string().required(required),
  });

  const getSecurityQuestions = async () => {
    const response = await getData('security');
    setQuestions(response);
  };

  useEffect(() => {
    getSecurityQuestions();
  }, []);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, defaultValues },
  } = useForm<ISignupProps>({
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      gender: '',
      occupation: '',
      password: '',
      confirmPassword: '',
      securityQuestion: '',
      securityAnswer: '',
    },
    resolver: yupResolver(signUpSchema),
  });

  const submit = async (data: any) => {
    const token = captchaRef.current.getValue();
    setCaptchaToken(token);
    data['captcha'] = captchaToken;
    try {
      const response = await postData('auth/signup', data);
      reset({
        email: '',
        name: '',
        phone: '',
        gender: '',
        occupation: '',
        password: '',
        confirmPassword: '',
        securityQuestion: '',
        securityAnswer: '',
      });
      toast.success(`${response.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setCaptchaToken('');
    } catch (error: any) {
      toast.error(error.response.data.error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setCaptchaToken('');
    }
  };

  const onCaptchaChange = () => {
    const token = captchaRef.current?.getValue();
    if (token) setCaptchaToken(token as string);
  };

  return (
    <Fragment>
      <ToastContainer />
      <MainDivBox>
        <Paper elevation={3} className="container">
          <Box className="formContainer">
            <Box className="heading">{localString['signUp']}</Box>
            <Box className="mainBox">
              <form onSubmit={handleSubmit(submit)} autoComplete="off">
                <Box className="row">
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={localString['enterName']}
                        variant="outlined"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name ? errors.name?.message : ''}
                        margin="dense"
                        size="small"
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
                        label={localString['enterEmail']}
                        variant="outlined"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email ? errors.email?.message : ''}
                        margin="dense"
                        size="small"
                      />
                    )}
                  />
                </Box>
                <Box className="row">
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={localString['enterPhoneNumber']}
                        variant="outlined"
                        fullWidth
                        error={!!errors.phone}
                        helperText={errors.phone ? errors.phone?.message : ''}
                        margin="dense"
                        size="small"
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
                        label={localString['enterOccupation']}
                        variant="outlined"
                        fullWidth
                        error={!!errors.occupation}
                        helperText={
                          errors.occupation ? errors.occupation?.message : ''
                        }
                        margin="dense"
                        size="small"
                      />
                    )}
                  />
                </Box>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue="other"
                  render={({ field }) => (
                    <Fragment>
                      <FormLabel id="gender">
                        {localString['selectGender']}
                      </FormLabel>
                      <RadioGroup {...field} row aria-labelledby="gender">
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label={localString['female']}
                          name="female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label={localString['male']}
                          name="male"
                        />
                        <FormControlLabel
                          value="other"
                          control={<Radio />}
                          label={localString['other']}
                          name="other"
                        />
                      </RadioGroup>
                    </Fragment>
                  )}
                />
                <Box className="row">
                  <Controller
                    name="securityQuestion"
                    control={control}
                    defaultValue={''}
                    render={({ field }) => (
                      <Fragment>
                        <FormControl className="selectControl">
                          <InputLabel
                            id="securityQuestion-label"
                            className="selectInput">
                            {localString['selectSecurityQuestion']}
                          </InputLabel>
                          <Select
                            {...field}
                            labelId="securityQuestion-label"
                            id="securityQuestions"
                            label="Select Security Question"
                            error={!!errors.securityQuestion}
                            margin="dense"
                            size="small">
                            {questions &&
                              questions.map((question: IQuestionProps) => {
                                return (
                                  <MenuItem
                                    value={question.question}
                                    key={question._id}>
                                    {question.question}
                                  </MenuItem>
                                );
                              })}
                          </Select>
                        </FormControl>
                      </Fragment>
                    )}
                  />
                  <Controller
                    name="securityAnswer"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={localString['enterSecurityQuestionAnswer']}
                        variant="outlined"
                        fullWidth
                        error={!!errors.securityAnswer}
                        helperText={
                          errors.securityAnswer
                            ? errors.securityAnswer?.message
                            : ''
                        }
                        margin="dense"
                        size="small"
                      />
                    )}
                  />
                </Box>
                <Box className="row">
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={localString['enterNewPassword']}
                        variant="outlined"
                        fullWidth
                        error={!!errors.password}
                        helperText={
                          errors.password ? errors.password?.message : ''
                        }
                        margin="dense"
                        size="small"
                        type="password"
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
                        label={localString['confirmNewPassword']}
                        variant="outlined"
                        fullWidth
                        error={!!errors.confirmPassword}
                        helperText={
                          errors.confirmPassword
                            ? errors.confirmPassword?.message
                            : ''
                        }
                        margin="dense"
                        size="small"
                        type="password"
                      />
                    )}
                  />
                </Box>
                <Box className="recaptchaBox">
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_SITE_KEY || ''}
                    ref={captchaRef}
                    onChange={onCaptchaChange}
                    size="normal"
                  />
                </Box>
                <Box className="buttonDiv">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={
                      !(
                        Boolean(captchaToken) &&
                        Object.keys(dirtyFields).length ===
                          Object.keys(defaultValues as ISignupProps).length
                      )
                    }>
                    {localString['signUp']}
                  </Button>
                </Box>
              </form>
              <Box className="linkDiv">
                <Link to="/">{localString['backToLogin']}</Link>
              </Box>
            </Box>
          </Box>
        </Paper>
      </MainDivBox>
    </Fragment>
  );
};
export default Signup;
