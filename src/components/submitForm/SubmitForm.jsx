import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

// import './SubmitForm.css';
// import { AppContext } from '../../AppContext';

 const SubmitForm = () => {
  const { register, reset ,handleSubmit, formState: { errors } } = useForm(); 
//   const {setSuccess,language} = useContext(AppContext); 
//   const translations = require(`../../translations/${language.toLowerCase()}.json`);
 
  const createSheetData = (data) => {
    fetch('https://sheetdb.io/api/v1/n5fjzxbfyd2zo', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'name':data.name,
                "country":data.country,
                "email":data.email,
                "phone":data.phone,
                "contactMethod":data.contactMethod,
                "nickname":data.nickname,
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => {
    if(data.created ===1){
    //   setSuccess(true)
      reset();
    }
  });

  }
  const onSubmit = async data => {
    try {
      createSheetData(data)
    } catch (error) {
      alert(error.message);
    }
  };


  return (
    <Box>
            <Box
            sx={{
              padding: '10px 15px',  // Reduced padding
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
                  backgroundColor: '#799d44',
                  color: 'white',
                  marginTop: '0.75em',  // Smaller margin
                  padding: '0.5em 0',  // Reduced padding
                  fontSize: '0.9em',   // Smaller button text                 
                }}
              >
                Send
              </Button>
            </form>
          </Box>
    </Box>
    
  );
};

export default SubmitForm;