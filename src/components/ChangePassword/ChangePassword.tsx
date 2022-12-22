import { Fragment } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';

import { MainDivBox } from './changePassword.style';

import { ILocalisationContext } from '../../hoc/Localization/localisationProvider.types';
import IChangePasswordProps from './changePassword.types';

import { LocalisationContext } from '../../hoc/Localization/LocalisationProvider';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { changePassword } from '../../services/auth/auth.service';

const ChangePassword = () => {
  const { localisation, updateLocalisation } = useContext(
    LocalisationContext,
  ) as ILocalisationContext;
  const { localString } = localisation;
  const required = localString?.required;
  const emailMessage = localString?.emailMessage;
  const minLengthPassword = localString?.minLengthSix;
  const passwordValidator = localString?.passwordValidation;

  const changePasswordSchema = Yup.object({
    email: Yup.string().required(required).email(emailMessage),
    newPassword: Yup.string().required(required).min(6, minLengthPassword),
    oldPassword: Yup.string().required(required).min(6, minLengthPassword),
    confirmPassword: Yup.string()
      .required(required)
      .min(6, minLengthPassword)
      .oneOf([Yup.ref('newPassword'), null], passwordValidator),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields, defaultValues },
  } = useForm<IChangePasswordProps>({
    defaultValues: {
      email: '',
      newPassword: '',
      oldPassword: '',
      confirmPassword: '',
    },
    resolver: yupResolver(changePasswordSchema),
  });

  const submit = async (data: IChangePasswordProps) => {
    try {
      const response = await changePassword(data);
      reset({
        email: '',
        newPassword: '',
        oldPassword: '',
        confirmPassword: '',
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

  return (
    <Fragment>
      <ToastContainer />
      <MainDivBox>
        <Paper elevation={3} className="container">
          <div className="formContainer">
            <h2 className="heading">{localString?.changePassword}</h2>
            <Box className="mainBox">
              <form onSubmit={handleSubmit(submit)} autoComplete="off">
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={localString?.enterEmail}
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
                  name="oldPassword"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={localString?.oldPassword}
                      variant="outlined"
                      fullWidth
                      error={!!errors.oldPassword}
                      helperText={
                        errors.oldPassword ? errors.oldPassword?.message : ''
                      }
                      margin="dense"
                      size="small"
                      type="password"
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
                      label={localString?.password}
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
                      label={localString?.confirmPassword}
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
                        Object.keys(defaultValues as IChangePasswordProps)
                          .length
                      )
                    }>
                    {localString?.updatePassword}
                  </Button>
                </Box>
              </form>
            </Box>
            <Box className="linkDiv">
              <Link to="/profile">{localString?.close}</Link>
            </Box>
          </div>
        </Paper>
      </MainDivBox>
    </Fragment>
  );
};
export default ChangePassword;
