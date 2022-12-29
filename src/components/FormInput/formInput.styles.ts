import { styled } from '@mui/material/styles';

export const InputContainer = styled('div')(
  ({ theme }: any) =>
    `
    .MuiFormLabel-root{
color: ${theme.palette.textColors.black};
    }

    ${theme.breakpoints.down('sm')} {
      .MuiOutlinedInput-input{
        font-size: ${theme.typography.fontSizeSmall};
      }
    }

    `,
);
