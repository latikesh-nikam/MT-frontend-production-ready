import { styled } from '@mui/material/styles';

export const ParentBox = styled('div')(
  ({ theme }: any) => `

  display:flex;
  justify-content:center;

  .parentContainer{
    background-color:whitesmoke;
    max-height:100vh;
    display:flex;
    gap:1rem;
    justify-content: flex-end;
    margin-top:10%;
  }

  .busContainer{
    border:thin solid black;
    width:min-content;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    }
  .boxContainer{
  padding:1rem;
  position:relative;
  display:flex;
  }
  .nowrap{
    flex-wrap:nowrap;
    height:min-content;
  }

.space{
  padding:0.5rem;
}
  .divider{
    margin:1.5rem 4rem 1.5rem 0;
  }
  .container{
    max-width: ${theme.typography.pxToRem(theme.palette['width']['main'])};
  display:flex;
  gap:2rem;
  }

  .steeringImage{
    width:15%;
    margin-right:1rem;
    margin-top:0.5rem;
  }
  .mainBox {
    height:${theme.typography.pxToRem(theme.palette['width']['small'])};
    border:thin solid;
    padding:0.4rem;
    position:relative;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column-reverse;
    cursor:pointer;
  
    .id{
      position:absolute;
      font-size:0.7rem;
    }
  }

  .smallBox{
    width:${theme.typography.pxToRem(theme.palette['width']['smaller'])};
    border:thin solid black;
    padding:0.2rem;
  }
  .femaleUnavailable{
    background-color:pink;
  }
  .femaleAvailable{
    border:thin solid #e75480;
    background-color:white;
    
  }
  .maleAvailable{
    background-color:white;
    
  }
  .maleUnavailable{
    background-color:lightgrey;
  }
  .available{
    background-color:white;
    border:thin solid;
    
  }
 
  .detailsMain{
    height:1rem;
    width:1rem;
    margin-top:0.3rem;
  }
  .singleLegend{
    display:flex;
    gap:1rem;
  }
.seatLegend{
 position:absolute;
 top:5.5%;
left:26%;
}
.seatDetails{
  margin-top:8%;
  margin-left:10%;
}
.bookingSummaryButton{
  border-radius:0;
}
.modal{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  background-color:transparent;
  border: 2px solid #000;
  box-shadow: 24px;
}

`,
);
