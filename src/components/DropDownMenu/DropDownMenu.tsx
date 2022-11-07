import * as React from 'react';
import { FC } from 'react';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = [
  {
    title: 'Delete',
    icon: <DeleteOutlineOutlinedIcon />,
  },
  {
    title: 'Edit',
    icon: <ModeEditOutlinedIcon />,
  },
];

const ITEM_HEIGHT = 48;
const FACTOR = 4.5;

export const DropDownMenu: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick: (event: React.MouseEvent<HTMLElement>) => void = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose: () => void = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * FACTOR,
            width: '20ch',
          },
        }}
      >
        {options.map(option => (
          <MenuItem key={option.title} onClick={handleClose}>
            {option.icon}
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
