import { styled } from '@mui/material/styles';

export const RadioGroupContainer = styled('div')(
  ({ theme }: any) =>
    `
    .formLabel{
        display:block;
        margin: 0 0 ${theme.typography.pxToRem(theme.padding.main)} 0;
    }
    .radioGroup{
        display:flex;
        gap:${theme.typography.pxToRem(theme.gap.primary)};
        font-size: ${theme.typography.pxToRem(theme.typography.fontSizeSmall)}
    }`,
);
