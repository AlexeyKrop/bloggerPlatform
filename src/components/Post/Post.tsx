import React, { FC } from 'react';

import { PostType } from '../../store/reducers/types';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

import s from './Post.module.css';

type PostPropsType = {
  post: PostType;
};
export const Post: FC<PostPropsType> = ({ post }) => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.mainImage}
        src="https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png"
        alt="post"
      />
      <div>
        <div className={s.contentWrapper}>
          <img
            className={s.contentImage}
            src="https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png"
            alt="post"
          />
          <div className={s.content}>
            <p className={s.title}>{post.title}</p>
            <p className={s.description}>{post.shortDescription}</p>
            <p className={s.dateTitle}>{new Date(post.addedAt).toLocaleDateString()}</p>
            <p className={s.contentSubtitle}>{post.content}</p>
          </div>
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
};
