import { styled } from '@mui/material/styles';

export const SearchableDropdownContainer = styled('div')(
  ({ theme }: any) => `

  .optionLabel{
    text-transform:capitalize;
    cursor:pointer;
    padding: ${theme.typography.pxToRem(theme.padding.main)};
    list-style-type:none;
  }

  .MuiInputBase-input{
    text-transform: capitalize;
  }


`,
);
