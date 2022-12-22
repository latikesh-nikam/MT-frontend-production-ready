import { Fragment } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { FormControl } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Paper } from '@mui/material';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { TextField } from '@mui/material';

import { MainDivBox } from './signup.style';

import FormInput from '../FormInput/FormInput';
import { LocalisationContext } from '../../hoc/Localization/LocalisationProvider';

import { ISignupProps } from './Signup.types';
import { IQuestionProps } from './Signup.types';
import { ILocalisationContext } from '../../hoc/Localization/localisationProvider.types';
import { signUp } from '../../services/auth/auth.service';
import { getSecurityQuestions } from '../../services/user/user.service';

const Signup = () => {
  const [questions, setQuestions] = useState<IQuestionProps[]>([]);
  const [captchaToken, setCaptchaToken] = useState('');
  const { localisation, updateLocalisation } = useContext(
    LocalisationContext,
  ) as ILocalisationContext;
  const { localString } = localisation;

  const captchaRef = useRef<any>(null);

  const required = localString?.required;
  const emailMessage = localString?.emailMessage;
  const minLengthPassword = localString?.minLengthSix;
  const minLengthPhone = localString?.minLengthTen;
  const maxLengthPhone = localString?.maxLengthTen;
  const passwordValidator = localString?.passwordValidation;

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

  const gender = ['male', 'female', 'other'];

  const methods = useForm<ISignupProps>({
    resolver: yupResolver(signUpSchema),
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
  });
  const {
    handleSubmit,
    reset,
    control,
    formState: { dirtyFields, defaultValues, errors },
  } = methods;

  const submit = async (data: ISignupProps) => {
    console.log(data);
    const token = captchaRef.current.getValue();
    setCaptchaToken(token);
    data['captcha'] = captchaToken;
    try {
      const response = await signUp(data);
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

  const securityQuestions = async () => {
    const data = await getSecurityQuestions();
    setQuestions(data);
  };

  useEffect(() => {
    securityQuestions();
  }, []);

  return (
    <Fragment>
      <ToastContainer />
      <MainDivBox data-testid="signupForm">
        <Paper elevation={3} className="container">
          <Box className="formContainer">
            <h2 className="heading">{localString?.signUp}</h2>
            <Box className="mainBox">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(submit)} autoComplete="off">
                  <Box className="row">
                    <FormInput
                      name="name"
                      label="enterName"
                      showErrorMessage
                      size="small"
                    />
                    <FormInput
                      name="email"
                      label="enterEmail"
                      showErrorMessage
                      size="small"
                    />
                  </Box>
                  <Box className="row">
                    <FormInput
                      name="phone"
                      label="enterPhoneNumber"
                      showErrorMessage
                      size="small"
                    />
                    <FormInput
                      name="occupation"
                      label="enterOccupation"
                      showErrorMessage
                      size="small"
                    />
                  </Box>
                  <Controller
                    name="gender"
                    control={control}
                    defaultValue="other"
                    render={({ field }) => (
                      <Fragment>
                        <FormLabel id="gender">
                          {localString?.selectGender}
                        </FormLabel>
                        <RadioGroup {...field} row aria-labelledby="gender">
                          {gender &&
                            gender.map((genderValue: string) => {
                              return (
                                <FormControlLabel
                                  value={genderValue}
                                  control={<Radio />}
                                  label={localString[`${genderValue}`]}
                                />
                              );
                            })}
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
                            <TextField
                              {...field}
                              select
                              data-testid="securityQuestion-field"
                              id="securityQuestions"
                              className="selectInput"
                              label={localString?.selectSecurityQuestion}
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
                            </TextField>
                          </FormControl>
                        </Fragment>
                      )}
                    />
                    <FormInput
                      name="securityAnswer"
                      label="enterSecurityQuestionAnswer"
                      showErrorMessage
                      size="small"
                    />
                  </Box>
                  <Box className="row">
                    <FormInput
                      name="password"
                      label="password"
                      showErrorMessage
                      size="small"
                      type="password"
                    />
                    <FormInput
                      name="confirmPassword"
                      label="confirmPassword"
                      showErrorMessage
                      size="small"
                      type="password"
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
                      {localString?.signUp}
                    </Button>
                  </Box>
                </form>
              </FormProvider>
              <Box className="linkDiv">
                <Link to="/">{localString?.backToLogin}</Link>
              </Box>
            </Box>
          </Box>
        </Paper>
      </MainDivBox>
    </Fragment>
  );
};
export default Signup;
