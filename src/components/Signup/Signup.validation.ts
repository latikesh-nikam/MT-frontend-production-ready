import * as Yup from "yup";

export const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required(),
  newPassword: Yup.string().required().min(6, "Min length is 6"),
  confirmPassword: Yup.string().required().min(6, "Min length is 10"),
  phone: Yup.number()
    .required()
    .min(10, "Min length is 10")
    .max(10, "Max length is 10"),
  gender: Yup.string().required(),
  occupation: Yup.string().required(),
  securityQuestion: Yup.string().required(),
  securityQuestionAnswer: Yup.string().required(),
});
