import React, { FC, useEffect } from 'react';

import { blogsAPI } from '../../api/blogs/blogs';
import { Blog } from '../../components/Blog/Blog';
import { CustomShowButton } from '../../components/CustomButton/CustomButton';
import { FilterBlock } from '../../components/FilterBlock/FilterBlock';
import { Line } from '../../components/Line/Line';

export const Blogs: FC = () => {
  useEffect(() => {
    blogsAPI
      .getAllBlogs({ pageNumber: '1', pageSize: '1', searchNameTerm: '' })
      .then(res => console.log(res));
  }, []);

  return (
    <>
      <FilterBlock />
      <Blog
        title="The best blog in our village"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor "
      />
      <Line />
      <div style={{ textAlign: 'center' }}>
        <CustomShowButton />
      </div>
    </>
  );
};
