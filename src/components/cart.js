import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import '../styles/cart.css';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Navbar from './Navbar'
import EndContainer from './endContainer';

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const [itemQuantities, setItemQuantities] = useState([]);
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Initialize itemQuantities to match the length of cartItems
  useEffect(() => {
    setItemQuantities(cartItems.map(() => 1));
  }, [cartItems]);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item, index) => {
      console.log(`Item ${index}: price - ${item.price}, quantity - ${itemQuantities[index]}`);
      const price = parseFloat(item.price.replace(/[^\d.]/g, '')).toFixed(2); // Remove non-numeric characters
      const quantity = itemQuantities[index];
      if (!isNaN(price) && !isNaN(quantity)) {
        total += price * quantity;
        console.log(`total- ${total}`);
      }
    });
    setAmount(total);
    const discount = (total * 0.15).toFixed(2); // 15% discount
    setDiscount(discount);
    const discountedTotal = (total - discount).toFixed(2);
    setTotalAmount(discountedTotal);
  }, [cartItems, itemQuantities]);
  
  

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    setItemQuantities((prevQuantities) => {
    const newQuantities = [...prevQuantities];
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    newQuantities.splice(itemIndex, 1);
    return newQuantities;
  });
  };

  const handleIncreaseQuantity = (index) => {
    setItemQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index]++;
      return newQuantities;
    });
  };

  const handleDecreaseQuantity = (index) => {
    setItemQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index]--;
      } else {
        removeFromCart(cartItems[index].id);
        newQuantities.splice(index, 1);
      }
      return newQuantities;
    });
  };

  return (
    <div>
    <Navbar />
    <div className="cart">
      
      <h2 style={{marginLeft:"20px",paddingTop:"2%"}}>Shopping Cart</h2>
      <div className='cart-table' style={{marginLeft:"-10%"}}>
      <table>
        <tbody>
          {/* Display the items in the cart */}
          {cartItems.map((item, index) => (
            <tr key={item.id}  style={{height:"150px"}}>
              <td style={{width:"250px"}}>
                <img className="cart-img" src={item.imageUrl} alt={item.name} />
              </td>
              <td style={{width:"250px"}}>
                <div className="cart-details" style={{marginTop:"15px"}}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>
                    <div className="quantity-controls" style={{marginLeft:"-10px"}}>
                    <button onClick={() => handleDecreaseQuantity(index)}>-</button>
                    <span style={{ border: "1px solid grey", padding: "2px 10px", borderRadius:"4px" }}>{itemQuantities[index]}</span>

                    <button onClick={() => handleIncreaseQuantity(index)}>+</button>
                    </div>
                  </p>
                </div>
              </td>
              
              <td>
                <button style={{color: "red", display: "flex", alignItems: "center"}} onClick={() => handleRemoveFromCart(item.id)}>
                  <DeleteOutlinedIcon />
                  <span style={{ marginLeft: '0.5rem' }}>Remove</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className='cart-bill'>
  <h3>Price details</h3>
  <table className='bill-table'>
    <tbody>
      <tr>
        <td>Price ({cartItems.length} items)</td>
        <td>${amount}</td>
      </tr>
      <tr>
        <td>Discount</td>
        <td style={{color:"green"}}>- ${discount}</td>
      </tr>
      <tr>
        <td>Delivery charges</td>
        <td style={{color:"green"}}>Free</td>
      </tr>
      <tr>
        <td style={{fontWeight:"bold"}}>Total amount</td>
        <td style={{fontWeight:"bold"}}>${totalAmount}</td>
      </tr>
    </tbody>
  </table>
  <p style={{color:"green",marginLeft:"30px"}}>You will save ${discount} on this order</p>
</div>

    </div>
    <EndContainer/>
    </div>
  );
}

export default Cart;
