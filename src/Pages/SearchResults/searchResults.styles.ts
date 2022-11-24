import { styled } from '@mui/material/styles';
import image from '../../assets/images/searchBackground.jpg';

export const SearchResultsContainer = styled('div')(
  ({ theme }: any) => `
  flex: 1;
  display: flex;
  flex-direction:column;
      
  .search{
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${image}) center/cover no-repeat;
    padding:${theme.typography.pxToRem(theme.padding.secondary)} 0;
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

  }

  .searResultsMain {
    flex: 1;
    display: flex;
    
    .sidebar {
      display: flex;
      max-height: calc(100vh - ${theme.typography.pxToRem(96)});
      overflow-y: scroll;
      box-shadow: ${theme.shadows[2]};
      flex-direction:column;
      position:sticky;
      padding:${theme.typography.pxToRem(theme.padding.primary)};
      gap:${theme.typography.pxToRem(theme.gap.secondary)};
      
      &::-webkit-scrollbar {
        display:none;
        };
  
        ${theme.breakpoints.down('sm')}{
          display:none;
        }
    }

    .searchRresults{
        flex: 5;
        display:flex;
        flex-direction:column;
    }
  }

  .filterIcon{
    position:fixed;
    bottom:2%;
    right:3%;
    cursor:pointer;
    z-index-1;
    padding:${theme.typography.pxToRem(theme.padding.primary)};
    box-shadow:${theme.shadows[4]};
    font-size: ${theme.typography.fontSizeMedium};
    color:${theme.palette.textColors.grey};
    display:none;
    
    ${theme.breakpoints.down('sm')}{
      display:block;
    }
  }
`,
);
