import { styled } from '@mui/material/styles';

export const ParentBox = styled('div')(
  ({ theme }: any) => `

  display:flex;
  margin-left:20rem;
  margin-top:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
  
  ${theme.breakpoints.down('sm')} {
    flex-direction:column;
    gap:${theme.typography.pxToRem(theme.palette['gap']['large'])};
    margin-left:${theme.typography.pxToRem(theme.palette['gap']['large'])};

  }


  .parentContainer{
    background-color:${theme.palette.background.whitesmoke};
    max-height:100vh;
    display:flex;
    align-items: center;
    gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};

    ${theme.breakpoints.down('sm')} {
      flex-direction:column;
      gap:${theme.typography.pxToRem(theme.palette['gap']['small'])};
      margin-left:0;
    }
  }

  .busContainer{
    border:thin solid ${theme.palette.background.grey};
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    height:max-content;
    justify-content:center;
    }

  .boxContainer{
    padding:${theme.typography.pxToRem(theme.palette['padding']['main'])};
    position:relative;
    display:flex;
    max-height: 24rem;
    overflow-y:scroll;

    &::-webkit-scrollbar { 
      display: none; 
  }
  }
  
  .nowrap{
    gap:${theme.typography.pxToRem(theme.palette['gap']['small'])};
    flex-wrap:nowrap;
    height:min-content;
  }

  .divider{
    margin:${theme.typography.pxToRem(
      theme.palette['margin']['large'],
    )} 1.5rem ${theme.typography.pxToRem(theme.palette['margin']['large'])} 0;
  }

  .container{
    max-width: ${theme.typography.pxToRem(theme.palette['width']['main'])};
    display:flex;
    gap:${theme.typography.pxToRem(theme.palette['gap']['tworem'])};
  }

  .steeringImage{
    width:1.6em;
    margin-right:${theme.typography.pxToRem(
      theme.palette['margin']['secondary'],
    )};
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['main'])};
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
    cursor:default;
  }

  .femaleAvailable{
    color:${theme.palette.background.pink};
  }

  .maleAvailable{
    color:${theme.palette.background.grey};
  }

  .maleUnavailable{
    color:${theme.palette.background.lightgrey};
    cursor:default;
  }

  .available{
    color:${theme.palette.background.grey};
  }

  .detailsMain{
    height:${theme.typography.pxToRem(theme.palette['height']['oneRem'])};
    width:${theme.typography.pxToRem(theme.palette['width']['oneRem'])};
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['oneForth'])};
  }

  .singleLegend{
    display:flex;
    gap:${theme.typography.pxToRem(theme.palette['gap']['small'])};
    margin-bottom:${theme.typography.pxToRem(
      theme.palette['margin']['oneForth'],
    )};
  }
.femaleBorder{
  border:thin solid ${theme.palette.background.lightpink};

}
.maleBookedColor{
  border:thin solid ${theme.palette.background.lightgrey};
  
}
.femaleBookedColor{
  background-color:${theme.palette.background.lightpink};
}
  .seatLegend{
    display:flex;
    margin-right:${theme.typography.pxToRem(theme.palette['margin']['main'])};
    flex-direction:column;

    ${theme.breakpoints.down('sm')} {
      margin-left:-${theme.typography.pxToRem(
        theme.palette['margin']['berthBottom'],
      )};
    }
  }

  .seatDetails{
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
    margin-left:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
    
  }

  .bookingSummaryButton{
    border-radius:0;
  }

  .try{
    display:flex;
    justify-content:center;
    align-items:center;
  }

`,
);
