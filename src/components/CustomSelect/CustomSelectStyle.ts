import { InputBase, styled } from '@mui/material';

export const CustomSelectStyle = styled(InputBase)(() => ({
  width: '100%',
  maxWidth: '256px',
  '& .MuiInputBase-input': {
    padding: '6px 12px',
    border: '1px solid #DEDBDC',
    backgroundColor: 'transparent',
    '&:focus': {
      borderColor: '#2c2729',
    },
  },
}));
