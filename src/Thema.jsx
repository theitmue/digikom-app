import CircularProgress from '@material-ui/core/CircularProgress'
import './style.css';

export default class Thema {
    defaultProps = {
        title: <CircularProgress color='secondary' />,
        img: {url: process.env.PUBLIC_URL+'/placeholder.jpg',}, //TODO: Schnittstelle für Bilder vom Server schaffen.
        descr: <CircularProgress color='secondary' />,
        acordeones: [{Titel: 'Loading...', Inhalt: 'Loading...',}],
        refs: 'Referenzen und Anregungen',   
        apiUrl: "process.env.PUBLIC_URL+",             
    }

    constructor(title, img, descr, acordeones, refs, apiUrl){
        title ? this.title = title : this.title = this.defaultProps.title;
        img ? this.apiUrl = apiUrl : this.apiUrl = this.defaultProps.apiUrl;
        img ? this.img = {
            url: apiUrl+img.url,
        } : this.img = this.defaultProps.img;
        descr ? this.descr = descr : this.descr = this.defaultProps.descr;
        acordeones ? this.acordeones = acordeones : this.acordeones = this.defaultProps.acordeones;
        refs ? this.refs = refs : this.refs = this.defaultProps.refs;
        console.log(this.img.url);
    }
}