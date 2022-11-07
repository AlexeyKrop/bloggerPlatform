import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { blogsAPI } from '../../api/blogs/blogs';
import { AppThunk } from '../store';

import { BlogType } from './types';

const initialState = {
  blogs: [] as BlogType[],
  blog: {} as BlogType,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<{ blogs: BlogType[] }>) => {
      state.blogs = action.payload.blogs;
    },
    setBlog: (state, action: PayloadAction<{ blog: BlogType }>) => {
      state.blog = action.payload.blog;
    },
  },
});

export const blogsReducer = blogsSlice.reducer;
export const { setBlogs, setBlog } = blogsSlice.actions;

// THUNK

export const setBlogsTC = (): AppThunk => dispatch => {
  blogsAPI
    .getAllBlogs({
      pageSize: '0',
      pageNumber: '0',
      searchNameTerm: '0',
    })
    .then(res => {
      dispatch(setBlogs({ blogs: res.data.items }));
    });
};
export const setBlogTC =
  (id: string): AppThunk =>
  dispatch => {
    blogsAPI.getCurrentBlog(id).then(res => {
      dispatch(setBlog({ blog: res.data }));
    });
  };
