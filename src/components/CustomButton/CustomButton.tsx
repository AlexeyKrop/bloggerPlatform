import { FC } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { CustomButton } from './CustomButtonStyle';

export const CustomShowButton: FC = () => {
  return (
    <CustomButton variant="outlined" endIcon={<KeyboardArrowDownIcon />}>
      Show more
    </CustomButton>
  );
};
