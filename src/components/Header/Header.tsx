import React, { FC } from 'react';

import { ThemeProvider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import s from './Header.module.css';
import { lightTheme } from './ThemeStyle';

export const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={lightTheme}>
        <AppBar position="fixed">
          <Toolbar>
            <h2 className={s.title}>Blogger Platform</h2>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
};
