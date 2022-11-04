import React, { FC } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

import { CssTextField } from './InputDebounceStyle';

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
