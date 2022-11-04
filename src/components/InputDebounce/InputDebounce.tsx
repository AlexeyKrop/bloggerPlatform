import React, { FC } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, OutlinedInput, styled } from '@mui/material';

const CssTextField = styled(OutlinedInput)({
  width: '100%',
  maxWidth: '672px',
  height: '36px',
  borderRadius: '2px',
  '&:hover': {
    borderColor: '#2c2729',
    boxShadow: 'none',
  },
  '&.Mui-active': {
    border: '1px solid #2c2729',
    boxShadow: 'none',
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      border: `1px solid #2c2729`,
    },
  },
});

export const InputDebounce: FC = () => {
  return (
    <CssTextField
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};
