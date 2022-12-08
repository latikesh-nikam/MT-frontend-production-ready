import { styled } from "@mui/material/styles";


export const BookingCardContainer = styled('div')(({theme}:any) => (
   `
      padding: ${theme.typography.pxToRem(theme.padding.secondary)};
      border-radius: ${theme.typography.pxToRem(8)};
      display: flex;
      flex-direction: column;
      gap: ${theme.typography.pxToRem(theme.gap.primary)};
      box-shadow:${theme.shadows[4]};

      .cardHeader{
        font-size: ${theme.typography.fontSizeMedium};
        font-weight:${theme.typography.fontWeightMedium}
      };

      .cities {
        display: flex;
        alignItems: center;
        gap: ${theme.typography.pxToRem(theme.gap.primary)};

        .city{
          font-weight: ${theme.typography.fontWeightRegular}
        },

        .icon{
          font-size: ${theme.typography.fontSizeRegular}
        }
      },
    }, `
))