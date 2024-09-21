import { Box } from '@mui/material';
import React from 'react';
import iconBhat from '../../../images/icon-b-hat.png'
import iconBWin from '../../../images/icon-b-win.png'
import iconBhand from '../../../images/icon-b-hand.png'
import iconBCheck from '../../../images/icon-b-check.png'




const Profitable = () => {
    return (
        <Box sx={{padding:'0 5em'}}>
            <Box component={'h1'} sx={{fontSize:"3rem"}}>
              Why it’s profitable to be an agent?
            </Box>
            <Box display={'flex'}>
                <Box>1</Box>
                <Box>2</Box>
            </Box>
        </Box>
    );
};

export default Profitable;