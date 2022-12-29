import styled from '@emotion/styled';

export const Drawer = styled('div')(
  ({ theme }: any) => `

  background-color:#fff;

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

  .childrenContainer{
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
  }
    `,
);
