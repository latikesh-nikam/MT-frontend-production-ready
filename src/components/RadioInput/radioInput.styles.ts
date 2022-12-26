import { styled } from '@mui/material/styles';

export const RadioGroupContainer = styled('div')(
  ({ theme }: any) =>
    `
    .formLabel{
        display:block;
        margin-bottom: ${theme.typography.pxToRem(theme.padding.small)};
        font-size: ${theme.typography.fontSizeMedium};
        font-weight: ${theme.typography.fontWeightLight}
    }
    .radioGroup{
        
    }`,
);
