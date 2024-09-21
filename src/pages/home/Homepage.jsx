import React, {  } from 'react';
import TopSlider from './TopSlider/TopSlider';
import { Box } from '@mui/material';
import StaticSlider from './staticSliders/StaticSlider';


const Homepage = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    //   };
    return (
       <Box>
        <TopSlider/>
        <StaticSlider/>
       </Box>
    );
};

export default Homepage;