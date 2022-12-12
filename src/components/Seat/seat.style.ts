import { styled } from '@mui/material/styles';

export const ParentBox = styled('div')(
  ({ theme }: any) => `

  display:flex;
  margin-left:10rem;

  .parentContainer{
    background-color:whitesmoke;
    max-height:75vh;
    display:flex;
    gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
    justify-content: flex-end;
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
  }

  .busContainer{
    border:thin solid;
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

  .detailsMain{
    height:${theme.typography.pxToRem(theme.palette['height']['oneRem'])};
    width:${theme.typography.pxToRem(theme.palette['width']['oneRem'])};
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['oneForth'])};
  }

  .singleLegend{
    display:flex;
    gap:${theme.typography.pxToRem(theme.palette['gap']['small'])};
  }

  .seatLegend{
    // position:absolute;
    display:flex;
    margin-right:1rem;
    margin-top:50%;
    flex-direction:column;
    // gap:${theme.typography.pxToRem(theme.palette['gap']['main'])};
    // top:${theme.typography.pxToRem(theme.palette['top']['large'])};
    // left:${theme.typography.pxToRem(theme.palette['left']['primary'])};
  }

  .seatDetails{
    margin-top:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
    margin-left:${theme.typography.pxToRem(theme.palette['margin']['larger'])};
  }

  .bookingSummaryButton{
    border-radius:0;
  }

  .upperSeat{
    // margin-right:1rem;
    // margin-left:1rem;
  }

  .selected{
    border:thin solid green;
  }

`,
);
