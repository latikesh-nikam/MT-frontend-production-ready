import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import styles from './signIn.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useRef, useState } from 'react';
import { ISignInInput } from './SignIn.types';
import ReCAPTCHA from 'react-google-recaptcha';
import FormInputText from '../FormInput/FormInput';

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

  const methods = useForm<ISignInInput>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    formState: { errors },
    handleSubmit,
  } = methods;

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
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.signInForm}>
            <FormInputText
              name="email"
              label="email"
              errors={errors}
              type="text"
            />
            <FormInputText
              name="password"
              label="password"
              errors={errors}
              type="password"
            />
            <Box className={styles.recaptchaContainer}>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY || ''}
                ref={captchaRef}
                onChange={onCaptchaChange}
                size="normal"
              />
            </Box>
            <Button
              className={styles.submitButton}
              type="submit"
              disabled={!captchaToken}
              variant="contained">
              {t('signIn')}
            </Button>
          </form>
        </FormProvider>
      </Box>
      <Grid container className={styles.actions}>
        <Link to="forgotPassword">{t('forgotPassword')}?</Link>

        <Link to="signUp">{t('signUp')}</Link>
      </Grid>
    </Paper>
  );
};

export default SignIn;
