import { FC } from 'react';

import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';

const CustomButton = styled(Button)({
  padding: '8px 30px',
  color: '#1A1718',
  border: '1px solid #1A1718',
  borderRadius: '2px',
  '&:hover': {
    borderColor: '#2c2729',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#2c2729',
    borderColor: '#2c2729',
  },
});

export const CustomShowButton: FC = () => {
  return (
    <CustomButton variant="outlined" endIcon={<KeyboardArrowDownIcon />}>
      Show more
    </CustomButton>
  );
};
