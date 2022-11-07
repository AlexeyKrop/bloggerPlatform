import React, { FC } from 'react';

import { PostType } from '../../store/reducers/types';
import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

type PostPropsType = {
  post: PostType;
};
export const Post: FC<PostPropsType> = ({ post }) => {
  return (
    <div>
      <img
        src="https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png"
        alt="post"
      />
      <div>
        <div>
          <img
            src="https://www.inkling.com/wp-content/uploads/2021/06/SD-default-image.png"
            alt="post"
          />
          <div>
            <p>{post.title}</p>
            <p>{post.shortDescription}</p>
            <p>{post.addedAt}</p>
            <p>{post.content}</p>
          </div>
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
};
