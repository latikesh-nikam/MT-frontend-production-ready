import { styled } from '@mui/material/styles';
import image from '../../assets/images/searchBackground.jpg';

export const HomeContainer = styled('div')(
  ({ theme }: any) => `
    flex: 1;
    display: flex;
    flex-direction: column;

    .search{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url(${image}) center/cover no-repeat;
        padding:${theme.padding.main} 0;
        position:relative;

       &::before{ 
        content:"";
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background: rgba(0,0,0,0.4);
       }
        ${theme.breakpoints.down('sm')}{
            min-width:390px
        }
    }

    .bookings{
        flex: 1;
    }
`
);
