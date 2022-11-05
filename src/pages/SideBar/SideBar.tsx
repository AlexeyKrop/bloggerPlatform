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
  active: boolean;
};
const drawerWidth = 252;

export const SideBar: FC = () => {
  const [sideBarItems, setSideBarItems] = useState<SideBarItemsType[]>([
    { id: v1(), title: 'Blogs', icon: <ListIcon className={s.icon} />, active: true },
    { id: v1(), title: 'Posts', icon: <AppsIcon className={s.icon} />, active: false },
  ]);
  const onChangeToggleClass: (id: string) => void = id => {
    setSideBarItems(
      sideBarItems.map(sideBarItem =>
        sideBarItem.id === id
          ? { ...sideBarItem, active: true }
          : { ...sideBarItem, active: false },
      ),
    );
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
          {sideBarItems.map(({ id, title, icon, active }) => (
            <ListItem
              className={active ? `${s.itemActive}` : `${s.item}`}
              key={id}
              disablePadding
            >
              <ListItemButton className={s.btn} onClick={() => onChangeToggleClass(id)}>
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
