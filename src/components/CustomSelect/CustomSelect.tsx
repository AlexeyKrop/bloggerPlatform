import React, { FC } from 'react';

import { InputBase, MenuItem, Select, styled } from '@mui/material';

const BootstrapInput = styled(InputBase)(() => ({
  width: '100%',
  maxWidth: '256px',
  '& .MuiInputBase-input': {
    padding: '6px 12px',
    border: '1px solid #DEDBDC',
    backgroundColor: 'transparent',
    '&:focus': {
      borderColor: '#2c2729',
    },
  },
}));

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
      input={<BootstrapInput />}
    >
      <MenuItem value="New blogs first">New blogs first</MenuItem>
      <MenuItem value="Old blogs first">Old blogs first</MenuItem>
      <MenuItem value="From A to Z">From A to Z</MenuItem>
      <MenuItem value="From Z to A">From Z to A</MenuItem>
    </Select>
  );
};
