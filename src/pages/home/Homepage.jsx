import React, { } from 'react';
import TopSlider from './TopSlider/TopSlider';
import { Box } from '@mui/material';
import StaticSlider from './staticSliders/StaticSlider';
import Profitable from './profitable/Profitable';
import Conditions from './conditions/Conditions';


const Homepage = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleOpenModal = () => {
    //     setIsModalOpen(true);
    //   };
    return (
        <Box>
            <TopSlider />
            <StaticSlider />
            <Profitable />
            <Conditions />
        </Box>
    );
};

export default Homepage;