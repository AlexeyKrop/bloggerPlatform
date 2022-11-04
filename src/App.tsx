import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { SideBar } from './pages/SideBar/SideBar';
import { Pages } from './routing/Pages';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="main">
        <SideBar />
        <Pages />
      </div>
    </BrowserRouter>
  );
};
