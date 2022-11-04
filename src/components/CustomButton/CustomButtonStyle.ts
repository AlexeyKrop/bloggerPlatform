import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const CustomButton = styled(Button)({
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
