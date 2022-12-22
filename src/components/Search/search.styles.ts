import { styled } from '@mui/material/styles';

export const SearchContainer = styled('div')(
  ({ theme }: any) => `
    min-width:40%;
    z-index:1;
    .searchForm{
      display:flex;
      gap:${theme.typography.pxToRem(theme.gap.small)};      
      
      ${theme.breakpoints.down('sm')}{
        flex-direction:column;
        gap:${theme.typography.pxToRem(theme.gap.primary)};
        padding:${theme.typography.pxToRem(theme.padding.secondary)} 0;
      }

      .formInput{
        flex:2;
        background:white;
      }

      .passengerInput{
        flex:1;
        background:white;
      }

      .actions{
        display:flex;
        .searchButton{
          flex:1;

          &.disable{
            background-color:${theme.palette.primary.light};
          }
        }
        
      }
    }
`,
);
