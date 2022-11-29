import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Avatar,
  Box,
  Button,
  Container,
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
  TextField,
  Typography,
} from '@mui/material';
import styles from '../Signup/Signup.module.scss';
import { ISignupProps, IQuestionProps } from './Signup.types';
import { useEffect, useRef, useState } from 'react';
import LoginIcon from '@mui/icons-material/Input';
import { getData, postData } from '../../services/http';

const Signup = () => {
  const [questions, setQuestions] = useState<IQuestionProps[]>([]);
  const captchaRef = useRef<any>(null);
  const { t } = useTranslation();
  const required = t('required');
  const emailMessage = t('emailMessage');
  const minLengthPassword = t('minlength6');
  const minLengthPhone = t('minlength10');
  const maxLengthPhone = t('maxlength10');
  const passwordValidator = t('passwordValidation');
  const [captchaToken, setCaptchaToken] = useState('');

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
    formState: { errors },
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
    console.log(data);
    const token = captchaRef.current.getValue();
    setCaptchaToken(token);
    console.log(captchaToken);
    data['captcha'] = captchaToken;
    try {
      const response = await postData('auth/signup', data);
      console.log(response);
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
      setCaptchaToken('');
      toast.success(`${response.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error(`${error}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      throw error;
    }
  };
  const onCaptchaChange = () => {
    const token = captchaRef.current?.getValue();
    if (token) setCaptchaToken(token as string);
  };

  return (
    <>
      <ToastContainer />
      <Paper elevation={3} className={styles.signUp}>
        <Box>
          <Container component="main">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              className={styles.formContainer}>
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LoginIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {t('signUp')}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <form onSubmit={handleSubmit(data => submit(data))}>
                  <Box className={styles.box1}>
                    <Controller
                      name="name"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={t('enterName')}
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
                          label={t('enterEmail')}
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
                  <Box className={styles.box2}>
                    <Controller
                      name="phone"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={t('enterPhoneNumber')}
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
                          label={t('enterOccupation')}
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
                      <>
                        <FormLabel id="gender">{t('selectGender')}</FormLabel>
                        <RadioGroup {...field} row aria-labelledby="gender">
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label={t('female')}
                            name="female"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label={t('male')}
                            name="male"
                          />
                          <FormControlLabel
                            value="other"
                            control={<Radio />}
                            label={t('other')}
                            name="other"
                          />
                        </RadioGroup>
                      </>
                    )}
                  />
                  <Box className={styles.box3}>
                    <Controller
                      name="securityQuestion"
                      control={control}
                      defaultValue={''}
                      render={({ field }) => (
                        <>
                          <FormControl
                            sx={{ marginTop: '0.5rem', minWidth: '48.5%' }}>
                            <InputLabel
                              id="securityQuestion-label"
                              sx={{ marginTop: '-0.5rem' }}>
                              {t('selectSecurityQuestion')}
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
                                      value={question._id}
                                      key={question._id}>
                                      {question.question}
                                    </MenuItem>
                                  );
                                })}
                            </Select>
                          </FormControl>
                        </>
                      )}
                    />
                    <Controller
                      name="securityAnswer"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={t('enterSecurityQuestionAnswer')}
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
                  <Box className={styles.box4}>
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={t('enterNewPassword')}
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
                          label={t('confirmNewPassword')}
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
                  <Box className={styles.recaptchaBox}>
                    <ReCAPTCHA
                      sitekey={process.env.REACT_APP_SITE_KEY || ''}
                      ref={captchaRef}
                      onChange={onCaptchaChange}
                      size="normal"
                    />
                  </Box>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    // disabled={!captchaToken}
                    sx={{ mt: 3, mb: 2 }}>
                    {t('signUp')}
                  </Button>
                </form>
                <Grid container>
                  <Grid item xs className={styles.link}>
                    <a href="#">{t('backToLogin')}</a>
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
