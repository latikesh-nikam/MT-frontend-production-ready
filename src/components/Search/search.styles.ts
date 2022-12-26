import { styled } from '@mui/material/styles';

export const SearchContainer = styled('div')(
  ({ theme }: any) => `
    z-index:1;
    padding:0 ${theme.typography.pxToRem(theme.padding.secondary)};
    display:flex;
    gap:${theme.typography.pxToRem(theme.gap.small)};      

    .searchForm{
      display:flex;
      gap:${theme.typography.pxToRem(theme.gap.primary)};      
      
      .row{
        flex:2;
        display:flex;
        gap:${theme.typography.pxToRem(theme.gap.primary)};
        
        .formInput{
          flex:1;
          background:white;
          border-radius:${theme.typography.pxToRem(theme.borderRadius.small)};
        }
      }
      
      .actions{
        flex:1;
        display:flex;
        .searchButton{
          flex:1;

          &.disable{
            background-color:${theme.palette.primary.light};
          }
        }
        
      }
    }

    ${theme.breakpoints.down('sm')}{

      .searchForm{

        flex-direction:column;
        gap:${theme.typography.pxToRem(theme.gap.primary)};
        padding:${theme.typography.pxToRem(theme.padding.secondary)} 0;
      }
    }
`,
);
