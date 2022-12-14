import { styled } from '@mui/material/styles';
export const SeatDetailsContainer = styled('div')(
  ({ theme }: any) => `

  

  .image{
    height:${theme.typography.pxToRem(theme.palette['height']['medium'])};
    min-width:${theme.typography.pxToRem(theme.palette['width']['main'])}
  }

  .cardContainer{
    border:thin solid ${theme.palette.background.lightgrey};
    max-width:${theme.typography.pxToRem(theme.palette['width']['main'])};
    min-height:${theme.typography.pxToRem(theme.palette['height']['largest'])};
    border-radius:${theme.typography.pxToRem(
      theme.palette['shape']['borderRadius']['medium'],
    )};
  }

  .rightText{
    font-weight:${theme.typography.fontWeightRegular};
    font-size:0.9rem;
  }

  .boardingPoint{
    margin-left:3.5rem;
    font-size:0.9rem;
  }

  .droppingPoint{
    margin-left:5.5rem;
    font-size:0.8rem;
  }
  
  .buttonContainer{
    padding:${theme.typography.pxToRem(theme.palette['padding']['main'])};

  }

  .button{
    border-radius:0;
  }

  .cardContent{
    display:flex;
    flex-direction:column;
    gap:0.5rem;
  }

  .seats{
    color:red;
  }
  .css-b46tu0-MuiTypography-root{
    font-size:1rem;
  }
  .formHeading{
    text-align:center;
  }
    `,
);
