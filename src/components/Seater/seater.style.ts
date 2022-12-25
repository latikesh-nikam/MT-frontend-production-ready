import { styled } from '@mui/material/styles';

export const ParentBox = styled('div')(
  ({ theme }: any) => `

  display:flex;
  margin-left:20rem;
  margin-top:${theme.typography.pxToRem(theme['margin']['larger'])};
  
  ${theme.breakpoints.down('sm')} {
    flex-direction:column;
    gap:${theme.typography.pxToRem(theme['gap']['large'])};
    margin-left:${theme.typography.pxToRem(theme['gap']['large'])};

  }

  ${theme.breakpoints.down('md')}{
    flex-direction:column;
    gap:${theme.typography.pxToRem(theme['gap']['large'])};
    margin-left:30%;

  }


  .parentContainer{
    background-color:${theme.palette.background.whitesmoke};
    max-height:100vh;
    display:flex;
    align-items: center;
    gap:${theme.typography.pxToRem(theme['gap']['main'])};

    ${theme.breakpoints.down('sm')} {
      flex-direction:column;
      gap:${theme.typography.pxToRem(theme['gap']['small'])};
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
    padding:${theme.typography.pxToRem(theme['padding']['main'])};
    position:relative;
    display:flex;
    max-height: ${theme.typography.pxToRem(360)};
    overflow-y:scroll;

    &::-webkit-scrollbar { 
      display: none; 
  }
  }
  
  .nowrap{
    gap:${theme.typography.pxToRem(theme['gap']['small'])};
    flex-wrap:nowrap;
    height:min-content;
  }

  .divider{
    margin:${theme.typography.pxToRem(
      theme['margin']['large'],
    )} 1.5rem ${theme.typography.pxToRem(theme['margin']['large'])} 0;
  }

  .container{
    max-width: ${theme.typography.pxToRem(theme['width']['main'])};
    display:flex;
    gap:${theme.typography.pxToRem(theme['gap']['tworem'])};
  }

  .steeringImage{
    width:1.6em;
    margin-right:${theme.typography.pxToRem(theme['margin']['secondary'])};
    margin-top:${theme.typography.pxToRem(theme['margin']['main'])};
  }

  .mainBox {
    padding:${theme.typography.pxToRem(theme['padding']['smaller'])};
    position:relative;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column-reverse;
    cursor:pointer;
  }


  .count {
    position: absolute;
    line-height: ${theme.typography.pxToRem(theme['lineHeight']['primary'])};
    color: ${theme.palette.background.darkgrey};
    top:0;
    font-size:${theme.typography.pxToRem(8)};
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
    height:${theme.typography.pxToRem(theme['height']['oneRem'])};
    width:${theme.typography.pxToRem(theme['width']['oneRem'])};
    margin-top:${theme.typography.pxToRem(theme['margin']['oneForth'])};
  }

  .singleLegend{
    display:flex;
    gap:${theme.typography.pxToRem(theme['gap']['small'])};
    margin-bottom:${theme.typography.pxToRem(theme['margin']['oneForth'])};
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
    margin-right:${theme.typography.pxToRem(theme['margin']['main'])};
    flex-direction:column;

    ${theme.breakpoints.down('sm')} {
      margin-left:-${theme.typography.pxToRem(48)};
      margin-top: ${theme.typography.pxToRem(theme['margin']['main'])};
  }
    }
  }

  }

  .try{
    display:flex;
    justify-content:center;
    align-items:center;
  }

`,
);
