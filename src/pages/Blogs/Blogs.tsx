import React, { FC } from 'react';

import { Blog } from '../../components/Blog/Blog';
import { CustomShowButton } from '../../components/CustomButton/CustomButton';
import { FilterBlock } from '../../components/FilterBlock/FilterBlock';
import { Line } from '../../components/Line/Line';

export const Blogs: FC = () => {
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
