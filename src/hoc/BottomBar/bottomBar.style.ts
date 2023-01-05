import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { auto } from '@popperjs/core';

export const Drawer = styled('div')(
  ({ theme }: any) => `
   
    background-color:#fff;

  .button{
    position: fixed;
    display:flex;
    right: 0;
    left:0;
    bottom: 0;
    z-index:10;
    padding:${theme.typography.pxToRem(theme.padding.primary)};
    background-color:${theme.palette.background.white};
    text-align:center;
    color:${theme.palette.primary.main};
    border-top:thin solid ${theme.palette.borderFaded2};
  }

  .childrenContainer{
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
  }
    `,
);

export const StyledBox = styled(Box)(({ theme }: any) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
  overflow: auto,
}));
