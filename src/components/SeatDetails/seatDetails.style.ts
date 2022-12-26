import { styled } from '@mui/material/styles';
export const SeatDetailsContainer = styled('div')(
  ({ theme }: any) => `

  ${theme.breakpoints.down('sm')} {
    margin-right:${theme.typography.pxToRem(100)};
  }

  .image{
    height:${theme.typography.pxToRem(theme['height']['medium'])};
    min-width:${theme.typography.pxToRem(theme['width']['main'])}
  }

  .cardContainer{
    border:thin solid ${theme.palette.background.lightgrey};
    max-width:${theme.typography.pxToRem(theme['width']['main'])};
    min-height:${theme.typography.pxToRem(theme['height']['larger'])};
    border-radius:${theme.typography.pxToRem(
      theme['shape']['borderRadius']['medium'],
    )};

    ${theme.breakpoints.down('sm')} {
      max-width:${theme.typography.pxToRem(theme['width']['new'])};
      margin-left:${theme.typography.pxToRem(100)};
      margin-bottom:${theme.typography.pxToRem(16)};
    }
  }

  .rightText{
    font-weight:${theme.typography.fontWeightRegular};
    font-size:0.9rem;
  }


  .buttonContainer{
    padding:${theme.typography.pxToRem(theme['padding']['main'])};

  }

  .button{
    border-radius:${theme.typography.pxToRem(
      theme['shape']['borderRadius']['small'],
    )};
  }

  .cardContent{
    display:flex;
    flex-direction:column;
    gap:${theme.typography.pxToRem(theme['gap']['primary'])};
  }

  .seats{
    color:red;
  }

  .formHeading{
    text-align:center;
  }
  .bottom{
    padding-top:0;
    margin-top:0;
  }

  .source, .destination{
    display:flex;
    flex-direction:column;
    gap:0;
  }

  .berthData{
    ${theme.breakpoints.down('sm')} {
      margin-right:${theme.typography.pxToRem(theme['margin']['berthBottom'])};
    }
  }

    `,
);
