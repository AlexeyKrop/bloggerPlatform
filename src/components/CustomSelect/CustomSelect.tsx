import React, { FC } from 'react';

import { MenuItem, Select } from '@mui/material';

import { CustomSelectStyle } from './CustomSelectStyle';

const optionsValues: string[] = [
  'New blogs first',
  'Old blogs first',
  'From A to Z',
  'From Z to A',
];

export const CustomSelect: FC = () => {
  const [filter, setFilter] = React.useState('New blogs first');
  const handleChange: (event: { target: { value: string } }) => void = (event: {
    target: { value: string };
  }) => {
    setFilter(event.target.value);
  };

  return (
    <Select
      id="demo-customized-select-native"
      value={filter}
      onChange={handleChange}
      input={<CustomSelectStyle />}
    >
      {optionsValues.map((option, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <MenuItem key={index} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
};
