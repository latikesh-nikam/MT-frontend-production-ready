import { styled } from '@mui/material/styles';

export const RadioGroupContainer = styled('div')(
  ({ theme }: any) =>
    `
    .formLabel{
        display:block;
        margin-bottom: ${theme.typography.pxToRem(theme.padding.small)};
    }
    .radioGroup{
        font-size: ${theme.typography.pxToRem(theme.typography.fontSizeSmall)}
    }`,
);
