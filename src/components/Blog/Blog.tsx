import React, { FC } from 'react';

import s from './Blog.module.css';

type BlogType = {
  title: string;
  description: string;
};
export const Blog: FC<BlogType> = ({ title, description }) => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.image}
        src="https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png"
        alt="blog"
      />
      <div className={s.content}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};
