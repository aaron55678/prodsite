import React from 'react';
import './Nav.css';


//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Nav = () => {
    // Moved the Box tag inside the toolbar so i can split left and right sides.
    return (
        <div className='nav-section'>
                <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar>
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography color="white" >Golfbrick</Typography>
                        </Box>
                            <a target='_blank' rel="noreferrer" href="https://twitter.com/donaldtrump"> 
                            <TwitterIcon 
                                className='logo-twitter'
                                fontSize="large"
                                edge="start"
                                color="primary"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            />
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://www.facebook.com/SantaClausOffice/"> 
                            <FacebookIcon 
                                className='logo-facebook'
                                fontSize="large"
                                edge="start"
                                color="primary"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            />
                            </a>
                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/xingpi37/"> 
                            <InstagramIcon 
                                className='logo-instagram'
                                fontSize="large"
                                edge="start"
                                color="primary"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            />
                            </a>
                    </Toolbar>
                </AppBar>
        </div>
    );
}

export default Nav;
            