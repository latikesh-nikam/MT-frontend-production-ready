import { act } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { cleanup } from '@testing-library/react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { authURLConstants } from '../constants/apiRoutes';
import { updateData } from '../services/http';

import userEvent from '@testing-library/user-event';
import ForgotPassword from '../components/ForgotPassword/ForgotPassword';
import LocalisationProvider from '../hoc/Localization/LocalisationProvider';
import MuiThemeProvider from '../theme/ThemeProvider';

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

const mockValue = 'Test@123';
afterEach(cleanup);

test('should watch input correctly', () => {
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
  fireEvent.input(newPassword, {
    target: {
      value: mockValue,
    },
  });
  fireEvent.input(confirmPassword, {
    target: {
      value: mockValue,
    },
  });
  expect(newPassword.value).toEqual(mockValue);
  expect(confirmPassword.value).toEqual(mockValue);
});

///////////////////////////////////////////////////////////////

test('Should display correct error message for password miss match', async () => {
  const { container } = render(
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
  const confirmNewPassword = screen.getByLabelText(
    '*Confirm New Password',
  ) as HTMLInputElement;
  const submitButton = screen.getByText('Update Password') as HTMLButtonElement;
  fireEvent.input(newPassword, {
    target: {
      value: mockValue,
    },
  });
  fireEvent.input(confirmNewPassword, {
    target: {
      value: `${mockValue}4`,
    },
  });
  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(submitButton);
  });
  expect(container.textContent).toContain('Passwords Do Not Match');
});

////////////////////////////////////////////////////////////////
const mockPostData = {
  email: 'abhay@gmail.com',
  securityQuestion: 'what is your favourite food?',
  securityAnswer: 'abc',
  password: 'dddddd',
  confirmPassword: 'dddddd',
};
test('Should submit form successfully', async () => {
  const response = await updateData(
    authURLConstants.forgotPassword,
    mockPostData,
  );
  render(
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <ForgotPassword />
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>,
  );
  const email = screen.getByLabelText('*Enter Email') as HTMLInputElement;
  const password = screen.getByLabelText(
    '*Enter New Password',
  ) as HTMLInputElement;
  const confirmPassword = screen.getByLabelText(
    '*Confirm New Password',
  ) as HTMLInputElement;
  const securityQuestion = screen.getByLabelText(
    '*Select Security Question',
  ) as HTMLInputElement;
  const securityAnswer = screen.getByLabelText(
    '*Security Question Answer',
  ) as HTMLInputElement;
  const submitButton = screen.getByText('Update Password') as HTMLButtonElement;

  userEvent.type(password, mockValue);
  userEvent.type(confirmPassword, mockValue);
  userEvent.type(email, mockPostData.email);
  userEvent.type(securityQuestion, mockPostData.securityQuestion);
  fireEvent.input(securityAnswer, mockPostData.securityAnswer);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  await act(async () => {
    fireEvent.submit(submitButton);
  });
  expect(response.statusCode).toEqual(200);
});

/////////////////////////////////////////
