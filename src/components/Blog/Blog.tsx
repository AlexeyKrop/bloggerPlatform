import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { setBlogTC } from '../../store/reducers/blogsReducer';

import s from './Blog.module.css';

type BlogType = {
  id: string;
  title: string;
  description: string;
};
export const Blog: FC<BlogType> = ({ id, title, description }) => {
  const dispatch = useAppDispatch();
  const onClickHandle: () => void = () => {
    dispatch(setBlogTC(id));
  };

  return (
    <div className={s.wrapper} onClick={onClickHandle} role="presentation">
      <img
        className={s.image}
        src="https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png"
        alt="blog"
      />
      <div className={s.content}>
        <h2 className={s.title}>
          <NavLink className={s.link} to="/blog">
            {title}
          </NavLink>
        </h2>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};
