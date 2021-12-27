import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//Popover für mehr Informationen oder Vokabular
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

import Akkordeon from './Akkordeon.jsx';
import Thema from './Thema.jsx'
import './style.css';

export default class Streifen extends React.Component {
  defaultProps = {
    thema: new Thema(),
    active: false,
  }
  
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
  }

  constructor(props){
    super();
    props.thema ? this.thema = props.thema : this.thema = this.defaultProps.thema;
    props.active ? this.active = props.active : this.active=this.defaultProps.active;
    //console.log('New Streifen:');
    //console.log('ACTIVE?'+props.active);
    
  }
  
  render(){  
    if(this.props.active){
      return(
        <div className="Streifen">
        <Card className='Streifenkarte' variant='elevation' raised = 'true'>
            <div className='Karteninhalt'>
              <CardActionArea>
                <CardMedia
                component = 'img'

                  image = {this.props.thema.img.url}
                  height = "200"
                  title = "Titelbild"
                />
                <CardContent>
                <Typography variant='h5' gutterBottom component='center'>
                          {this.props.thema.title}
                        </Typography>
                        <Typography variant='body2' >
                          <ReactMarkdown>
                            {this.props.thema.descr}
                          </ReactMarkdown>
                        </Typography>
                        
                        <div>{this.props.thema.acordeones.map(acordeon => 
                          <Akkordeon
                            titel= {acordeon.Titel}
                            inhalt={acordeon.Inhalt}
                          />
                          )  
                        }</div>
                </CardContent>
              </CardActionArea>
            </div>
            <CardActions>
              <motion.div
                whileHover = {{scale: 1.1}}>
                  <Button onClick = {this.handleClickOpen} variant='contained' color='primary'>Mehr erfahren</Button>
              </motion.div>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
              >
                <DialogTitle id='alert-dialog-title'>
                  Anregungen und weiterführende Links
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id='alert-dialog-description'>
                    {this.props.thema.refs}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick = {this.handleClose} color = 'primary'>
                    Schließen
                  </Button>
                </DialogActions>
              </Dialog>
              <motion.div
                whileHover= {{scale: 1.1}}
              >
                  <Button variant='contained' color='secondary' onClick={(e) => this.props.action('-', e)}> Vorheriger </Button>
              </motion.div>
              <motion.div
                whileHover={{scale: 1.1}}
              >
                  <Button variant='contained' color='secondary' onClick={(e) => this.props.action('+', e)}> Nächster </Button>
              </motion.div>
            </CardActions>
        </Card>
        
      </div>
      )
    } else {
      return (
        <div className='StreifenRueck'>
        <Card className='StreifenRueck' variant='elevation' raised = 'true' onClick={(e) => this.props.navigation(this.props.id-1, e)}>
            <div className='KarteninhaltCovered'>
              <CardActionArea>
                <CardMedia/>
                <CardContent>
                </CardContent>
              </CardActionArea>
            </div>
        </Card>
      </div>         
      )
    }
  }
}
