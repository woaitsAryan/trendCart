import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import Navbar from './navbar';
import EndContainer from './endContainer';
import {Link} from 'react-router-dom';
import { useLocation  } from 'react-router-dom';

const images = [

  "foot 1.jpg",
  "genz.jpg",
  "final.gif",
  "hrx 1.jpg",
  "home.gif"
];



function Home() {
  
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


  const location = useLocation();
  const { history } = location;
  //const history = useHistory();

  const handleCategoryClick = (category) => {
    const url = `/categories?category=${category}`;
    window.history.replaceState(null, "New Page", url);
    window.location.href = url;
};

  
  return (
    <div>
    <div className = "bod">
     <Navbar/>
    
     <div className='top-img'>
      
      <div className="img-container">
          {/* <ArrowBackIosNewIcon className = "arrow_B" onClick = {handlePrevImg} style={{cursor : 'pointer'}}></ArrowBackIosNewIcon> */}
          <img className = "image" src={process.env.PUBLIC_URL + images[currentImg]} alt="Dynamic" />    
          {/* <ArrowForwardIosIcon className="arrow_F" onClick = {handleNextImg} style={{cursor : 'pointer'}}></ArrowForwardIosIcon> */}
      </div>
      
     </div>
     
     
    
      <div className='heading'>
      <a style={{fontSize:"37px"}}>Shop by categories</a>
      </div>
      
      <div className='categories'>
        <div className='cat-box' onClick={() => handleCategoryClick('Home')}>
          
          <img src="https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          
          <a>home</a>
          
        </div>
        <div className='cat-box' onClick={() => handleCategoryClick('Women')}>
          <img src="https://images.pexels.com/photos/7871152/pexels-photo-7871152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1D"/>
          <a>women</a>
        </div>
        <div className='cat-box' onClick={() => handleCategoryClick('Men')}>
          <img src="https://plus.unsplash.com/premium_photo-1669850858863-6fe7bf233483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"/>
          <a>men</a>
        </div>
        <div className='cat-box' onClick={() => handleCategoryClick('Footwear')}>
          <img src="https://images.pexels.com/photos/15694867/pexels-photo-15694867/free-photo-of-legs-with-green-shoes-leaning-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
          <a>footwear</a>
        </div>
      </div>
      <div className='heading'>
      <a style={{fontSize:"37px"}}>Our best products</a>
      </div>
      <div className='categories'>
        <div className='cat-box'>
          
          <img src="https://images.pexels.com/photos/17491557/pexels-photo-17491557/free-photo-of-blonde-women-taking-pictures-on-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          <a>skirts</a>
        </div>
        <div className='cat-box'>
        <Link to="/bestsell#denims"/>
          <img src="https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <a>denims</a>
        </div>
        <div className='cat-box'>
          <img src="https://img101.urbanic.com/v1/goods-pic/65fbd9474369401e845ce4eaca11ea66UR_w1440_q90.webp"/>
          <a>dresses</a>
        </div>
        <div className='cat-box'>
          <img src="https://images.pexels.com/photos/15267854/pexels-photo-15267854/free-photo-of-man-posing-in-hoodie.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
          <a>hoodies</a>
        </div>
      </div>
    </div>

    <EndContainer/>
    </div>
  );
}

export default Home;
