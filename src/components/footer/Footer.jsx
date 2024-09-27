import React from 'react';
import { Box,Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import logo from '../../images/logo.png'


const Footer = () => {
  return (
    <Box 
      sx={{
        backgroundColor: '#0c1323', 
        color: 'white', 
        padding: '2em',
        textAlign: 'center',
        mt: '2em'
      }}
    >
      <Grid container  sx={{textAlign: { xs: 'center'},justifyContent:{md:'space-around'},alignItems:{xs:'center'}}}>
        {/* Logo */}
        <Grid size={{xs:12,sm:12,md:4,lg:4}} >
          <Box sx={{width:'60%'}}  component='img' src={logo}/>
        </Grid>
        
        {/* Links */}
        <Grid size={{xs:12,sm:12,md:4,lg:4}} >
          <Grid container spacing={2} justifyContent={{ xs: 'center', md: 'space-around' }}>
            <Grid >
              <Typography variant="body1">Benifits</Typography>
            </Grid>
            <Grid >
              <Typography variant="body1">Conditions</Typography>
            </Grid>
            <Grid >
              <Typography variant="body1">Opportunities</Typography>
            </Grid>
            <Grid >
              <Typography variant="body1">Contacts</Typography>
            </Grid>
          </Grid> <br />
           {/* Copyright & CTA */}
        <Grid container spacing={3} justifyContent={{ xs: 'center',sm:'center', md: 'flex-end' }}>
          <Box fontSize='0.7em' component="small">
            Copyright © 2007-2024 «1xbet Agent». All rights reserved and protected by law.
          </Box>
        </Grid>
        </Grid>
       
        <Grid size={{xs:12,sm:12,md:4,lg:4}}>
          <Button 
            variant="contained" 
            sx={{ backgroundColor: '#78a32f', color: 'white', borderRadius: '5px' }}
          >
            BECOME AN AGENT
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
