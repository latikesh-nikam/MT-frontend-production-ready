import { styled } from '@mui/material/styles';

export const InputContainer = styled('div')(
  ({ theme }: any) =>
    `
    .MuiFormLabel-root{
    padding:  ${theme.typography.pxToRem(theme.padding.main)};
color: ${theme.palette.textColors.black};
      border-radius:${theme.typography.pxToRem(theme.borderRadius.small)};
    }
    
    .MuiOutlinedInput-root{
      border-radius:0.5rem;
    }

    ${theme.breakpoints.down('sm')} {
      .MuiOutlinedInput-root{
        border-radius:0;
        padding:0;
      }
  
      .MuiOutlinedInput-input{
        padding:0.75rem;
      }
    }
    `,
);
