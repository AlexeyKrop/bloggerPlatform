import * as React from 'react';
import { FC, ReactNode } from 'react';

import AppsIcon from '@mui/icons-material/Apps';
import ListIcon from '@mui/icons-material/List';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { NavLink } from 'react-router-dom';
import { v1 } from 'uuid';

import { PATH } from '../../routing/Pages';

import s from './SideBar.module.css';
import './SideBar.css';

type SideBarItemsType = {
  id: string;
  title: string;
  icon: ReactNode;
  path: string;
};

const items: SideBarItemsType[] = [
  {
    id: v1(),
    title: 'Blogs',
    icon: <ListIcon className={s.icon} />,
    path: PATH.BLOGS,
  },
  {
    id: v1(),
    title: 'Posts',
    icon: <AppsIcon className={s.icon} />,
    path: PATH.POSTS,
  },
];
const drawerWidth = 252;

export const SideBar: FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            top: '80px',
            paddingTop: '43px',
            paddingLeft: '12px',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List className={s.list}>
          {items.map(({ id, title, icon, path }) => (
            <ListItem
              sx={{
                marginBottom: '24px',
              }}
              key={id}
              disablePadding
            >
              <NavLink to={path} className={s.link}>
                {icon}
                {title}
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
