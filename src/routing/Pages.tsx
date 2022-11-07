import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { CurrentBlog } from '../components/Blog/CurrentBlog/CurrentBlog';
import { Blogs } from '../pages/Blogs/Blogs';
import { Posts } from '../pages/Posts/Posts';

export const PATH = {
  BLOGS: '/blogs',
  BLOG: '/blog',
  POSTS: '/posts',
  POST: '/post',
};

const ROUTES = [
  { path: PATH.BLOGS, element: <Blogs /> },
  { path: '/', element: <Blogs /> },
  { path: PATH.POSTS, element: <Posts /> },
  { path: PATH.BLOG, element: <CurrentBlog /> },
];

export const Pages: FC = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
