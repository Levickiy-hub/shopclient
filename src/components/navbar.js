import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import {Avatar, Box, Container, IconButton, Toolbar, Typography} from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Modal from '../modal/Modal'
import {Search,SearchIconWrapper,StyledInputBase} from "./Search"
import Auth from "../pages/authPage"
import UserPage from "../pages/userPage"


const Navbar = () => {
    const [active,setActive]=useState(false);
    const username=localStorage.username
    const OpenAvatar=()=>{
        setActive(true);
    }
    return (
        <div>
          <AppBar position="static" style={{ background: '#2E3B55' }}>
              <Container maxWidth="xl">
                  <Toolbar disableGutters>
                      <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="open drawer"
                          sx={{ mr: 2 }}
                      >
                          <MenuIcon />
                      </IconButton>
                      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,color:'gold' }} />
                      <Typography
                          variant="h6"
                          noWrap
                          component="a"
                          href="/"
                          sx={{
                              mr: 2,
                              display: { xs: 'none', md: 'flex' },
                              fontFamily: 'monospace',
                              fontWeight: 700,
                              letterSpacing: '.3rem',
                              color: 'gold',
                              textDecoration: 'none',
                          }}
                      >
                          Store
                      </Typography>
                      <Search>
                          <SearchIconWrapper>
                              <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase
                              placeholder="Search…"
                              inputProps={{ 'aria-label': 'search' }}
                          />
                      </Search>
                      <Box sx={{position: "absolute",
                          left:"auto",
                          right: 120}}>
                          <FavoriteIcon/>
                      </Box>
                      <Box sx={{position: "absolute",
                          left:"auto",
                          right: 70}}>
                          <ShoppingCartIcon/>
                      </Box>
                      <Box sx={{ flexGrow: 0,position: "absolute",
                          left:"auto",
                          right: 2}} onClick={OpenAvatar}>
                          <Avatar alt="Remy Sharp" style={{background:'gold'}}>{username && username.substr(0,2).toUpperCase()}</Avatar>
                      </Box>
                  </Toolbar>
              </Container>
          </AppBar>
            <Modal active={active} setActive={setActive} content={username ? <UserPage/>:<Auth/>}/>
        </div>
    );
};

export default Navbar;