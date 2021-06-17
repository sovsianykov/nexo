import React from 'react';
import { AppBar, Typography } from "@material-ui/core";
import './styles.scss'

const Navbar = () => {
    return (
        <div>
            <AppBar variant='elevation' color='default' className='navbar'>
                <Typography variant='h3' color='inherit' align='center'>
                    My Gallery
                </Typography>
            </AppBar>
        </div>
    );
};

export default Navbar;