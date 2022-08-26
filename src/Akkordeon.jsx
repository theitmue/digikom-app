import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import './style.css';

export default function Akkordeon(props) {
    return(
        <div className='Akkordeon'>
            <Accordion>
                <AccordionSummary
                    expandIcon = {<ExpandMoreIcon />}
                    aria-controls = 'panel1a-content'
                    id = 'panel1a-header'
                >
                    <b>{props.titel}</b>
                </AccordionSummary>
                <AccordionDetails>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {props.inhalt}
                    </ReactMarkdown>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
