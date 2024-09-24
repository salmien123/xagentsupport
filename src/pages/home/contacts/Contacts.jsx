import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import './Contacts.css'
const Contacts = () => {
    return (
        <Box         
          id='fullContacts'                  
          color={'white'}
          padding={'0 5em'}                
        >
          <Grid  border='1px solid red' padding={'4em'} alignItems={'center'} justifyContent={'center'} container >
            {/* First Section: Contact Information */}
            <Grid  item size={{lg:6,md:4,sm:12,xs:12}}>
              <Box>
                <Typography variant="h1" sx={{ fontSize: '4.5em', mb: 2,fontWeight:'bold' }}>
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
            <Grid  item size={{lg:5,md:5,sm:12,xs:12}}>
              <Paper               
                sx={{
                  padding: '2em',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                }}
              >
                <Typography variant="h5" gutterBottom textAlign="center">
                  Submit your application
                </Typography>
                <form>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Country"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Telegram/Others account"
                    variant="outlined"
                    margin="normal"
                  />
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: '#77a32f', 
                      color: 'white',
                      marginTop: '1em',
                      '&:hover': {
                        backgroundColor: '#444',
                      },
                    }}
                  >
                    Send
                  </Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      );
    };
  

export default Contacts;