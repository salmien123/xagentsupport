import {React,useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
// import { AppContext } from '../../AppContext';
import SubmitForm from '../submitForm/SubmitForm'
import Grid from '@mui/material/Grid2';


const style = {
  position: 'absolute',
  top:'50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', 
  borderRadius: '1em',
  color:"#FEBD02",
};

export default function BasicModal({ open, handleClose }) {
//   const { success } = React.useContext(AppContext);
const [success,setSuccess] = useState(false)
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
      <Grid container>
      <Grid>
        <Box sx={style}>
        <CloseIcon sx={{ fontSize: 40, color: 'black', cursor: 'pointer', marginTop: '0.3em', }} onClick={handleClose} />
          {success ? (
         <Box sx={{margin:{xs:'0em 0.2em'}}}>
             <Box sx={{width:{xs:'85vw'}}}>
              <h2>Thanks</h2>
              <p>modal para</p>
            </Box>
         </Box>
          ) : (                        
                <SubmitForm handleClose={handleClose} />                     
          )}
        </Box>
        </Grid>
        </Grid>
      </Modal>
    </div>
  );
}