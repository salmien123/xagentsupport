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
        spacing={4}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: { xs: 'center', md: 'left' },         
          flexWrap: 'nowrap', // Prevents items from wrapping to the next row
        }}
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
        <Grid item size={{md:6,lg:6,xs:10}}>
          <Paper
            sx={{
              padding: '0 3em',
              borderRadius: '10px',
              margin: '5em', // Center the form
              border:'1px solid red', 
              backgroundColor: 'white',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',             
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
