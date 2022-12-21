import { styled } from '@mui/material/styles';

export const InputContainer = styled('div')(
  ({ theme }: any) =>
    `
    .MuiFormLabel-root{
      padding: 0.125rem ${theme.typography.pxToRem(theme.gap.small)};
      color: ${theme.palette.textColors.black};
      border-radius:${theme.typography.pxToRem(theme.borderRadius.small)};
    }
    
    .MuiOutlinedInput-root{
      border-radius:0;
    }

    `,
);
