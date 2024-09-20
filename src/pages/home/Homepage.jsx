import React, { useState } from 'react';
import TopSlider from './TopSlider/TopSlider';
import { Box } from '@mui/material';


const Homepage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    return (
       <Box>
        <TopSlider/>
       </Box>
    );
};

export default Homepage;