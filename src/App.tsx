import React, { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Line } from './components/Line/Line';
import { useAppSelector } from './hooks/useAppSelector/useAppSelector';
import { SideBar } from './pages/SideBar/SideBar';
import { Pages } from './routing/Pages';
import { selectBlog } from './store/selectors/selectBlog/selectBlog';

export const App: FC = () => {
  const blog = useAppSelector(selectBlog);

  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <div className="main">
        <div className="content">
          <div className="nav-content">
            <h2>Blogs</h2>
            <span>{blog.name}</span>
          </div>
          <Line />
          <Pages />
        </div>
      </div>
    </BrowserRouter>
  );
};
