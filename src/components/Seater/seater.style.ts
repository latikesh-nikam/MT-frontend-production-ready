import { styled } from '@mui/material/styles';

export const ParentBox = styled('div')(
  ({ theme }: any) => `

  display:flex;
  margin-left:10rem;

  .parentContainer{
    background-color:${theme.palette.background.whitesmoke};
    max-height:75vh;
    display:flex;
    gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
    justify-content: flex-end;
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
  }

  .upperBox{
    border:thin solid ${theme.palette.background.grey};
  }

  .busContainer{
    border:thin solid ${theme.palette.background.grey};
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
    gap:${theme.typography.pxToRem(theme.palette['gap']['small'])};
    flex-wrap:nowrap;
    height:min-content;
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
    margin-right:${theme.typography.pxToRem(
      theme.palette['margin']['secondary'],
    )};
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['primary'])};
  }

  .mainBox {
    padding:${theme.typography.pxToRem(theme.palette['padding']['small'])};
    position:relative;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column-reverse;
    cursor:pointer;
  }


  .count {
    position: absolute;
    line-height: ${theme.typography.pxToRem(
      theme.palette['lineHeight']['primary'],
    )};
    color: ${theme.palette.background.darkgrey};
    top:${theme.typography.pxToRem(theme.palette['top']['small'])};
    font-size:${theme.typography.fontSizeSmall};
    cursor:pointer;
  }
  .root {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
  .femaleUnavailable{
    color:${theme.palette.background.lightpink};
  }

  .femaleAvailable{
  
    color:${theme.palette.background.lightpurple};

  }

  .maleAvailable{
    color:${theme.palette.background.lightblue};
  }

  .maleUnavailable{
    color:${theme.palette.background.lightgrey};

  }

  .available{
    background-color:${theme.palette.background.lightblue};
  }

  .detailsMain{
    height:${theme.typography.pxToRem(theme.palette['height']['oneRem'])};
    width:${theme.typography.pxToRem(theme.palette['width']['oneRem'])};
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['oneForth'])};
  }

  .singleLegend{
    display:flex;
    gap:${theme.typography.pxToRem(theme.palette['gap']['small'])};
  }
.femaleBorder{
  background-color:${theme.palette.background.lightpurple};
}
.maleBookedColor{
  background-color:${theme.palette.background.lightgrey};
}
.femaleBookedColor{
  background-color:${theme.palette.background.lightpink};
}
  .seatLegend{
    display:flex;
    margin-right:1rem;
    margin-top:50%;
    flex-direction:column;
   
  }

  .seatDetails{
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
    margin-left:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
  }

  .bookingSummaryButton{
    border-radius:0;
  }

`,
);
