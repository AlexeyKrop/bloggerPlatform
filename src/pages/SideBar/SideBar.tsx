import * as React from 'react';
import { FC, ReactNode, useState } from 'react';

import AppsIcon from '@mui/icons-material/Apps';
import ListIcon from '@mui/icons-material/List';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { v1 } from 'uuid';

import s from './SideBar.module.css';

type SideBarItemsType = {
  id: string;
  title: string;
  icon: ReactNode;
};
const drawerWidth = 252;
const sideBarItems: SideBarItemsType[] = [
  { id: v1(), title: 'Blogs', icon: <ListIcon className={s.icon} /> },
  { id: v1(), title: 'Posts', icon: <AppsIcon className={s.icon} /> },
];

export const SideBar: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const onChangeToggleClass: () => void = () => {
    setActive(!active);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            top: '80px',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {sideBarItems.map(({ id, title, icon }) => (
            <ListItem className={s.item} key={id} disablePadding>
              <ListItemButton
                onClick={onChangeToggleClass}
                className={active ? `${s.btnActive}` : `${s.btn}`}
              >
                {icon}
                {title}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
