import { styled } from '@mui/material/styles';

export const Header = styled('div')(
  ({ theme }: any) => `
  background-color: ${theme.palette['background']['blue']};
  padding-right: ${theme.typography.pxToRem(theme.palette['padding']['main'])};
  padding-left: ${theme.typography.pxToRem(theme.palette['padding']['main'])};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.palette.textColors.white};

  .logoDiv{
    display:flex;
    align-items:center;
    gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
  }
  .icon{
    font-size:${theme.typography.h1.fontSize};
  }

  .navElements{
    display:flex,
    gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
  }

  .buttonText{
    color:${theme.palette.textColors.white}
  }
  `,
);
