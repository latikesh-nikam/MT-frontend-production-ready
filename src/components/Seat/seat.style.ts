import { styled } from '@mui/material/styles';

export const ParentBox = styled('div')(
  ({ theme }: any) => `

  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:${theme.typography.pxToRem(theme['margin']['seatLeft'])};
  ${theme.breakpoints.down('sm')} {
    flex-direction:column;
    margin-left:0;
  }

  .parentContainer{
    background-color:${theme.palette.background.whitesmoke};
    max-height:75vh;
    display:flex;
    gap:${theme.typography.pxToRem(theme['gap']['main'])};
    justify-content: flex-end;
    margin-top:${theme.typography.pxToRem(theme['margin']['larger'])};

    ${theme.breakpoints.down('sm')} {
      margin-left:${theme.typography.pxToRem(theme['margin']['larger'])};
    }
  }

  .upperSeatBox{
    border:thin solid ${theme.palette.background.grey};

    ${theme.breakpoints.down('sm')} {
      margin-left:-${theme.typography.pxToRem(theme['margin']['berthBottom'])};
    }
  }

  .busContainer{
    border:thin solid ${theme.palette.background.grey};
    width:min-content;
    display:flex;
    flex-direction:column;
    align-items:flex-end;

    &::-webkit-scrollbar { 
      display: none; 
  }

    ${theme.breakpoints.down('sm')} {
      margin-left:-${theme.typography.pxToRem(theme['margin']['berthBottom'])};
    }
    }

  .boxContainer{
    padding:${theme.typography.pxToRem(theme['padding']['main'])};
    position:relative;
    display:flex;
    max-height: ${theme.typography.pxToRem(400)};

    overflow-y:scroll;

    &::-webkit-scrollbar { 
      display: none; 
  }
  }

  .nowrap{
    flex-wrap:nowrap;
    height:min-content;
  }

  .space{
    padding:${theme.typography.pxToRem(theme['padding']['small'])};
  }

  .divider{
    margin:${theme.typography.pxToRem(
      theme['margin']['large'],
    )} 3rem ${theme.typography.pxToRem(theme['margin']['large'])} 0;
  }

  .container{
    max-width: ${theme.typography.pxToRem(theme['width']['main'])};
    display:flex;
    gap:${theme.typography.pxToRem(theme['gap']['tworem'])};
  }

  .steeringImage{
    width:${theme.typography.pxToRem(theme['width']['small'])};
    margin-right:${theme.typography.pxToRem(theme['margin']['main'])};
    margin-top:${theme.typography.pxToRem(theme['margin']['primary'])};
  }

  .mainBox {
    height:${theme.typography.pxToRem(theme['width']['small'])};
    border:thin solid ${theme.palette.background.grey};
    padding:${theme.typography.pxToRem(theme['padding']['primary'])};
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
    width:${theme.typography.pxToRem(theme['width']['smaller'])};
    border:thin solid ${theme.palette.commonBgColor.darkgrey};
    padding:${theme.typography.pxToRem(theme['padding']['oneForth'])};
  }

  .femaleUnavailable{
    background-color:${theme.palette.background.pink};
    border:thin solid ${theme.palette.background.darkgrey};
    cursor:default;
  }

  .femaleAvailable{
    border:thin solid ${theme.palette.background.pink};
    background-color:${theme.palette.background.white};
  }

  .maleAvailable{
    background-color:${theme.palette.background.white};
    border:thin solid ${theme.palette.background.grey};
  }

  .maleUnavailable{
    background-color:${theme.palette.background.lightblue};
    border:thin solid ${theme.palette.background.darkgrey};
    cursor:default;
  }

  .available{
    background-color:${theme.palette.background.white};
    border:thin solid ${theme.palette.background.grey};
  }

  .detailsMain{
    height:${theme.typography.pxToRem(theme['height']['oneRem'])};
    width:${theme.typography.pxToRem(theme['width']['oneRem'])};
    margin-top:${theme.typography.pxToRem(theme['margin']['oneForth'])};
  }

  .singleLegend{
    display:flex;
    gap:${theme.typography.pxToRem(theme['gap']['primary'])};
    margin-bottom:${theme.typography.pxToRem(theme['margin']['oneForth'])};
  }

  .seatLegend{
    display:flex;
    margin-right:${theme.typography.pxToRem(theme['margin']['main'])};
    justify-content:center;
    height:inherit;
    flex-direction:column;

    ${theme.breakpoints.down('sm')} {
    flex-direction: column;
    position: absolute;
    bottom: 33%;
    right: 43%;
    }
  }

  .seatDetails{
    margin-top:${theme.typography.pxToRem(theme['margin']['larger'])};
    margin-left:${theme.typography.pxToRem(theme['margin']['larger'])};

    ${theme.breakpoints.down('sm')} {
      margin-left:${theme.typography.pxToRem(theme['margin']['primary'])};
      margin-top:${theme.typography.pxToRem(theme['margin']['twoRem'])};
    }
  }

  .bookingSummaryButton{
    border-radius:0;
  }

  .selected{
    border:thin solid green;
  }

  .gridMargin{
    margin-top:${theme.typography.pxToRem(theme['margin']['medium'])};

  }

  .deckInfo{
    position: absolute;
    top: ${theme.typography.pxToRem(theme['top']['medium'])};
    left: ${theme.typography.pxToRem(theme['left']['secondary'])};
    margin: 0;
    color:${theme.palette.background.darkgrey};
  }

`,
);
