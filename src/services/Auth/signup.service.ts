import { getData } from '../http';

export const getSecurityQuestions = async () => {
  const response = await getData('security');
};
