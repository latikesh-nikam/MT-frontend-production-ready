import { Fragment } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateData } from '../../services/http';
import { MainDivBox } from './changePassword.style';
import { ILocalisationContext } from '../../hoc/Localization/localisationProvider.types';
import { LocalisationContext } from '../../hoc/Localization/LocalisationProvider';
import IChangePasswordProps from './changePassword.types';

const ChangePassword = () => {
  const { localisation, updateLocalisation } = useContext(
    LocalisationContext,
  ) as ILocalisationContext;
  const { localString } = localisation;
  const required = localString['required'];
  const emailMessage = localString['emailMessage'];
  const minLengthPassword = localString['minLengthSix'];
  const passwordValidator = localString['passwordValidation'];

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

  const submit = async (data: any) => {
    try {
      const response = await updateData('auth/changePassword', data);
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
      <Paper elevation={3}>
        <MainDivBox>
          <div className="formContainer">
            <Box className="heading">{localString['changePassword']}</Box>
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
                  name="oldPassword"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={localString['oldPassword']}
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
                      label={localString['enterNewPassword']}
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
                        Object.keys(defaultValues as IChangePasswordProps)
                          .length
                      )
                    }>
                    {localString['updatePassword']}
                  </Button>
                </Box>
              </form>
            </Box>
            <Box className="linkDiv">
              <Link to="/profile">{localString['close']}</Link>
            </Box>
          </div>
        </MainDivBox>
      </Paper>
    </Fragment>
  );
};
export default ChangePassword;
