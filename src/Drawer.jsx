import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, Button, Drawer, IconButton} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

import './style.css';

export default function NavDrawer(props) {
    const [open, setOpen] = useState(false);
    const handleLinkClick = () => {
        window.open(props.impressumlink)
    }
    const handleDrawer = () => {
        setOpen(true);
    }
    return(
        <div>
            <AppBar className = 'AppBar' position = 'static'>
                <Toolbar>
                    <IconButton onClick={handleDrawer} color = 'inherit' edge='start' aria-label='menu'>
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" >Digikom-App {props.version}</Typography>
                </Toolbar>
            </AppBar>
            
            <Drawer
                className="drawer"
                anchor='left'
                variant = 'temporary'
                open={open}
                onClose={() => {setOpen(false)}}
            >
                <Typography variant="h4">Inhalt</Typography>
                <Divider/>
                {props.buttonNamen.map(element => 
                    <div>
                        <Button className="DrawerButton" variant='contained' color = 'primary' onClick = {(e) => {
                            props.action(element.ID, e);
                            setOpen(false);
                            }}>{element.Titel}</Button>
                        <Divider/>
                    </div>
                )}
                <Button variant="contained" color= "secondary" onClick={(e)=>handleLinkClick()}>Kontakt</Button>
            </Drawer>
        </div>
    );
}