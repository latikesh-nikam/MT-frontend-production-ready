import { styled } from '@mui/material/styles';
import image from "../../assets/images/authBackground.jpg"

export const AuthContainer = styled('div')(
  ({ theme }: any) => `
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: url(${image}) center/cover no-repeat;
`
);
