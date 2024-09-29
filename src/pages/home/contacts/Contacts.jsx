import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import './Contacts.css'

const Contacts = () => {
  return (
    <Box
      id="contacts"
      sx={{
        padding: {xs:1,  md: '5em' },
        position: 'relative',        
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      ></Box>

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        {/* Contacts Section */}
        <Grid container spacing={{xs:1,md:5}}>
          {/* Contact Information */}
          <Grid size={{xs:12,md:6}}>
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5em', sm: '3em', md: '3.5em' },
                  color: 'white',
                }}
              >
                CONTACTS
              </Typography>
              <Box display="flex" alignItems="center" my={2}>
                <img
                  src="https://xbetagents.com/wp-content/uploads/2024/03/Picture2.png"
                  alt="1xbet logo"
                  width={'10%'}
                />
                <Typography variant="p" fontWeight={'bold'} ml={2} color="white">
                  1xbet.com
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" my={2}>
                <img
                  src="https://xbetagents.com/wp-content/uploads/2024/04/Untitled-design.png"
                  alt="email logo"
                  width={'8%'}
                />
                <Typography variant="p" fontWeight={'bold'} ml={2} color="white">
                  Manager@1xbetagents.com
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid size={{xs:12,md:6}}>
            <Box
              sx={{
                backgroundColor: 'white',
                padding: '2em',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Typography variant='h6' color="black" mb={2}>
                Submit your application
              </Typography>
              <form>
                <TextField
                  fullWidth
                  label="Name"
               
                  variant="outlined"
                   sx={{ marginBottom: '0.5em' }}
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Email"
               
                  variant="outlined"
                   sx={{ marginBottom: '0.5em' }}
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Country"
                 
                  variant="outlined"
                   sx={{ marginBottom: '0.5em' }}
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Phone"
               
                  variant="outlined"
                   sx={{ marginBottom: '0.5em' }}
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Telegram/Others account"
               
                  variant="outlined"
                  sx={{ marginBottom: '0.5em' }}
                  size="small"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: '#799d44',
                    color: 'white',
                    padding: '0.5em',
                  }}
                >
                  Send
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contacts;
