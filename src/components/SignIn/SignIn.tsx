import { useContext, Fragment, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form/dist/types/form';
import { toast, ToastContainer } from 'react-toastify';
import ReCAPTCHA from 'react-google-recaptcha';
import 'react-toastify/dist/ReactToastify.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import { postData } from '../../services/axios.interceptors';
import utility from '../../utils/utility';
import { ISignInInput } from './signIn.types';
import FormInput from '../FormInput/FormInput';
import { LocalisationContext } from '../../hoc/LocalisationProvider/LocalisationProvider';
import { ILocalisationContext } from '../../hoc/LocalisationProvider/localisationProvider.types';
import { SignInContainer } from './signIn.styles';
import { homeRoute } from '../../constants/routeConstants';

const SignIn = () => {
  const [captchaToken, setCaptchaToken] = useState<string>('');
  const {
    localisation: { localString },
  } = useContext(LocalisationContext) as ILocalisationContext;

  const navigate = useNavigate();
  const captchaRef = useRef<ReCAPTCHA>(null);

  const emailMessage = localString?.emailMessage;
  const minLength = localString?.minlengthSix;

  const signInSchema = Yup.object({
    email: Yup.string().required('').email(emailMessage),
    password: Yup.string().required('').min(6, minLength),
  });

  const methods = useForm<ISignInInput>({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: { dirtyFields, defaultValues },
  } = methods;

  const handleCaptchaChange = () => {
    const token = captchaRef.current?.getValue();
    setCaptchaToken(token as string);
    captchaRef.current?.reset();
  };

  const onSubmit: SubmitHandler<ISignInInput> = async data => {
    try {
      data['captcha'] = captchaToken;
      const response = await postData('auth/login', data);
      utility.setStore('accessToken', response.access_token);
      utility.setStore('refreshToken', response.refresh_token);
      toast.success(response.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setCaptchaToken('');
      navigate(homeRoute);
    } catch (error: any) {
      toast.error(error.response.data.error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error);
      setCaptchaToken('');
    }
  };

  const disableSignInButton = !(
    Boolean(captchaToken) &&
    Object.keys(dirtyFields).length ===
      Object.keys(defaultValues as ISignInInput).length
  );

  return (
    <Fragment>
      <ToastContainer />
      <SignInContainer data-testid="signIn">
        <h2 className="formHeading">{localString?.signIn}</h2>
        <Box>
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="signInForm"
              data-testid="signInForm">
              <FormInput
                name="email"
                label="email"
                showErrorMessage
                data-testid="emailInput"
              />
              <FormInput
                name="password"
                label="password"
                type="password"
                showErrorMessage
                data-testid="passwordInput"
              />
              <div className="recaptchaContainer">
                <ReCAPTCHA
                  sitekey={process.env.REACT_APP_SITE_KEY || ''}
                  ref={captchaRef}
                  onChange={handleCaptchaChange}
                  size="normal"
                  data-testid="recaptcha"
                />
              </div>
              <Button
                className="submitButton"
                data-testid="submitButton"
                type="submit"
                disabled={disableSignInButton}
                variant="contained">
                {localString?.signIn}
              </Button>
            </form>
          </FormProvider>
        </Box>
        <div className="actions">
          <Link to="forgotPassword" data-testid="forgotPasswordButton">
            {localString?.forgotPassword}?
          </Link>
          <Link to="signUp" data-testid="signUpButtom">
            {localString?.signUp}
          </Link>
        </div>
      </SignInContainer>
    </Fragment>
  );
};

export default SignIn;
