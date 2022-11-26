import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
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
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import styles from '../Signup/Signup.module.scss';
import ISignupProps from './Signup.types';
import { useRef, useState } from 'react';

const Signup = () => {
  const [securityQuestion, setSecurityQuestion] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSecurityQuestion(event.target.value as string);
  };

  const captchaRef = useRef<any>(null);
  const { t } = useTranslation();
  const required = t('required');
  const emailMessage = t('emailMessage');
  const minLengthPassword = t('minlength6');
  const minLengthPhone = t('minlength10');
  const maxLengthPhone = t('maxlength10');
  const [captchaToken, setCaptchaToken] = useState('');

  const signUpSchema = Yup.object({
    name: Yup.string().required(required),
    email: Yup.string().required(required).email(emailMessage),
    newPassword: Yup.string().required(required).min(6, minLengthPassword),
    confirmPassword: Yup.string().required(required).min(6, minLengthPassword),
    phone: Yup.number()
      .required(required)
      .min(10, minLengthPhone)
      .max(10, maxLengthPhone),
    gender: Yup.string().required(required),
    occupation: Yup.string().required(required),
    securityQuestion: Yup.string().required(required),
    securityQuestionAnswer: Yup.string().required(required),
  });

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
      newPassword: '',
      confirmPassword: '',
      securityQuestion: '',
      securityQuestionAnswer: '',
    },
    resolver: yupResolver(signUpSchema),
  });
  const formData: any = {};
  const submit = (data: any) => {
    console.log(data);
    const token = captchaRef.current.getValue();
    setCaptchaToken(token);
    captchaRef.current.reset();
    formData['data'] = data;
    formData['captchaToken'] = token;
    console.log(formData);
    reset({
      email: '',
      name: '',
      phone: '',
      gender: '',
      occupation: '',
      newPassword: '',
      confirmPassword: '',
      securityQuestion: '',
      securityQuestionAnswer: '',
    });
  };
  const onCaptchaChange = () => {
    const token = captchaRef.current?.getValue();
    if (token) setCaptchaToken(token as string);
  };

  return (
    <>
      <Paper elevation={3} className={styles.signUp}>
        <Box>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              className={styles.formContainer}>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
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
                              <MenuItem value={'10'}>
                                What is your Favourite Food?
                              </MenuItem>
                              <MenuItem value={'20'}>
                                Who is your role model?
                              </MenuItem>
                              <MenuItem value={'30'}>
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
                          label={t('enterSecurityQuestionAnswer')}
                          variant="outlined"
                          fullWidth
                          error={!!errors.securityQuestionAnswer}
                          helperText={
                            errors.securityQuestionAnswer
                              ? errors.securityQuestionAnswer?.message
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
                      name="newPassword"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={t('enterNewPassword')}
                          variant="outlined"
                          fullWidth
                          error={!!errors.newPassword}
                          helperText={
                            errors.newPassword
                              ? errors.newPassword?.message
                              : ''
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
                    disabled={!captchaToken}
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
