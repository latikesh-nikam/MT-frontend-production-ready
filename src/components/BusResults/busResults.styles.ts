import { styled } from '@mui/material/styles';

export const BusResultsContainer = styled('div')(
  ({ theme }: any) => `

    flex:1;
    padding:${theme.typography.pxToRem(theme.padding.main)};
    display:flex;
    flex-direction:column;
    gap:${theme.typography.pxToRem(theme.gap.primary)};

    .busResultCard{
        border: thin solid ${theme.palette.borderColor};
        text-transform: capitalize;        
        padding:${theme.typography.pxToRem(theme.padding.primary)};
        box-shadow:${theme.shadows[3]};

        .stations{
            display:flex;
            gap:${theme.typography.pxToRem(theme.gap.primary)};
        }

        .time{
            display:flex;
            gap:${theme.typography.pxToRem(theme.gap.larger)};
        }
    }
`,
);
