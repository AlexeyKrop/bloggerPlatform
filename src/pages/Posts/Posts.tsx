import React, { FC, useEffect } from 'react';

import { Post } from '../../components/Post/Post';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { setPostsTC } from '../../store/reducers/postsReducer';
import { selectPosts } from '../../store/selectors/selectPosts/selectPosts';

export const Posts: FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(setPostsTC());
  }, [dispatch]);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};
