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
        gap:1rem;
        margin:0.5rem 1rem 0 1.5rem;
    }
    .inputs{
        padding:0.5rem;
        margin:0.5rem;
    }

    .paper{
        border:thin solid lightgrey;
    }

    .column{
        display:flex;
        flex-direction:column;
        gap:1rem;
    }

    .button{
        margin-top:1rem;
        padding:1rem;
    }

    .description{
        font-size:1rem;
        margin:0;

    }

    .container{
        padding:1rem;
        display:flex;
        flex-direction:column;
        gap:1rem;
    }

    .heading{
        text-align:center;
    }

    .subHeading{
        margin:0;
        padding:0;
    }
    .button{
        padding:0.5rem;
    }

    .seatNumber{
        display:none;
    }
    `,
);
