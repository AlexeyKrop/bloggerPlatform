import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { postsAPI } from '../../api/posts/posts';
import { AppThunk } from '../store';

import { PostType } from './types';

const initialState = {
  posts: [] as PostType[],
};

const postsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<{ posts: PostType[] }>) => {
      state.posts = action.payload.posts;
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const { setBlogs } = postsSlice.actions;

// THUNK

export const setPostsTC = (): AppThunk => dispatch => {
  postsAPI
    .getAllPosts({
      pageSize: '0',
      pageNumber: '0',
    })
    .then(res => {
      dispatch(setBlogs({ posts: res.data.items }));
    });
};
