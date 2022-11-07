import React, { FC, useEffect } from 'react';

import { postsAPI } from '../../api/posts/posts';
import { Post } from '../../components/Post/Post';

export const Posts: FC = () => {
  useEffect(() => {
    postsAPI
      .getAllPosts({ pageNumber: '1', pageSize: '4' })
      .then(res => console.log(res.data));
  }, []);

  return (
    <div>
      <Post />
    </div>
  );
};
