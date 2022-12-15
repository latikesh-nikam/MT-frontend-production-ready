import { styled } from '@mui/material/styles';

export const Parent = styled('div')(
  ({ theme }: any) => `
    max-height:85vh;
    overflow:auto;
    &::-webkit-scrollbar { 
        display: none; 
    }
    
    .row{
        display:flex;
        gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
        margin:${theme.typography.pxToRem(
          theme.palette['margin']['primary'],
        )} ${theme.typography.pxToRem(
    theme.palette['margin']['main'],
  )} 0 ${theme.typography.pxToRem(theme.palette['margin']['large'])};
    }
    .inputs{
        padding:${theme.typography.pxToRem(
          theme.palette['padding']['primary'],
        )};
        margin:${theme.typography.pxToRem(theme.palette['margin']['primary'])};
    }

    .paper{
        border:thin solid ${theme.palette.background.lightgrey};
    }

    .column{
        display:flex;
        flex-direction:column;
        gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
    }

    .button{
        margin-top:${theme.typography.pxToRem(theme.palette['margin']['main'])};
        padding:${theme.typography.pxToRem(theme.palette['padding']['main'])};
    }

    .description{
        font-size:${theme.typography.fontSizeRegular};
        margin:0;

    }

    .container{
        padding:${theme.typography.pxToRem(theme.palette['padding']['main'])};
        display:flex;
        flex-direction:column;
        gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
    }

    .heading{
        text-align:center;
    }

    .subHeading{
        margin:0;
        padding:0;
    }
    .button{
        padding:${theme.typography.pxToRem(
          theme.palette['padding']['primary'],
        )};
    }

    .seatNumber{
        display:none;
    }
    `,
);
