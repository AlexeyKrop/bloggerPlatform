import React, { FC } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

import { useAppSelector } from '../../../hooks/useAppSelector/useAppSelector';
import { selectBlog } from '../../../store/selectors/selectBlog/selectBlog';
import { Blog } from '../Blog';

import s from './CurrenBlog.module.css';

export const CurrentBlog: FC = () => {
  const blog = useAppSelector(selectBlog);

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
      <Blog id={blog.id} title={blog.name} description={blog.youtubeUrl} />
    </div>
  );
};
