import React, { FC } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

import s from './CurrenBlog.module.css';

export const CurrentBlog: FC = () => {
  return (
    <div className={s.wrapper}>
      <NavLink className={s.link} to="/blogs">
        <ArrowBackIcon />
        <span>Back to blogs</span>
      </NavLink>
    </div>
  );
};
