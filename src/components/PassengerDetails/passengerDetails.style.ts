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

    .column{
        display:flex;
        flex-direction:column;
        gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
    }

    .button{
        margin-top:${theme.typography.pxToRem(theme.palette['margin']['main'])};
        padding:${theme.typography.pxToRem(theme.palette['padding']['main'])};
        border-radius:8px;
    }

    .description{
        font-size:${theme.typography.fontSizeSmall};
        margin-top:-0.5rem;
        padding:0;

    }

    .container{
        display:flex;
        flex-direction:column;
        gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
    }

    .heading{
        text-align:center;
        margin-bottom:0;
    }

    .subHeading{
        margin:0;
        padding:0;
        margin-top:1rem;
    }
    .button{
        padding:${theme.typography.pxToRem(
          theme.palette['padding']['primary'],
        )};
    }

    .paper{
        border:thin solid ${theme.palette.background.lightgrey};
    }

    .seatNumber{
        display:none;
    }

    .contactContainer{
        margin-top:-1rem;
    }
    `,
);
