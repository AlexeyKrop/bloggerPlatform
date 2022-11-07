import React, { FC } from 'react';

import { DropDownMenu } from '../DropDownMenu/DropDownMenu';

export const Post: FC = () => {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <div>
          <img src="" alt="" />
          <div>
            <span>Lets fly into space</span>
            <span>The best blog in our village</span>
            <span>12.12.2022</span>
          </div>
          <DropDownMenu />
        </div>
      </div>
    </div>
  );
};
