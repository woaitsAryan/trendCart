import * as React from 'react';
import { Link } from 'react-router-dom';

import { useRef,useEffect,useState } from 'react';
import '../styles/categories.css';
import Navbar from './Navbar'
import EndContainer from './endContainer';
import { useCart } from './CartContext';

export default function BestSell (){
    const { addToCart } = useCart();
    const denimsRef = useRef(null);
    const [showMessage, setShowMessage] = useState(false); 
    const [message, setMessage] = useState('');

    const handleAddToCart = (e,item) => {
        e.preventDefault();
        addToCart(item);
        setMessage('Item added to cart successfully');
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    };

    useEffect(() => {
        if (denimsRef.current) {
            denimsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return(
        <div>
            <Navbar/>
            <div ref={denimsRef}>Denims Section</div>
            <div>dresses</div>
        </div>
        
    )
}

