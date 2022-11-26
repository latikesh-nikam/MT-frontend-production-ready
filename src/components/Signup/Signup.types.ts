export default interface ISignupProps {
  name: string;
  email: string;
  phone: number | string;
  gender: string;
  occupation: string;
  newPassword: string;
  confirmPassword: string;
  securityQuestion: string;
  securityQuestionAnswer: string;
}
