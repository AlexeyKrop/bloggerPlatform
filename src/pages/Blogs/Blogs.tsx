import React, { FC, useEffect } from 'react';

import { Blog } from '../../components/Blog/Blog';
import { CustomShowButton } from '../../components/CustomButton/CustomButton';
import { FilterBlock } from '../../components/FilterBlock/FilterBlock';
import { Line } from '../../components/Line/Line';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { setBlogsTC } from '../../store/reducers/blogsReducer';
import { selectBlogs } from '../../store/selectors/selectBlogs/selectBlogs';

export const Blogs: FC = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector(selectBlogs);

  useEffect(() => {
    dispatch(setBlogsTC());
  }, [dispatch]);

  return (
    <>
      <FilterBlock />
      {blogs &&
        blogs.map(({ id, name, youtubeUrl }) => (
          <div key={id}>
            <Blog id={id} title={name} description={youtubeUrl} />
            <Line />
          </div>
        ))}
      <div style={{ textAlign: 'center' }}>
        <CustomShowButton />
      </div>
    </>
  );
};
