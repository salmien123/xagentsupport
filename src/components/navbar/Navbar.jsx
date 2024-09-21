import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
// import ReactFlagsSelect from 'react-flags-select';
import './Navbar.css'
// import { AppContext } from '../../AppContext';
// import { useNavigate } from 'react-router-dom';
// import FormModal from '../../components/modal/FormModal'
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  const appBarStyles = {
    backgroundColor: trigger ? 'black' : 'inherit',
    transition: 'background-color 0.8s',
  };
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: appBarStyles,
  });
}
// const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const Navbar = (props) => {

  const [,setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//   const [select, setSelect] = useState("GB");
//   const {language,setLanguage} = useContext(AppContext);
  // const navigate = useNavigate();
  const [ , setIsModalOpen] = useState(false);

//   const translations = require(`../../translations/${language.toLowerCase()}.json`);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };

//   const handleChangeLanguage = (newLang) => {
//     navigate(`/${newLang.toLowerCase()}/`);
//   };
//   const onSelect = (code) => {
//     if(code === 'SA' || code === 'RU' || code === 'GB'){
//         setLanguage(code);
//         handleChangeLanguage(code);
//         setSelect(code);
//     }
// }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
const scrollToViewAndCloseMenu = (scrollToFunction, onCloseFunction) => {
    scrollToFunction();
    onCloseFunction();
  };

  const scrollToAboutUs = () => {document.getElementById('aboutUs').scrollIntoView({ behavior: 'smooth' });};
  const scrollToCollaborate = () => {document.getElementById('collaboration').scrollIntoView({ behavior: 'smooth' });};
  const scrollToContact = () => {document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });};


  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);

  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Dialog
      fullScreen
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        style: {
          background: '#212121',         
          color: 'white',
          
        },
      }}
    >
      <DialogTitle >
        <Box sx={{ padding: '0.1em ',textAlign:'right' }} onClick={handleMobileMenuClose}>
          <CloseIcon />          
        </Box>
      </DialogTitle>
      <DialogContent style={{marginTop:'5em'}}>
        <MenuItem sx={{padding:'1em 0 0 5em'}} onClick={() => scrollToViewAndCloseMenu(scrollToAboutUs, handleMobileMenuClose)}>
          <Link className='link-style' to="#" onClick={scrollToAboutUs}
          >
            {'Home'}
          </Link>
        </MenuItem>
        <MenuItem sx={{padding:'1em 0 0 5em'}} onClick={() => scrollToViewAndCloseMenu(scrollToCollaborate, handleMobileMenuClose)} >
          <Link className='link-style' >
            {'Benifit'}
          </Link>
        </MenuItem>
        <MenuItem sx={{padding:'1em 0 0 5em'}} onClick={()=>scrollToViewAndCloseMenu(scrollToContact, handleMenuClose)}>
          <Link className='link-style'   >
            {'Conditions'}
          </Link>
        </MenuItem>
        <MenuItem sx={{padding:'1em 0 0 5em'}} onClick={()=>scrollToViewAndCloseMenu(scrollToContact, handleMenuClose)}>
          <Link className='link-style'   >
            {'Oppurtunities'}
          </Link>
        </MenuItem>
        <MenuItem sx={{padding:'1em 0 0 5em'}} onClick={()=>scrollToViewAndCloseMenu(scrollToContact, handleMenuClose)}>
          <Link className='link-style'   >
            {'Contacts'}
          </Link>
        </MenuItem>
        <MenuItem
          className="becomeAgentBttton"
          onClick={handleOpenModal}>
          {'BECOME AN AGENT'}
        </MenuItem>
      </DialogContent>
    </Dialog>
  );

  return (
    <Box sx={{backgroundColor:'#0d1425'}}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar >
          <Toolbar sx={{display:'flex',alignItems:'center',textAlign:'center',justifyContent:'space-evenly'}}>
            {/* menuBtn */}
            <IconButton size="large" edge="center" aria-label="open drawer" aria-controls={mobileMenuId} onClick={handleMobileMenuOpen} 
            sx={{display: {lg: 'none',md:'none',xs:'block'}, order:{xs:3},color:'white !important'}} >
              <MenuIcon/>                    
            </IconButton>
            {/* image */}
            <Typography sx={{order:{xs:1,lg:1}}}
              variant="h2"
              component="div"
            >
              <Link to='/'>
            <Box component={'img'} sx={{ margin:'0.4em',width: { xs: '2em', lg: '3.2em' }, }} src={logo} alt="logo" />
              </Link>
            </Typography>
            <Box sx={{display: { xs: 'none', md: 'flex', color: 'grey'},order:{lg:2} }}>
              <MenuItem>     <Link className='link-style' onClick={scrollToAboutUs}>Home</Link>   </MenuItem>
              <MenuItem >    <Link className='link-style' onClick={scrollToCollaborate}>Benifits</Link>   </MenuItem>
              <MenuItem>    <Link className='link-style' onClick={scrollToContact}>Conditions</Link>    </MenuItem>
              <MenuItem>    <Link className='link-style' onClick={scrollToContact}> Oppurtunities</Link>   </MenuItem>
              <MenuItem>    <Link className='link-style' onClick={scrollToContact}>Contacts</Link>    </MenuItem>
              <MenuItem className="becomeAgentBttton" sx={{marginLeft:'4.5em'}} onClick={handleOpenModal} > {'BECOME AN AGENT'}</MenuItem>              
            </Box>
            {/* language */}
            {/* <Box sx={{order:{xs:2}}}>
            <MenuItem >
                <ReactFlagsSelect                
                  selected={select}
                  onSelect={onSelect}
                  countries={["GB","RU","SA","FR", "es", "ES", "pt", "PT", "zh", "CN", "ja", "JP", "th", "TH", "az", "AZ","kr", "KR", "my", "MY"]}
                  customLabels={{
                    GB: "EN",RU: "RU",SA: "AR",FR: "FR", es: "es", ES: "ES", pt: "pt", PT: "PT", CN: "ZH", ZH: "ZH", JP: "JA", JA: "JA", th: "TH", TH: "TH", az: "AZ", AZ: "AZ",AR: "AR", kr: "KR", KR: "KR", my: "MY", MY: "MY"
                  }}
                  selectedSize={15}
                  optionsSize={15} />
            </MenuItem>


            </Box> */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      {/* <FormModal open={isModalOpen} handleClose={handleCloseModal} /> */}
      {renderMobileMenu}     
    </Box>
  );
};

export default Navbar;