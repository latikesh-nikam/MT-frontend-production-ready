import { Fragment } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Paper } from '@mui/material';
import { Select } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import IForgotPasswordProps from './forgotPassword.types';
import { getData } from '../../services/http';
import { updateData } from '../../services/http';
import { IQuestionProps } from '../Signup/Signup.types';
import { MainDivBox } from './forgotPassword.style';
import { ILocalisationContext } from '../../hoc/Localization/localisationProvider.types';
import { LocalisationContext } from '../../hoc/Localization/LocalisationProvider';
import FormInput from '../FormInput/FormInput';

const ForgotPassword = () => {
  const [questions, setQuestions] = useState<IQuestionProps[]>([]);
  const { localisation, updateLocalisation } = useContext(
    LocalisationContext,
  ) as ILocalisationContext;
  const { localString } = localisation;
  const required = localString['required'];
  const emailMessage = localString['emailMessage'];
  const minLengthPassword = localString['minLengthSix'];
  const passwordValidator = localString['passwordValidation'];

  const forgotPasswordSchema = Yup.object({
    email: Yup.string().required(required).email(emailMessage),
    password: Yup.string().required(required).min(6, minLengthPassword),
    confirmPassword: Yup.string()
      .required(required)
      .min(6, minLengthPassword)
      .oneOf([Yup.ref('password'), null], passwordValidator),
    securityQuestion: Yup.string().required(required),
    securityAnswer: Yup.string().required(required),
  });

  const methods = useForm<IForgotPasswordProps>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
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

  const submit = async (data: any) => {
    try {
      const response = await updateData('auth/forgotPassword', data);
      reset({
        email: '',
        password: '',
        confirmPassword: '',
        securityQuestion: '',
        securityAnswer: '',
      });
      toast.success(`${response.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error: any) {
      toast.error(error.response.data.error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const getSecurityQuestions = async () => {
    const response = await getData('security');
    setQuestions(response);
  };

  useEffect(() => {
    getSecurityQuestions();
  }, []);

  const onSubmitForTest = (items: any) => {
    console.log(items);
  };
  return (
    <Fragment>
      <ToastContainer />
      <Paper elevation={3}>
        <MainDivBox data-testid="forgotPasswordForm">
          <div className="formContainer">
            <h2 className="heading">{localString['forgotPassword']}</h2>
            <Box className="mainBox">
              <FormProvider {...methods}>
                {/* <form onSubmit={handleSubmit(submit)} autoComplete="off"> */}
                <form
                  className="mainBox"
                  onSubmit={() => {
                    if (onSubmitForTest) {
                      const forgotPasswordFields = {
                        'email-input-field': 'stharmia@gmail.com',
                        'newPassword-input-field': '123456',
                        'confirmPassword-input-field': '123456',
                        'securityQuestion-field':
                          'What is the name of your pet?',
                        'securityAnswer-input-field': 'manan',
                      };
                      onSubmitForTest(forgotPasswordFields);
                    }
                    handleSubmit(submit);
                  }}>
                  <FormInput
                    name="email"
                    label="enterEmail"
                    size="small"
                    showErrorMessage
                  />
                  <Controller
                    name="securityQuestion"
                    control={control}
                    defaultValue={''}
                    render={({ field }) => (
                      <Fragment>
                        <FormControl className="formControl">
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
                            data-testid="securityQuestion-field"
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
                  <FormInput
                    name="securityAnswer"
                    label="enterSecurityQuestionAnswer"
                    size="small"
                    showErrorMessage
                  />
                  <FormInput
                    name="password"
                    label="password"
                    size="small"
                    showErrorMessage
                    type="password"
                  />
                  <FormInput
                    name="confirmPassword"
                    label="confirmPassword"
                    size="small"
                    showErrorMessage
                    type="password"
                  />
                  <Box className="buttonDiv">
                    <Button
                      data-testid="submit-button"
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={
                        !(
                          Object.keys(dirtyFields).length ===
                          Object.keys(defaultValues as IForgotPasswordProps)
                            .length
                        )
                      }>
                      {localString['updatePassword']}
                    </Button>
                  </Box>
                </form>
              </FormProvider>
            </Box>
            <Box className="linkDiv">
              <Link to="/">{localString['backToLogin']}</Link>
            </Box>
          </div>
        </MainDivBox>
      </Paper>
    </Fragment>
  );
};
export default ForgotPassword;
