import { styled } from '@mui/material/styles';

export const ParentBox = styled('div')(
  ({ theme }: any) => `

  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:10rem;

  ${theme.breakpoints.down('sm')} {
    flex-direction:column;
    margin-left:0;
  }

  .parentContainer{
    background-color:${theme.palette.background.whitesmoke};
    max-height:75vh;
    display:flex;
    gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
    justify-content: flex-end;
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
  }

  .upperSeatBox{
    border:thin solid ${theme.palette.background.grey};
  }

  .busContainer{
    border:thin solid ${theme.palette.background.grey};
    width:min-content;
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
    margin-right:${theme.typography.pxToRem(theme.palette['margin']['main'])};
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['primary'])};
  }

  .mainBox {
    height:${theme.typography.pxToRem(theme.palette['width']['small'])};
    border:thin solid ${theme.palette.background.grey};
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
    border:thin solid ${theme.palette.commonBgColor.darkgrey};
    padding:${theme.typography.pxToRem(theme.palette['padding']['oneForth'])};
  }

  .femaleUnavailable{
    background-color:${theme.palette.background.pink};
    border:thin solid ${theme.palette.background.darkgrey};
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
  }

  .available{
    background-color:${theme.palette.background.white};
    border:thin solid ${theme.palette.background.grey};
  }

  .detailsMain{
    height:${theme.typography.pxToRem(theme.palette['height']['oneRem'])};
    width:${theme.typography.pxToRem(theme.palette['width']['oneRem'])};
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['oneForth'])};
  }

  .singleLegend{
    display:flex;
    gap:${theme.typography.pxToRem(theme.palette['gap']['primary'])};
  }

  .seatLegend{
    display:flex;
    margin-right:1rem;
    justify-content:center;
    height:inherit;
    flex-direction:column;
   
  }

  .seatDetails{
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
    margin-left:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
  }

  .bookingSummaryButton{
    border-radius:0;
  }

  .selected{
    border:thin solid green;
  }

  .gridMargin{
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['medium'])};

  }

`,
);
