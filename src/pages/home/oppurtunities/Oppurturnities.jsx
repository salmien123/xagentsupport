import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import phoneStatus from '../../../images/phone-3-status.png'
import phoneLogin from '../../../images/phone-3-login.png'
import phoneApp from '../../../images/phone-3-app.png'
import phoneContact from '../../../images/phone-3-contact.png'
import phoneFund from '../../../images/phone-3-fund.png'
import phoneSuccess from '../../../images/phone-3-success.png'
import './Oppurtunities.css'


const Oppurturnities = () => {
    const oppurtunitiesArray = [
        {
            number: 1,
            image: phoneStatus,
            header: 'Go through verification and get the status of an agent',
            paragraph: 'This is necessary for the 1xBet bookmaker to provide the most effective cooperation with each agent, avoiding the crossing of work zones.'
        },
        {
            number: 2,
            image: phoneLogin,
            header: 'Log in to 1xBet and make a deposit to your account',
            paragraph: 'Your personal manager will create a special agent account for you at 1xBet. You will be able to make deposits to it, which will be used to fund other player’s accounts.'
        },
        {
            number: 3,
            image: phoneApp,
            header: 'Install the agent application',
            paragraph: 'The manager will send you a download link'
        },
        {
            number: 4,
            image: phoneContact,
            header: 'Make contact with the player',
            paragraph: 'The player himself must have a game account on 1xBet (or create one after the start of cooperation) – further transactions will technically appear as a transfer of money from one 1xBet user to another.'
        },
        {
            number: 5,
            image: phoneFund,
            header: `Fund the player's account without delay`,
            paragraph: '1xBet grants you the exclusive right to fund your gaming accounts as soon as possible. Transfer funds to players from your agent account using previously made deposits.'
        },
        {
            number: 6,
            image: phoneSuccess,
            header: 'Fourth Header',
            paragraph: '1xBet grants you the exclusive right to fund your gaming accounts as soon as possible. Transfer funds to players from your agent account using previously made deposits.'
        }
    ];

    return (
        <Box padding={'2em'}>
            {oppurtunitiesArray.map((item, index) => (
                <Grid id='oppurtunities' padding={'0.2em'} container alignItems={'center'} justifyContent={'center'} textAlign={'center'} marginTop={'2em'} border={'1px solid #cee5fb'}>
                    <Grid  size={{lg:3,md:3,sm:12,xs:12,}}><Box component={'span'} fontSize={'6em'} fontWeight={'bolder'} fontFamily={'poppins'}  color={'#CDE5FA'} >{item.number}</Box></Grid>
                    <Grid  size={{lg:3,md:3,sm:12,xs:12,}}><Box component='img' sx={{width:{lg:'70%',md:'70%',sm:'40%',xs:'100%'}}} src={item.image}/> </Grid>
                    <Grid padding={'0.2em'} size={{lg:3,md:3,sm:12,xs:12,}}><Box component={'h3'}>{item.header}</Box> <Box component={'p'}>{item.paragraph}</Box> </Grid>
                </Grid>
            ))}

        </Box>

    );
};

export default Oppurturnities;