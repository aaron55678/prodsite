import React from 'react';
import './Herotext.css';
import { Button, ButtonGroup } from '@mui/material';

// Body text for the header, need to add in the buttons for players here with autoscroll functions.
// This page needs to cleaning up and screen size adaptions, it's all fixed at the moment so looks a bit shit when resizing browser.
const Herotext = () => {
   
    
    return (
        <div className='Herotext'>
            <h1 className='Herotext_h1'>Let's play<br /># of Golfers</h1>
            <div className='Herotext_buttongroup'>            
                <ButtonGroup variant="contained" color="primary" size="large" aria-label="outlined primary button group">
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button>4</Button>
                </ButtonGroup>
            </div>
        </div>
    );
        
}

export default Herotext;
            