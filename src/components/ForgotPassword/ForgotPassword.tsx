import { Fragment } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Paper } from '@mui/material';
import { Select } from '@mui/material';
import { TextField } from '@mui/material';
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

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, defaultValues },
  } = useForm<IForgotPasswordProps>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      securityQuestion: '',
      securityAnswer: '',
    },
    resolver: yupResolver(forgotPasswordSchema),
  });

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

  return (
    <Fragment>
      <ToastContainer />
      <Paper elevation={3}>
        <MainDivBox>
          <div className="formContainer">
            <Box className="heading">{localString['forgotPassword']}</Box>
            <Box className="mainBox">
              <form onSubmit={handleSubmit(submit)} autoComplete="off">
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
                <Box className="buttonDiv">
                  <Button
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
