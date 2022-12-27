import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Drawer = styled('div')(
  ({ theme }: any) => `
    display:none;
  
    ${theme.breakpoints.down('sm')} {
      display:flex;
    }

  .styledBox{
    display:none;
    
    ${theme.breakpoints.down('sm')} {
      display:flex;
      background-color:#fff;
    }
  }
  .button{
    position: fixed;
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
    `,
);

export const StyledBox = styled(Box)(({ theme }: any) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

export const Puller = styled(Box)(({ theme }: any) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));
