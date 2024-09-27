import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import './Contacts.css';

const Contacts = () => {
  return (
    <Box
      id="fullContacts"
      color={'white'}
      sx={{
        padding: { xs: '2em 1em', sm: '3em 2em', md: '5em' }, // Responsive padding
        backgroundImage: 'url("your-background-image-url")', // Add your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}    
      >
        {/* First Section: Contact Information */}
        <Grid item size={{md:6,lg:6,xs:10}} textAlign={{ xs: 'center', md: 'left' }}>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5em', sm: '3.5em', md: '4.5em' }, // Responsive font size
                mb: 2,
                fontWeight: 'bold',
              }}
            >
              CONTACTS
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <Link href="https://www.1xbet.com" color="inherit" underline="hover">
                1xbet.com
              </Link>
            </Typography>
            <Typography variant="body1">
              <Link href="mailto:Manager@xbetagents.com" color="inherit" underline="hover">
                Manager@xbetagents.com
              </Link>
            </Typography>
          </Box>
        </Grid>

        {/* Second Section: Form */}
        <Grid size={{md:5}}>
          <Box
            sx={{
              padding: '10px 15px',  // Reduced padding
              borderRadius: '10px',                        
              backgroundColor: 'white',              
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',             
            }}
          >            
            <form>
            <Typography color='black' variant="subtitle1" sx={{ mb: 2 }}>
              Submit your application
            </Typography>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                className='labelApplication'
                margin='dense'  // Reduced margin
                InputProps={{
                  sx: { fontSize: '0.9em' }  // Smaller input text
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                className='labelApplication'
                margin='dense'
                 
              />
              <TextField
                fullWidth
                label="Country"
               
                className='labelApplication custom-placeholder'
                margin='dense'
              
                 
              />
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                className='labelApplication'
                margin='dense'
                 
              />
              <TextField
                fullWidth
                label="Telegram/Others account"
                variant="outlined"
                className='labelApplication'
                margin='dense'                              
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#77a32f',
                  color: 'white',
                  marginTop: '0.75em',  // Smaller margin
                  padding: '0.5em 0',  // Reduced padding
                  fontSize: '0.9em',   // Smaller button text
                  '&:hover': {
                    backgroundColor: '#444',
                  },
                }}
              >
                Send
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;
