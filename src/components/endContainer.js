import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Home.css';

function EndContainer() {
  return (
    <div className="end-container">
      <div className="end-text">
      <div className="end-column">Welcome to trendCart<br/>Social responsibilty<br/>About Us</div>
        <div className="end-column">Help<br/>Shipping & Delivery<br/>Return Policy</div>
        <div className="end-column">Contact Us<br/>Facebook<br/>Instagram</div>
        <div className="end-column">Policies<br/>Terms & Conditions<br/>Privacy Policy</div>
        
      </div>
      <div className="logo-end">
        <FacebookIcon style={{ color: '#ffffffd5', fontSize: 50, marginRight: 100 }} />
        <InstagramIcon style={{ color: '#ffffffd5', fontSize: 50, marginRight: 100 }} />
        <TwitterIcon style={{ color: '#ffffffd5', fontSize: 50 }} />
      </div>
      <div className="trend-end" style={{fontSize:"25px"}}>trendCart</div>
      <div style={{color:"white"}}>where fashion begins !</div>
    </div>
  );
}

export default EndContainer;
