import { FormControl, InputLabel, Select, styled } from '@mui/material';

export const CustomFormControl = styled(FormControl)(() => ({
  minWidth: 150,
  maxWidth: 200,
}));

export const CustomInputLabel = styled(InputLabel)(() => ({
  color: '#f1c40f !important',
  fontSize: '30px',
  fontWeight: '500',
  position: 'static',
  transformOrigin: 'bottom left',
}));

export const CustomSelect = styled(Select)(() => ({
  background: '#fff',
  '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
    border: 'none ',
  },
}));
