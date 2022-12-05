import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import { BrowserRouter } from 'react-router-dom';
import LocalisationProvider from '../hoc/Localization/LocalisationProvider';
import MuiThemeProvider from '../theme/ThemeProvider';
import userEvent from '@testing-library/user-event';

test('Rendered Forgot Password', () => {
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <ForgotPassword />
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );

  const forgotPassword = screen.getByTestId('forgotPasswordForm');
  expect(forgotPassword).toBeInTheDocument();
});

////////////////////////////////////////////////////////////////////////////////

test('Forgot Password Fields Test', async () => {
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <ForgotPassword />
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );

  const email = screen.getByTestId('emailInput');
  const newPassword = screen.getByTestId('passwordInput');
  const confirmPassword = screen.getByTestId('confirmPasswordInput');
  const securityQuestion = screen.getByTestId('securityQuestion-field');
  const securityAnswer = screen.getByTestId('securityAnswerInput');
  userEvent.type(email, 'stharmia@gmail.com');
  userEvent.type(newPassword, '123456');
  userEvent.type(confirmPassword, '123456');
  userEvent.type(securityQuestion, 'What is the name of your pet?');
  userEvent.type(securityAnswer, 'manan');

  expect(email).toBeInTheDocument();
  expect(newPassword).toBeInTheDocument();
  expect(confirmPassword).toBeInTheDocument();
  expect(securityQuestion).toBeInTheDocument();
  expect(securityAnswer).toBeInTheDocument();
});

////////////////////////////////////////////////////////////////////////////////

// const onSubmit = () => {
//   console.log('hello');
// };
test('Submit Check', async () => {
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <ForgotPassword />
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );
  const email = screen.getByLabelText('*Enter Email');
  const newPassword = screen.getByLabelText('*Enter New Password');
  const confirmPassword = screen.getByLabelText('*Confirm New Password');
  const securityQuestion = screen.getByLabelText('*Select Security Question');
  const securityAnswer = screen.getByLabelText('*Security Question Answer');
  userEvent.type(email, 'stharmia@gmail.com');
  userEvent.type(newPassword, '123456');
  userEvent.type(confirmPassword, '123456');
  userEvent.type(securityQuestion, 'What is the name of your pet?');
  userEvent.type(securityAnswer, 'manan');

  fireEvent.click(screen.getByText('Update Password'));

  await waitFor(() => {
    // expect(onSubmit).toBeInTheDocument();
  });
});

////////////////////////////////////////////////////////////////////////////////

test('Password Match Check', () => {
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <ForgotPassword />
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );
  const newPassword = screen.getByLabelText(
    '*Enter New Password',
  ) as HTMLInputElement;
  const confirmPassword = screen.getByLabelText(
    '*Confirm New Password',
  ) as HTMLInputElement;
  userEvent.type(newPassword, '123456');
  userEvent.type(confirmPassword, '123456');
  expect(newPassword.value).toEqual(confirmPassword.value);
});

////////////////////////////////////////////////////////////////////////////////

test('Password Length Check', () => {
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <ForgotPassword />
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );
  const newPassword = screen.getByLabelText(
    '*Enter New Password',
  ) as HTMLInputElement;
  const confirmPassword = screen.getByLabelText(
    '*Confirm New Password',
  ) as HTMLInputElement;
  userEvent.type(newPassword, '123456');
  userEvent.type(confirmPassword, '123456');
  expect(newPassword.value).toHaveLength(6);
  expect(confirmPassword.value).toHaveLength(6);
});

////////////////////////////////////////////////////////////////////////////////
