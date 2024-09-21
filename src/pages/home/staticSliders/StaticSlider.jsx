import React from 'react';
import slider1 from '../../../images/Picture1.png'
import slider2 from '../../../images/Picture2.png'
import slider3 from '../../../images/Picture3.png'
import slider4 from '../../../images/Picture4.png'
import { Box } from '@mui/material';

const StaticSlider = () => {
    const slidesData = [
        {
            image: slider1,
            text: "Leading brand since 2007"
        },
        {
            image: slider2,
            text: "More than 50 countries"
        },
        {
            image: slider3,
            text: "25000 events / 16000 LIVE"
        },
        {
            image: slider4,
            text: "5500 markets"
        }
    ];
    return (
        <Box sx={{display:'flex' ,justifyContent:'space-around'}}>
            {slidesData.map((slide, index) => (
                <div key={index}>
                    <img src={slide.image} alt={`Slide ${index + 1}`} />
                    <p>{slide.text}</p>
                </div>
            ))}
        </Box>
    );
};

export default StaticSlider;
