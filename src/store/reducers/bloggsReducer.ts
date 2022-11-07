import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { blogsAPI } from '../../api/blogs/blogs';
import { AppThunk } from '../store';

import { BlogType } from './types';

const initialState = {
  blogs: [] as BlogType[],
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogs: (state, action: PayloadAction<{ blogs: BlogType[] }>) => {
      state.blogs = action.payload.blogs;
    },
  },
});

export const blogsReducer = blogsSlice.reducer;
export const { setBlogs } = blogsSlice.actions;

// THUNK

export const setBlogsTC = (): AppThunk => (dispatch, getState) => {
  console.log(getState().blogs);

  blogsAPI
    .getAllBlogs({
      pageSize: '1',
      pageNumber: '1',
      searchNameTerm: '',
    })
    .then(res => {
      dispatch(setBlogs({ blogs: res.data.items }));
    });
};
