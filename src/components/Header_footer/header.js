import React, {useEffect, useState} from "react";
import {AppBar, IconButton, Toolbar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from './SideDrawer'


const Header = () => {
    const [headerShow, setHeaderShow] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setHeaderShow(true)
        } else {
            setHeaderShow(false)
        }
    }
    const nav = {
        position: 'absolute',
        right: '50px'

    }
    const toggleDrawer = (value) => {
        setDrawerOpen(value)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);

    return (
        <AppBar position="fixed" style={{
            backgroundColor: headerShow ? '#fbf3ec' : 'transparent',
            boxShadow: headerShow ? '0 8px 8px -4px #565657' : "none",
        }}>


            <Toolbar>


                <IconButton aria-label="Menu" color='black' style={nav} onClick={() => toggleDrawer(true)}>
                    <MenuIcon/>
             </IconButton> <SideDrawer
                open={drawerOpen}
                onClose={(value) => toggleDrawer(value)}/>
            </Toolbar>
        </AppBar>


    )


}

export default Header;