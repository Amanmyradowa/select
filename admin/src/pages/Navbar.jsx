import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Navbar() {
  React.useEffect(()=>{
    if(location.pathname !== '/login'){
      const token = sessionStorage.getItem('token');
      if(!token){
        // window.location.href='/login';
      }
    }
  })

  const [open, setOpen] = React.useState(true);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 11.5C2.5 11.2239 2.72386 11 3 11H13C13.2761 11 13.5 11.2239 13.5 11.5C13.5 11.7761 13.2761 12 13 12H3C2.72386 12 2.5 11.7761 2.5 11.5Z" fill="white"/>
              <path d="M2.5 7.5C2.5 7.22386 2.72386 7 3 7H13C13.2761 7 13.5 7.22386 13.5 7.5C13.5 7.77614 13.2761 8 13 8H3C2.72386 8 2.5 7.77614 2.5 7.5Z" fill="white"/>
              <path d="M2.5 3.5C2.5 3.22386 2.72386 3 3 3H13C13.2761 3 13.5 3.22386 13.5 3.5C13.5 3.77614 13.2761 4 13 4H3C2.72386 4 2.5 3.77614 2.5 3.5Z" fill="white"/>
            </svg>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Ykjam admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3536 1.64645C11.5488 1.84171 11.5488 2.15829 11.3536 2.35355L5.70711 8L11.3536 13.6464C11.5488 13.8417 11.5488 14.1583 11.3536 14.3536C11.1583 14.5488 10.8417 14.5488 10.6464 14.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645L10.6464 1.64645C10.8417 1.45118 11.1583 1.45118 11.3536 1.64645Z" fill="black"/>
            </svg>
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} selected={'/' === location.pathname}>
            <Link to={'/'} style={{textDecoration:'none', color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 6C11 7.65685 9.65685 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6Z" fill="black"/>
                    <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8 1C4.13401 1 1 4.13401 1 8C1 9.65343 1.57326 11.173 2.53186 12.3707C3.24293 11.2252 4.80464 10 8.00001 10C11.1954 10 12.7571 11.2252 13.4681 12.3707C14.4267 11.173 15 9.65343 15 8C15 4.13401 11.866 1 8 1Z" fill="black"/>
                  </svg>

                </ListItemIcon>
                <ListItemText primary={'Admin'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Kategory */}
          <ListItem disablePadding sx={{ display: 'block' }} selected={'/categories' === location.pathname || '/categories/edit' === location.pathname || '/categories/subcategory' === location.pathname || '/categories/subcategory/add' === location.pathname || '/categories/subcategory/edit' === location.pathname}>
            <Link to={'/categories'} style={{textDecoration:'none', color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1C0 0.447715 0.447715 0 1 0H3C3.55228 0 4 0.447715 4 1V3C4 3.55228 3.55228 4 3 4H1C0.447715 4 0 3.55228 0 3V1Z" fill="black"/>
                    <path d="M5 1C5 0.447715 5.44772 0 6 0H8C8.55228 0 9 0.447715 9 1V3C9 3.55228 8.55228 4 8 4H6C5.44772 4 5 3.55228 5 3V1Z" fill="black"/>
                    <path d="M10 1C10 0.447715 10.4477 0 11 0H13C13.5523 0 14 0.447715 14 1V3C14 3.55228 13.5523 4 13 4H11C10.4477 4 10 3.55228 10 3V1Z" fill="black"/>
                    <path d="M0 6C0 5.44772 0.447715 5 1 5H3C3.55228 5 4 5.44772 4 6V8C4 8.55228 3.55228 9 3 9H1C0.447715 9 0 8.55228 0 8V6Z" fill="black"/>
                    <path d="M5 6C5 5.44772 5.44772 5 6 5H8C8.55228 5 9 5.44772 9 6V8C9 8.55228 8.55228 9 8 9H6C5.44772 9 5 8.55228 5 8V6Z" fill="black"/>
                    <path d="M10 6C10 5.44772 10.4477 5 11 5H13C13.5523 5 14 5.44772 14 6V8C14 8.55228 13.5523 9 13 9H11C10.4477 9 10 8.55228 10 8V6Z" fill="black"/>
                    <path d="M0 11C0 10.4477 0.447715 10 1 10H3C3.55228 10 4 10.4477 4 11V13C4 13.5523 3.55228 14 3 14H1C0.447715 14 0 13.5523 0 13V11Z" fill="black"/>
                    <path d="M5 11C5 10.4477 5.44772 10 6 10H8C8.55228 10 9 10.4477 9 11V13C9 13.5523 8.55228 14 8 14H6C5.44772 14 5 13.5523 5 13V11Z" fill="black"/>
                    <path d="M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11Z" fill="black"/>
                  </svg>
                </ListItemIcon>
                <ListItemText primary={'Kategoriyalar'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Banners */}
          <ListItem disablePadding sx={{ display: 'block' }} selected={'/banners' === location.pathname || '/banners/open' === location.pathname || '/banners/edit' === location.pathname}>
            <Link to={'/banners'} style={{textDecoration:'none', color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 123 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_474_357)">
                  <path d="M45.97 111.26H54.32V75.7H7.6C5.53 75.7 3.63 74.85 2.25 73.47L2.24 73.46L2.23 73.45L2.22 73.44C0.85 72.05 0 70.16 0 68.1V19.51C0 17.44 0.85 15.54 2.23 14.16L2.24 14.15L2.25 14.14L2.26 14.13C3.64 12.76 5.53 11.91 7.6 11.91H15.23V5.03C15.23 2.25 17.48 0 20.26 0C23.04 0 25.29 2.25 25.29 5.03V11.91H56.96V5.03C56.95 2.25 59.2 0 61.98 0C64.76 0 67.01 2.25 67.01 5.03V11.91H98.68V5.03C98.68 2.25 100.93 0 103.71 0C106.49 0 108.74 2.25 108.74 5.03V11.91H115.29C117.36 11.91 119.26 12.76 120.64 14.14L120.65 14.15L120.66 14.16L120.67 14.17C122.04 15.55 122.89 17.44 122.89 19.51V68.1C122.89 70.17 122.04 72.07 120.66 73.45L120.65 73.46L120.64 73.47L120.63 73.48C119.25 74.85 117.36 75.7 115.29 75.7H68.33V111.27H76.68V121.33H45.97V111.26ZM112.82 21.97H103.7H61.98H20.25H10.05V65.64H112.81V21.97H112.82Z" fill="black"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_474_357">
                  <rect width="122.88" height="121.32" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                </ListItemIcon>
                <ListItemText primary={'Banner'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Markets */}
          <ListItem disablePadding sx={{ display: 'block' }} selected={'/markets' === location.pathname || '/markets/open' === location.pathname || '/markets/edit' === location.pathname}>
            <Link to={'/markets'} style={{textDecoration:'none', color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="25" height="25" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.97071 0.349209C3.16069 0.127563 3.43804 0 3.72997 0H12.27C12.562 0 12.8393 0.127562 13.0293 0.349208L15.6389 3.39374C15.8719 3.6656 16 4.01186 16 4.36992V4.625C16 5.93668 14.9367 7 13.625 7C12.8629 7 12.1846 6.64102 11.75 6.08291C11.3154 6.64102 10.6371 7 9.875 7C9.11287 7 8.43458 6.64102 8 6.08291C7.56542 6.64102 6.88714 7 6.125 7C5.36286 7 4.68458 6.64102 4.25 6.08291C3.81542 6.64102 3.13713 7 2.375 7C1.06332 7 0 5.93668 0 4.625V4.36992C0 4.01186 0.128088 3.6656 0.361115 3.39374L2.97071 0.349209ZM4.75 4.625C4.75 5.38439 5.36561 6 6.125 6C6.88439 6 7.5 5.38439 7.5 4.625C7.5 4.34886 7.72386 4.125 8 4.125C8.27614 4.125 8.5 4.34886 8.5 4.625C8.5 5.38439 9.11561 6 9.875 6C10.6344 6 11.25 5.38439 11.25 4.625C11.25 4.34886 11.4739 4.125 11.75 4.125C12.0261 4.125 12.25 4.34886 12.25 4.625C12.25 5.38439 12.8656 6 13.625 6C14.3844 6 15 5.38439 15 4.625V4.36992C15 4.25057 14.9573 4.13515 14.8796 4.04453L12.27 1H3.72997L1.12037 4.04453C1.0427 4.13515 1 4.25057 1 4.36992V4.625C1 5.38439 1.61561 6 2.375 6C3.13439 6 3.75 5.38439 3.75 4.625C3.75 4.34886 3.97386 4.125 4.25 4.125C4.52614 4.125 4.75 4.34886 4.75 4.625ZM1.5 7.5C1.77614 7.5 2 7.72386 2 8V14H3V9C3 8.44772 3.44772 8 4 8H7C7.55228 8 8 8.44772 8 9V14H14V8C14 7.72386 14.2239 7.5 14.5 7.5C14.7761 7.5 15 7.72386 15 8V14H15.5C15.7761 14 16 14.2239 16 14.5C16 14.7761 15.7761 15 15.5 15H0.5C0.223858 15 0 14.7761 0 14.5C0 14.2239 0.223858 14 0.5 14H1V8C1 7.72386 1.22386 7.5 1.5 7.5ZM4 14H7V9H4V14ZM9 9C9 8.44772 9.44771 8 10 8H12C12.5523 8 13 8.44772 13 9V12C13 12.5523 12.5523 13 12 13H10C9.44771 13 9 12.5523 9 12V9ZM12 9H10V12H12V9Z" fill="black"/>
                  </svg>
                </ListItemIcon>
                <ListItemText primary={'Marketler'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
          {/* Harytlar */}
          <ListItem disablePadding sx={{ display: 'block' }} selected={'/products' === location.pathname || '/products/edit' === location.pathname}>
            <Link to={'/products'} style={{textDecoration:'none', color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="25" height="25" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 3.5C9.5 2.11929 8.38071 1 7 1C5.61929 1 4.5 2.11929 4.5 3.5V4H9.5V3.5ZM10.5 3.5V4H14V14C14 15.1046 13.1046 16 12 16H2C0.895431 16 0 15.1046 0 14V4H3.5V3.5C3.5 1.567 5.067 0 7 0C8.933 0 10.5 1.567 10.5 3.5ZM7.5 8C7.5 7.72386 7.27614 7.5 7 7.5C6.72386 7.5 6.5 7.72386 6.5 8V9.5H5C4.72386 9.5 4.5 9.72386 4.5 10C4.5 10.2761 4.72386 10.5 5 10.5H6.5V12C6.5 12.2761 6.72386 12.5 7 12.5C7.27614 12.5 7.5 12.2761 7.5 12V10.5H9C9.27614 10.5 9.5 10.2761 9.5 10C9.5 9.72386 9.27614 9.5 9 9.5H7.5V8Z" fill="black"/>
                  </svg>
                </ListItemIcon>
                <ListItemText primary={'Täze harytlar'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>

          {/* Comments */}
          <ListItem disablePadding sx={{ display: 'block' }} selected={'/comments' === location.pathname}>
            <Link to={'/comments'} style={{textDecoration:'none', color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="25" height="28" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 4C2.72386 4 2.5 4.22386 2.5 4.5C2.5 4.77614 2.72386 5 3 5H9C9.27614 5 9.5 4.77614 9.5 4.5C9.5 4.22386 9.27614 4 9 4H3Z" fill="black"/>
                    <path d="M2.5 6.5C2.5 6.22386 2.72386 6 3 6H9C9.27614 6 9.5 6.22386 9.5 6.5C9.5 6.77614 9.27614 7 9 7H3C2.72386 7 2.5 6.77614 2.5 6.5Z" fill="black"/>
                    <path d="M3 8C2.72386 8 2.5 8.22386 2.5 8.5C2.5 8.77614 2.72386 9 3 9H9C9.27614 9 9.5 8.77614 9.5 8.5C9.5 8.22386 9.27614 8 9 8H3Z" fill="black"/>
                    <path d="M3 10C2.72386 10 2.5 10.2239 2.5 10.5C2.5 10.7761 2.72386 11 3 11H6C6.27614 11 6.5 10.7761 6.5 10.5C6.5 10.2239 6.27614 10 6 10H3Z" fill="black"/>
                    <path d="M0 2C0 0.89543 0.895431 0 2 0H10C11.1046 0 12 0.89543 12 2V14C12 15.1046 11.1046 16 10 16H2C0.895431 16 0 15.1046 0 14V2ZM10 1H2C1.44772 1 1 1.44772 1 2V14C1 14.5523 1.44772 15 2 15H10C10.5523 15 11 14.5523 11 14V2C11 1.44772 10.5523 1 10 1Z" fill="black"/>
                  </svg>
                </ListItemIcon>
                <ListItemText primary={'Teswirler'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>

          {/* About us */}
          <ListItem disablePadding sx={{ display: 'block' }} selected={'/aboutUs' === location.pathname}>
            <Link to={'/aboutUs'} style={{textDecoration:'none', color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.9307 6.58789L7.92875 11.293C7.85844 11.6328 7.95805 11.8262 8.23344 11.8262C8.4268 11.8262 8.71977 11.7559 8.91898 11.5801L8.83109 11.9961C8.54398 12.3418 7.91117 12.5938 7.36625 12.5938C6.66313 12.5938 6.3643 12.1719 6.55766 11.2754L7.29594 7.80664C7.36039 7.51367 7.3018 7.4082 7.00883 7.33789L6.55766 7.25586L6.63969 6.875L8.9307 6.58789ZM8 5.5C7.44772 5.5 7 5.05228 7 4.5C7 3.94772 7.44772 3.5 8 3.5C8.55229 3.5 9 3.94772 9 4.5C9 5.05228 8.55229 5.5 8 5.5Z" fill="black"/>
                  </svg>
                </ListItemIcon>
                <ListItemText primary={'Biz barada'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>

          {/* Users */}
          <ListItem disablePadding sx={{ display: 'block' }} selected={'/users' === location.pathname || '/mailShow' === location.pathname}>
            <Link to={'/users'} style={{textDecoration:'none', color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14C7 14 6 14 6 13C6 12 7 9 11 9C15 9 16 12 16 13C16 14 15 14 15 14H7Z" fill="black"/>
                    <path d="M11 8C12.6569 8 14 6.65685 14 5C14 3.34315 12.6569 2 11 2C9.34315 2 8 3.34315 8 5C8 6.65685 9.34315 8 11 8Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.21636 14C5.07556 13.7159 5 13.3791 5 13C5 11.6445 5.67905 10.2506 6.93593 9.27997C6.3861 9.10409 5.7451 9 5 9C1 9 0 12 0 13C0 14 1 14 1 14H5.21636Z" fill="black"/>
                    <path d="M4.5 8C5.88071 8 7 6.88071 7 5.5C7 4.11929 5.88071 3 4.5 3C3.11929 3 2 4.11929 2 5.5C2 6.88071 3.11929 8 4.5 8Z" fill="black"/>
                  </svg>
                </ListItemIcon>
                <ListItemText primary={'Users'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>

          {/* Profile */}
          <ListItem disablePadding sx={{ display: 'block' }} selected={'/profile' === location.pathname}>
            <Link to={'/profile'} style={{textDecoration:'none', color:'black'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 6C11 7.65685 9.65685 9 8 9C6.34315 9 5 7.65685 5 6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6Z" fill="black"/>
                    <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8 1C4.13401 1 1 4.13401 1 8C1 9.65343 1.57326 11.173 2.53186 12.3707C3.24293 11.2252 4.80464 10 8.00001 10C11.1954 10 12.7571 11.2252 13.4681 12.3707C14.4267 11.173 15 9.65343 15 8C15 4.13401 11.866 1 8 1Z" fill="black"/>
                  </svg>
                </ListItemIcon>
                <ListItemText primary={'Profile'} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} style={{paddingTop:'100px'}}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Navbar;