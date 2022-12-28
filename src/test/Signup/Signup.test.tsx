import { BrowserRouter } from 'react-router-dom';

import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import Signup from '../../components/Signup/signup';
import LocalisationProvider from '../../hoc/LocalisationProvider/LocalisationProvider';
import MuiThemeProvider from '../../theme/ThemeProvider';

test('Rendered Signup Component', () => {
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <Signup />
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );
  const signup = screen.getByTestId('signupForm');
  expect(signup).toBeInTheDocument();
});

/////////////////////////////////////////////////////////////////////

test('Signup Form Fields Test', async () => {
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <Signup />
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );

  const email = screen.getByTestId('emailInput');
  const occupation = screen.getByTestId('occupationInput');
  const phone = screen.getByTestId('phoneInput');
  const newPassword = screen.getByTestId('passwordInput');
  const confirmPassword = screen.getByTestId('confirmPasswordInput');
  const securityQuestion = screen.getByTestId('securityQuestion-field');
  const securityAnswer = screen.getByTestId('securityAnswerInput');
  userEvent.type(email, 'stharmia@gmail.com');
  userEvent.type(newPassword, '123456');
  userEvent.type(confirmPassword, '123456');
  userEvent.type(securityQuestion, 'What is the name of your pet?');
  userEvent.type(securityAnswer, 'manan');
  userEvent.type(phone, '9999999999');
  userEvent.type(occupation, 'student');

  expect(email).toBeInTheDocument();
  expect(newPassword).toBeInTheDocument();
  expect(confirmPassword).toBeInTheDocument();
  expect(securityQuestion).toBeInTheDocument();
  expect(securityAnswer).toBeInTheDocument();
  expect(phone).toBeInTheDocument();
  expect(occupation).toBeInTheDocument();
});

//////////////////////////////////////////////////////////////////////

test('Password Match Check', () => {
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <Signup />
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

/////////////////////////////////////////////////////////////

test('Password Length Check', () => {
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <Signup />
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
