import React, { FC } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

import { Blog } from '../Blog';

import s from './CurrenBlog.module.css';

export const CurrentBlog: FC = () => {
  return (
    <div className={s.wrapper}>
      <NavLink className={s.link} to="/blogs">
        <ArrowBackIcon />
        <span>Back to blogs</span>
      </NavLink>
      <img
        className={s.image}
        src="https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png"
        alt="blog"
      />
      <Blog
        title="hello"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..."
      />
    </div>
  );
};
