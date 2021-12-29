import React from 'react'
//import Box from '@mui/material/Box';
//import Button from '@material-ui/core/Button';
//import ButtonGroup from '@material-ui/core/ButtonGroup';
//import AppBar from '@material-ui/core/AppBar';
//import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import { motion } from 'framer-motion';

import Streifen from './Streifen';
import Thema from './Thema.jsx';
import NavDrawer from './Drawer.jsx';
//import './Kompass.css';
import './style.css';
import Button from '@material-ui/core/Button';
//import { width } from '@mui/system';

/*
    TODO:   X   Themenanzahl dynamisieren
            X   Manuelle AppBar-Programmierung durch Schleife ersetzen
                X   evtl. hierfür Datenstruktur im State ändern (Array anstelle eines Objektes)
            X   Manuelle Streifenerstellung durch Schleife ersetzen
                X   evtl. hierfür Datenstruktur im State ändern (Array anstelle eines Objektes)
            X   Rotationen standardisieren (z.B. auf fünf Streifen (7) begrenzen wie im Original, dann modulo 360°)
            X   Neue Navigationsleiste entwerfen
            ~   Kompass-Server mit Daten füllen (Abschrift des Analogkompasses)
            ~   Gestaltung, CSS usw.
            ~   Anpassung an verschiedene Gerätetypen
            *   Durchkommentieren
            X   Toten Code entfernen
            *   Bezeichnungen überprüfen und ggf. ändern
            ~   App hochladen, Server auch.
            *   Nutzerumfrage
                -   entwerfen
                -   durchführen
                -   auswerten
            ~   Arbeit schreiben
*/

export default class Kompass extends React.Component {

    //ATTRIBUTE
    //impressum_link = "https://omen.cs.uni-magdeburg.de/itiamsl/deutsch/home/index.html";
    //serverAdress = 'localhost:1337';
    impressum_link = this.props.impressum;
    serverAdress = this.props.server;
    //Eigenschaften zur Justierung der Rotationsanimation, insb. Rotationsursprung -> hier in der Mitte.
    globalOriginX = 0.5; //0.5;
    globalOriginY= 0.5; //'450px';
    
    rotStrCoeff=9; //Wie viele Streifen gedreht sein sollen, damit bei großer Anzahl von Themen kein "Kreis" angenähert wird.
    
    
    state = {
        rotations_array: [0],
        aktiverStreifen: 0,
        
        //Ein Array aus Objekten mit allen Informationen
        daten: [
            {
                id: 0,
                rotID: 0, //ID ist Index im rotationsArray. Wird bei Interaktionen angepasst, um Rotationen zu verschieben.
                tema: new Thema(),
                rotation: 0,
                z: 1,
                activo: true,
            }
        ],
    }
    
    //KONSTRUKTOR
    /*constructor(props) {
        super(props);
    }*/

    //FUNKTIONEN
    //ClickHandler-Funktionen können zusammengefasst werden mit Zeile if-Abfrage nach '+' und '-'.
    clickHandler(m, e){ //m=ID des Streifens, zu dem rotiert werden soll.
        const rotID_target = this.state.daten[m].rotID;
        const workCopy = this.state.daten;

        const rotCoeff = this.rotStrCoeff-rotID_target;
        const zDifCoeff = (workCopy.length-1)-workCopy[m].z;
        
        var aktStr = this.state.aktiverStreifen;

        for(let i=0; i<workCopy.length; i++){
            workCopy[i].rotID=(workCopy[i].rotID+rotCoeff)%this.rotStrCoeff;
            workCopy[i].rotation=this.state.rotations_array[workCopy[i].rotID];
            workCopy[i].z=(workCopy[i].z+zDifCoeff)%workCopy.length;
            if(workCopy[i].z>workCopy[aktStr].z){aktStr=i;}
            workCopy[i].activo = false;
        }

        //determine highest z-index
        var currentz=0;
        for(let j=0; j<workCopy.length;j++){
            if(workCopy[j].z>workCopy[currentz].z){
                currentz=j;
            }
        }
        aktStr=currentz;
        workCopy[aktStr].activo=true;
        
        this.setState({
            daten: workCopy,
            aktiverStreifen: aktStr,
        }); 
    }

    handleSwitchButton(m, e){
        /*m='+' für nächster oder '-' für voriger Streifen*/
        const workCopy = this.state.daten;
        
        //console.log("Vor Switch");
        //console.log(workCopy);
        if(m==='+'){
            //console.log("Nächster Streifen: "+((this.state.aktiverStreifen)+"\n"))
            m=(this.state.aktiverStreifen+1)%(workCopy.length);
            console.log("Nächster Streifen (m): "+m+"\n");
            
            
        }
        else{
            m=((this.state.aktiverStreifen+(workCopy.length-1))%(workCopy.length));
            console.log("Nächster Streifen (m): "+m+"\n");
        }
        const rotID_target = this.state.daten[m].rotID;
        
        const rotCoeff = this.rotStrCoeff-rotID_target;
        const zDifCoeff = (workCopy.length-1)-workCopy[m].z;
        
        var aktStr = this.state.aktiverStreifen;

        for(let i=0; i<workCopy.length; i++){
            //console.log("Daten: " +workCopy[i].rotID+"; "+workCopy[i].z+"; "+workCopy[i].activo);
            workCopy[i].rotID=(workCopy[i].rotID+rotCoeff)%this.rotStrCoeff;
            workCopy[i].rotation=this.state.rotations_array[workCopy[i].rotID];
            workCopy[i].z=(workCopy[i].z+zDifCoeff)%workCopy.length;
            if(workCopy[i].z>workCopy[aktStr].z){aktStr=i;}
            workCopy[i].activo = false;
        }

        //determine highest z-index
        var currentz=0;
        for(let j=0; j<workCopy.length;j++){
            if(workCopy[j].z>workCopy[currentz].z){
                currentz=j;
            }
        }
        aktStr=currentz;
        workCopy[aktStr].activo=true;
        console.log("Nach Switch:")
        console.log(workCopy);
        workCopy.forEach(element => {
            console.log(element.id, element.z)
        });
        this.setState({
            daten: workCopy,
            aktiverStreifen: aktStr,
        });
        //console.log("Tatsächlich: "+this.state.daten);
        //console.log("Daten nach Switch");
        //console.log(this.state.daten);
    }
        
    UNSAFE_componentWillMount = async() => {
        try {
            //alert("HEllo World")
            const serverResponse = await axios.get(this.serverAdress+"/streifens");
            //alert("Hello World: " + serverResponse.data);
            var neueDaten= [];
            var rotationen = [];
            for (let x = 0; x<this.rotStrCoeff;x++){
                rotationen.push((x*(360/this.rotStrCoeff))%360);
            }
            //console.log('Länge des Rotationsarrays: '+rotationen.length);
            for (let i = 0; i<serverResponse.data.length; i=i+1){
                if(serverResponse.data[i].Bild){console.log(this.props.server+serverResponse.data[i].Bild.url)}
                neueDaten.push(
                    {
                        id: serverResponse.data[i].id,
                        rotID: i%rotationen.length,
                        tema: new Thema(
                            serverResponse.data[i].Titel,
                            serverResponse.data[i].Bild ? serverResponse.data[i].Bild : null, //Image
                            serverResponse.data[i].Beschreibung, 
                            serverResponse.data[i].Acordeon, 
                            serverResponse.data[i].Refs,
                            this.serverAdress,
                            ),
                        rotation: rotationen[(serverResponse.data[i].id-1)%rotationen.length],
                        activo: (serverResponse.data[i].id-1)===0 ? true : false,
                        //z: serverResponse.data.length-(serverResponse.data[i].id),
                        z: serverResponse.data.length-i,
                    }
                );
            }
            console.log(neueDaten);
            neueDaten.sort((a,b) => (a.id > b.id) ? 1 : -1);
            for(let i = 0; i<neueDaten.length; i=i+1){
                neueDaten[i].id=i;
                neueDaten[i].z=neueDaten.length-neueDaten[i].id;
                //neueDaten[i].rotation= rotationen[(neueDaten[i].id)%rotationen.length]
            }
            //console.log('Nach Sortierung');
            //console.log(neueDaten);
            this.setState({
                rotations_array: rotationen, 
                daten: neueDaten,
            });
        } catch (error) {
            this.setState({ error })
            alert("Error:\n"+error)
        }
    }
    
    //NOCH NICHT LÖSCHEN!!! Falls Probleme mit UNSAFE_componentWillMount auftreten!
    /*componentDidMount = async() => {
        try {
            const serverResponse = await axios.get(this.serverAdress+"/streifens");
            //this.setState({data: response.data});
            //alert(this.state.data[0].Titel);
            //this.themaEins.title=response.data[0].Titel;
            console.log(serverResponse);
            this.setState({ data: {
                themaEins: new Thema(serverResponse.data[0].Titel, null, serverResponse.data[0].Beschreibung, serverResponse.data[0].Acordeon),
                themaZwei: new Thema(serverResponse.data[1].Titel, null, serverResponse.data[1].Beschreibung, serverResponse.data[1].Acordeon),
                themaDrei: new Thema(serverResponse.data[2].Titel, null, serverResponse.data[2].Beschreibung, serverResponse.data[2].Acordeon),
                themaVier: new Thema(serverResponse.data[3].Titel, null, serverResponse.data[3].Beschreibung, serverResponse.data[3].Acordeon),
                themaFuenf: new Thema(serverResponse.data[4].Titel, null, serverResponse.data[4].Beschreibung, serverResponse.data[4].Acordeon),
                themaSechs: new Thema(serverResponse.data[5].Titel, null, serverResponse.data[5].Beschreibung, serverResponse.data[5].Acordeon),
                themaSieben: new Thema(serverResponse.data[6].Titel, null, serverResponse.data[6].Beschreibung, serverResponse.data[6].Acordeon),
                themaAcht: new Thema(serverResponse.data[7].Titel, null, serverResponse.data[7].Beschreibung, serverResponse.data[7].Acordeon),
                themaNeun: new Thema(serverResponse.data[8].Titel, null, serverResponse.data[8].Beschreibung, serverResponse.data[8].Acordeon),
                themaZehn: new Thema(serverResponse.data[9].Titel, null, serverResponse.data[9].Beschreibung, serverResponse.data[9].Acordeon),
            } });
            console.log('Nach componentDidMount:' + this.state.data.themaEins);
        } catch (error) {
            this.setState({ error })
            alert("Error:\n"+error)
        }
        
    }*/
    
    makeTitels() {
        var nameArray = [];
        for (let n = 0; n<this.state.daten.length;n++){
            nameArray.push({
                ID: n,
                Titel: this.state.daten[n].tema.title},
                );
        }
        return nameArray;
    }

    handleLinkClick = () => {
        window.open(this.props.impressum);
    }

    render(){
        return(
            <div className='Oberflaeche'>
                <motion.div
                    animate = {{
                        zIndex: 108,
                    }}
                    className="Nav"
                    >
                    <NavDrawer
                        buttonNamen = {this.makeTitels()}
                        action = {(m, e) => this.clickHandler(m, e)}
                        impressumlink = {this.props.impressum}
                        version = {this.props.version}
                    />
                </motion.div>                    
                
                    <motion.div className = 'Kompass'>
                        {this.state.daten.map(data =>
                            <motion.div 
                                animate={{
                                    rotate: data.rotation,
                                    zIndex: data.z,
                                    originX: this.globalOriginX,
                                    originY: this.globalOriginY,
                                }}
                                className= {data.activo ? 'Kompassstreifen_Active' : 'Kompassstreifen_Hidden'}//evtl als Streifenklasse verwenden
                            >
                                <Streifen
                                    apiUrl = {this.props.server}
                                    id = {data.id}
                                    thema={data.tema}
                                    active={data.activo}
                                    action = {(m, e) => this.handleSwitchButton(m, e)}
                                    navigation = {(m, e) => this.clickHandler(m, e)}                            
                                />   
                            </motion.div>
                        )} 
                    </motion.div>   
                
                <footer>
                    <motion.div>
                        <Button
                            variant='contained' 
                            color='secondary'
                            onClick={(e)=>this.handleLinkClick()}
                        > 
                            Kontakt 
                        </Button>
                    </motion.div>
                </footer>        
           </div>
        );
    }
}