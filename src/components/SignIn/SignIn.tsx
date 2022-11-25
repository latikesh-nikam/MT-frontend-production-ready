import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './signIn.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useRef, useState } from 'react';
import { ISignInInput } from './SignIn.types';
import ReCAPTCHA from 'react-google-recaptcha';

const SignIn = () => {
  const { t } = useTranslation();

  const [captchaToken, setCaptchaToken] = useState<string>('');

  const captchaRef = useRef<ReCAPTCHA>(null);
  const required = t('required');
  const emailMessage = t('emailMessage');
  const minLength = t('minlength6');

  const signInSchema = Yup.object({
    email: Yup.string().required(required).email(emailMessage),
    password: Yup.string().required(required).min(6, minLength),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<ISignInInput>({ resolver: yupResolver(signInSchema) });

  const onCaptchaChange = () => {
    const token = captchaRef.current?.getValue();
    if (token) setCaptchaToken(token as string);
  };

  const onSubmit: SubmitHandler<ISignInInput> = data => {
    // need to add a handler function
  };

  return (
    <Paper elevation={3} className={styles.signIn}>
      <Typography
        component="h3"
        variant="h5"
        color="primary"
        className={styles.formHeading}>
        {t('signIn')}
      </Typography>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.signInForm}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                sx={{ m: 0 }}
                label={t('email')}
                variant="outlined"
                error={!!errors.email}
                helperText={errors['email'] ? errors.email?.message : ''}
                margin="dense"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                sx={{ m: 0 }}
                {...field}
                label={t('password')}
                variant="outlined"
                error={!!errors.password}
                helperText={errors['password'] ? errors.password?.message : ''}
                margin="dense"
              />
            )}
          />
          <ReCAPTCHA
            sitekey={process.env.REACT_APP_SITE_KEY || ''}
            ref={captchaRef}
            onChange={onCaptchaChange}
            size="normal"
          />
          <Button
            className={styles.submitButton}
            type="submit"
            disabled={!captchaToken}
            variant="contained">
            {t('signIn')}
          </Button>
        </form>
      </Box>
      <Grid container className={styles.actions}>
        <Link to="forgotPassword">{t('forgotPassword')}?</Link>

        <Link to="signUp">{t('signUp')}</Link>
      </Grid>
    </Paper>
  );
};

export default SignIn;
