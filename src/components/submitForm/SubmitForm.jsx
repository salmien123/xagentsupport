import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import CloseIcon from '@mui/icons-material/Close';

// import './SubmitForm.css';
// import { AppContext } from '../../AppContext';

const SubmitForm = ({ handleClose }) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

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
            'name': data.name,
            "country": data.country,
            "email": data.email,
            "phone": data.phone,
            "contactMethod": data.contactMethod,
            "nickname": data.nickname,
          }
        ]
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.created === 1) {
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
          backgroundColor: 'white',
          padding: '2em',
          borderRadius:'0.4em',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          width: { xs: '100vw', md: '40vw' }
        }}
      >
        <Box display={'flex'} justifyContent={'flex-end'}>
        <CloseIcon sx={{ color: 'black', cursor: 'pointer',marginBottom:'0.2em'}} onClick={handleClose} />

        </Box>
        <Box>
        <Typography variant='h5' color="black" fontWeight={'bolder'} textAlign={'center'} mb={2}>
                Submit your application
              </Typography>
        </Box>
        <form>
          <TextField
            fullWidth
            label="Name"
            sx={{ marginBottom: '0.5em' }}
            variant="outlined"
            size='small'

          />
          <TextField
            fullWidth
            label="Email"
            sx={{ marginBottom: '0.5em' }}
            variant="outlined"
            size='small'
          />
          <TextField
            fullWidth
            label="Country"
            sx={{ marginBottom: '0.5em' }}
            variant="outlined"
            size='small'

          />
          <TextField
            fullWidth
            label="Phone"
            sx={{ marginBottom: '0.5em' }}
            variant="outlined"
            size='small'
          />
          <TextField
            fullWidth
            label="Telegram/Others account"
            sx={{ marginBottom: '0.5em' }}
            variant="outlined"
            size='small'


          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#77a32f',
              color: 'white',
              padding: '0.4em',
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