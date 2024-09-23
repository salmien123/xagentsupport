import React from 'react';
import { Box,Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';


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
      <Grid container spacing={8} sx={{textAlign: { xs: 'center'},justifyContent:{md:'space-around'},alignItems:{xs:'center'}}}>
        {/* Logo */}
        <Grid  item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>1xbet Agent</Typography>
        </Grid>
        
        {/* Links */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} justifyContent={{ xs: 'center', md: 'space-around' }}>
            <Grid item>
              <Typography variant="body1">Benifits</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Conditions</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Opportunities</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Contacts</Typography>
            </Grid>
          </Grid> <br />
           {/* Copyright & CTA */}
        <Grid container spacing={4} justifyContent={{ xs: 'center',sm:'center', md: 'flex-end' }}>
          <Box component="small">
            Copyright © 2007-2024 «1xbet Agent». All rights reserved and protected by law.
          </Box>
        </Grid>
        </Grid>
       
        <Grid item xs={8} md={6}>
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
