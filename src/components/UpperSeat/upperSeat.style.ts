import { styled } from '@mui/material/styles';

export const ParentBox = styled('div')(
  ({ theme }: any) => `

  display:flex;
  justify-content:center;

  .parentContainer{
    background-color:whitesmoke;
    max-height:100vh;
    border:thin solid;
    display:flex;
    gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
  }

  .busContainer{
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    }

  .boxContainer{
    padding:${theme.typography.pxToRem(theme.palette['padding']['main'])};
    position:relative;
    display:flex;
  }

  .nowrap{
    flex-wrap:no-wrap;
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['medium'])};
  }

  .space{
    padding:${theme.typography.pxToRem(theme.palette['padding']['primary'])};
  }

  .divider{
    margin:${theme.typography.pxToRem(
      theme.palette['margin']['large'],
    )} 4rem ${theme.typography.pxToRem(theme.palette['margin']['large'])} 0;
  }

  .container{
    max-width: ${theme.typography.pxToRem(theme.palette['width']['main'])};
   display:flex;
   gap:${theme.typography.pxToRem(theme.palette['gap']['tworem'])};
  }

  .steeringImage{
    width:${theme.typography.pxToRem(theme.palette['width']['small'])};
    margin-right:${theme.typography.pxToRem(theme.palette['margin']['main'])};
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['primary'])};
  }

  .mainBox {
    height:${theme.typography.pxToRem(theme.palette['width']['small'])};
    border:thin solid;
    padding:${theme.typography.pxToRem(theme.palette['padding']['primary'])};
    position:relative;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column-reverse;
    cursor:pointer;

    .id{
      position:absolute;
      font-size:${theme.typography.fontSizeSmall};
    }
  }

  .smallBox{
    width:${theme.typography.pxToRem(theme.palette['width']['smaller'])};
    border:thin solid;
    padding:${theme.typography.pxToRem(theme.palette['padding']['oneForth'])};
  }

  .femaleUnavailable{
    background-color:${theme.palette.background.pink};
  }

  .femaleAvailable{
    border:thin solid ${theme.palette.background.darkpink};
    background-color:${theme.palette.background.white};
  }

  .maleAvailable{
    background-color:${theme.palette.background.white};
  }

  .maleUnavailable{
    background-color:${theme.palette.background.lightgrey};
  }

  .available{
    background-color:${theme.palette.background.white};
    border:thin solid;
  }


  .bookingSummaryButton{
    border-radius:0;
  }

`,
);
