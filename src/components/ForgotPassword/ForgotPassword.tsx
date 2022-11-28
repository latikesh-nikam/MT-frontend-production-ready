import React from 'react';
import styles from './ForgotPassword.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import LockResetIcon from '@mui/icons-material/LockReset';
import LockResetTwoToneIcon from '@mui/icons-material/LockResetTwoTone';
import * as Yup from 'yup';
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import IForgotPasswordProps from './forgotPassword.types';

const ForgotPassword = () => {
  const [securityQuestion, setSecurityQuestion] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSecurityQuestion(event.target.value as string);
  };

  const { t } = useTranslation();
  const required = t('required');
  const emailMessage = t('emailMessage');
  const minLengthPassword = t('minlength6');
  const passwordValidator = t('passwordValidation');

  const forgotPasswordSchema = Yup.object({
    email: Yup.string().required(required).email(emailMessage),
    newPassword: Yup.string().required(required).min(6, minLengthPassword),
    confirmPassword: Yup.string()
      .required(required)
      .min(6, minLengthPassword)
      .oneOf([Yup.ref('newPassword'), null], passwordValidator),
    securityQuestion: Yup.string().required(required),
    securityQuestionAnswer: Yup.string().required(required),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForgotPasswordProps>({
    defaultValues: {
      email: '',
      newPassword: '',
      confirmPassword: '',
      securityQuestion: '',
      securityQuestionAnswer: '',
    },
    resolver: yupResolver(forgotPasswordSchema),
  });
  const formData: any = {};
  const submit = (data: any) => {
    console.log(data);
    formData['data'] = data;
    console.log(formData);
    reset({
      email: '',
      newPassword: '',
      confirmPassword: '',
      securityQuestion: '',
      securityQuestionAnswer: '',
    });
  };
  return (
    <>
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
                <LockResetIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {t('forgotPassword')}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <form onSubmit={handleSubmit(data => submit(data))}>
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
                  <Controller
                    name="securityQuestion"
                    control={control}
                    defaultValue={''}
                    render={({ field }) => (
                      <>
                        <FormControl
                          sx={{ marginTop: '0.5rem', minWidth: '100%' }}>
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
                          errors.newPassword ? errors.newPassword?.message : ''
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
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}>
                    {t('updatePassword')}
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
export default ForgotPassword;
