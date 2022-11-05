import React, { FC } from 'react';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Line } from './components/Line/Line';
import { SideBar } from './pages/SideBar/SideBar';
import { Pages } from './routing/Pages';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <div className="main">
        <div className="content">
          <div className="headerWrapper">
            <h2>Blogs</h2>
            <ArrowRightIcon />
            <span>The best blog in our village</span>
          </div>
          <Line />
          <Pages />
        </div>
      </div>
    </BrowserRouter>
  );
};
