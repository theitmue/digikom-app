import CircularProgress from '@material-ui/core/CircularProgress'
import './styling.css';

export default class Thema {
    defaultProps = {
        title: <CircularProgress color='secondary' />,
        img: '/placeholder.jpg', //TODO: Schnittstelle für Bilder vom Server schaffen.
        descr: <CircularProgress color='secondary' />,
        acordeones: [{Titel: 'Loading...', Inhalt: 'Loading...',}],
        refs: 'Referenzen und Anregungen',                
    }

    constructor(title, img, descr, acordeones, refs){
        title ? this.title = title : this.title = this.defaultProps.title;
        img ? this.img = img : this.img = this.defaultProps.img;
        descr ? this.descr = descr : this.descr = this.defaultProps.descr;
        acordeones ? this.acordeones = acordeones : this.acordeones = this.defaultProps.acordeones;
        refs ? this.refs = refs : this.refs = this.defaultProps.refs;
    }
}