import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, Button, Drawer, IconButton} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import Grid from '@mui/material/Grid';

import './style.css';

export default function NavDrawer(props) {
    const [open, setOpen] = useState(false);
    const drawerStyle = {
        color: "grey"
    }
    const handleLinkClick = () => {
        window.open(props.impressumlink)
    }
    const handleDrawer = () => {
        setOpen(true);
    }
    const footerStyle = {
        fontSize: "11px",
        position: "absolute",
        width: "100%",
        bottom: "0",
        height: "42px",
        lineHeight: "42px",
        color: "white",
        textAlign: "center"
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
                style = {drawerStyle}
                onClose={() => {setOpen(false)}}
            >
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
                <footer style={footerStyle}>
                    <Grid container spacing={0}>
                        <Grid item xs={3}>
                            Unterstützt durch CySec 
                        </Grid>
                        <Grid item xs={5}>
                            <a rel="noreferrer" target="_blank" href="https://omen.cs.uni-magdeburg.de/itiamsl/deutsch/impressum/index.html">Impressum</a> und <a rel="noreferrer" target="_blank" href="https://www.ovgu.de/datenschutzerklaerung.html">Datenschutz</a>
                        </Grid>
                        <Grid item xs={4}>
                            <a rel="noreferrer" target="_blank" href="https://forschung-sachsen-anhalt.de/">Forschungsportal Sachsen-Anhalt</a>
                        </Grid>
                    </Grid>
                </footer>
            </Drawer>
        </div>
    );
}