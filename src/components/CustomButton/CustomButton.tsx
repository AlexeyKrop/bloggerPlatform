import { FC } from 'react';

import styled from '@emotion/styled';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';

const CustomButton = styled(Button)({
  padding: '5px 30px',
  color: '#1A1718',
  border: '1px solid #DEDBDC',
  borderRadius: '4px',
  '&:hover': {
    borderColor: '#1A1718',
  },
  '&:active': {
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
