import { styled } from '@mui/material/styles';

export const InputContainer = styled('div')(
  ({ theme }: any) =>
    `
    .MuiFormLabel-root{
    padding:  ${theme.typography.pxToRem(theme.padding.main)};
color: ${theme.palette.textColors.black};
    }
    
    ${theme.breakpoints.down('sm')} {
      .MuiOutlinedInput-root{
        padding: ${theme.typography.pxToRem(
          theme.padding.small,
        )} ${theme.typography.pxToRem(theme.padding.primary)}
      }
  
      .MuiOutlinedInput-input{
        padding:0.5rem;
      }
    }
    `,
);
