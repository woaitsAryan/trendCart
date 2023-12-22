import React, { useState, useEffect } from 'react';
//import foot_img from './foot.jpg'
import { styled, alpha } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './App.css';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const images = [
  "./foot 1.jpg",
  "./genz.jpg",
  "./hrx 1.jpg",
  "./main-scroll-pc._CB574359281_.gif",
];

function App() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      changeBackgroundImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImg]);

  const changeBackgroundImage = () => {
    setCurrentImg((prevImg) => (prevImg + 1) % images.length);
  };

  const handleNextImg = () => {
    setCurrentImg((prevImg) => (prevImg + 1) % images.length);
  }

  const handlePrevImg = () => {
    setCurrentImg((prevImg) => (prevImg - 1 + images.length) % images.length);
  }

  const final_img = process.env.PUBLIC_URL + images[currentImg];
  
  
  
  return (
    <html>
    <body>
    <div class = "bod">
     <div className="navbar">
      
          <div class="logo">Logo</div>  
          
          <div class="nav-items">
            <div class="links" href = "#">Home</div>
            <div class="links" href = "#">Categories</div>
            <div class="links" href = "#">Best Sellers</div>
            <div class="links" href = "#">Contact</div>
          </div>
          <div class="icons">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi-bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi-bi-bag-fill" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
            </svg>
          </div>        
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        
          
     </div>
     {/* <img class = "imagee" src = {foot_img} /> */}
     <div class="img-container">
        <ArrowBackIosNewIcon class = "arrow_B" onClick = {handlePrevImg} style={{cursor : 'pointer'}}></ArrowBackIosNewIcon>
        <img class = "image" src={process.env.PUBLIC_URL + images[currentImg]} alt="Dynamic" />    
        <ArrowForwardIosIcon class="arrow_F" onClick = {handleNextImg} style={{cursor : 'pointer'}}></ArrowForwardIosIcon>
     </div>
     
      <div class="row">
        <div class="column1">
          <img src="./Slice 16.jpg"  style={{width:'100%' , height:'90%'}}/>
        </div>
        <div class="column">
          <img src="./Slice 27.jpg"  style={{width:'100%' , height:'90%'}}/>
        </div>
        <div class="column">
          <img src="./Slice 24.jpg"  style={{width:'100%' , height:'90%'}}/>
        </div>
        <div class="columnl">
          <img src="./Slice 22.jpg" style={{width:'100%' , height:'90%'}}/>
        </div>
      </div>

    </div>

    <div class="end-container">
      <div class = "end-text">
        <div class="end-column">Welcome to trendCart<br/>Social responsibilty<br/>About Us</div>
        <div class="end-column">Help<br/>Shipping & Delivery<br/>Return Policy</div>
        <div class="end-column">Contact Us<br/>Facebook<br/>Instagram</div>
        <div class="end-column">Policies<br/>Terms & Conditions<br/>Privacy Policy</div>
        
      </div>
      
      <div class="logo-end">
      
        <FacebookIcon style={{ color: '#ffffffd5' , fontSize : 50 , marginRight : 100}}></FacebookIcon>
        <InstagramIcon style={{ color: '#ffffffd5' , fontSize : 50, marginRight : 100}}></InstagramIcon>
        <TwitterIcon style={{ color: '#ffffffd5' , fontSize : 50}}></TwitterIcon>
      </div>
      <div class = "trend-end">Logo<br/>where fashion begins!</div>
    </div>
        
    </body>
    </html>
  );
}


export default App;
