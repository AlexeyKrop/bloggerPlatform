import React, { FC } from 'react';

import { CustomSelect } from '../CustomSelect/CustomSelect';
import { InputDebounce } from '../InputDebounce/InputDebounce';

import s from './FilterBlock.module.css';

export const FilterBlock: FC = () => {
  return (
    <div className={s.wrapper}>
      <InputDebounce />
      <CustomSelect />
    </div>
  );
};
