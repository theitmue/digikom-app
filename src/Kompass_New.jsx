import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import { motion } from 'framer-motion';

import Streifen from './Streifen';
import Thema from './Thema.jsx';
import './Kompass.css';

export default class Kompass extends React.Component {

    //ATTRIBUTE
    serverAdress = 'http://192.168.2.115:1337';
   
    globalOriginX = 0.5;
    globalOriginY='450px';

    state = {
        data: {
            themen = [new Thema()],
            rotationen = [0],
            zIndizes = [1],
            aktiv = [true],
        },
        error: null,
        aktiverStreifen: 1,
    }

    //KONSTRUKTOR
    constructor(props){
        super(props);
    }

    //FUNKTIONEN
    UNSAFE_componentWillMount = async() => {
        try {
            const serverResponse = await axios.get(this.serverAdress+"/streifens");
            newData = [];
            newRotations = [];
            newZ = [];
            newAkiv = [];

            for (let entry in serverResponse.data){
                newData.push(
                    new Thema(entry.Titel, null, entry.Beschreibung, entry.Acordeon)
                );
            }

        } catch (error) {
            this.setState({ error })
            alert("Error:\n"+error)
        }
    }
    createKompass(){
        let Kompass = [];
        for( i = 0; i<this.state.data.themen.length; i++){
            Kompass.push(
                <Streifen
                    thema={this.state.data.themen[i]}
                    active = {this.state.data.aktiv[i]}
                />
            );
        }    
        return Kompass;   
    }
    render(){
        return(
            <div>
                {this.createKompass()}
            </div>
        )
    }

}