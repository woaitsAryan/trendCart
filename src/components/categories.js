import * as React from 'react';
import { Link } from 'react-router-dom';

import { useEffect,useState } from 'react';
import '../styles/categories.css';
import Navbar from './Navbar'
import EndContainer from './endContainer';
import { useCart } from './CartContext';
import { useLocation } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Categories() {
    const [value, setValue] = React.useState(0);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [cartItems, setCartItems] = React.useState([]);
    const [showMessage, setShowMessage] = useState(false); 
    const [message, setMessage] = useState('');

    //const history = useHistory();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const categoryParam = queryParams.get('category');
    const searchParam = queryParams.get('search');

  // Use category or searchQuery to filter items accordingly

  

    const categories = [
        { label: "Home", items: [
            { name: "Sofa Set", price: "$1499", imageUrl: "https://images.pexels.com/photos/2986011/pexels-photo-2986011.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Sofa Set", price: "$1499",imageUrl: "https://images.pexels.com/photos/1125135/pexels-photo-1125135.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Crockery Set", price: "$1499",imageUrl: "https://images.pexels.com/photos/4259833/pexels-photo-4259833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
            { name: "Crockery Set", price: "$1499",imageUrl: "https://images.pexels.com/photos/8370314/pexels-photo-8370314.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
            { name: "Dining Table", price: "$1499",imageUrl: "https://images.pexels.com/photos/3144581/pexels-photo-3144581.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Black Lamp", price: "$1499",imageUrl: "https://images.pexels.com/photos/112811/pexels-photo-112811.jpeg?auto=compress&cs=tinysrgb&w=600" },

        ] },
        { label: "Men", items: [
            { name: "Denim Jacket", price: "$1499",imageUrl: "https://images.pexels.com/photos/4674396/pexels-photo-4674396.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
            { name: "Oversized Tshirt", price: "$1499",imageUrl: "https://images.pexels.com/photos/20318936/pexels-photo-20318936/free-photo-of-studio-shot-of-a-young-man-in-a-black-blouse-and-jeans-standing-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
            { name: "Hoodie", price: "$1499",imageUrl: "https://images.pexels.com/photos/12712911/pexels-photo-12712911.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
            { name: "Denim Jacket",price: "$1499", imageUrl: "https://images.pexels.com/photos/17896493/pexels-photo-17896493/free-photo-of-young-man-in-a-casual-outfit-posing-in-a-modern-interior.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
            { name: "Casual Tshirt", price: "$1499",imageUrl: "https://images.pexels.com/photos/9163727/pexels-photo-9163727.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
            { name: "Hoodie", price: "$1499",imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600" },

        ] },
        { label: "Women", items: [
            { name: "Bodycon Dress", price: "$1499",imageUrl: "https://img101.urbanic.com/v1/goods-pic/8afff33901414691abff7b4d7f0b220eUR_w750_q90.webp" },
            { name: "Printed Top", price: "$1499",imageUrl: "https://img101.urbanic.com/v1/goods-pic/5c629193bf70444b9173fc8b5e0bd524UR_w750_q90.webp" },
            { name: "Straight Leg Pants", price: "$1499",imageUrl: "https://img101.urbanic.com/v1/goods-pic/bd2e48b5e4554c97ab1c9d566a309679UR_w750_q90.webp" },
            { name: "Wide Leg Jeans", price: "$1499",imageUrl: "https://img101.urbanic.com/v1/goods-pic/64240d2e6c374788b42c08ad31425d39UR_w750_q90.webp" },
            { name: "Flared Jeans", price: "$1499",imageUrl: "https://img101.urbanic.com/v1/goods-pic/126f744f33ba42158857fdd9900a667dUR_w750_q90.webp" },
            { name: "Floral Dress", price: "$1499",imageUrl: "https://img101.urbanic.com/v1/goods-pic/82643e54d8f54d12b02ec8702fcc4416UR_w750_q90.webp" },

        ] },
        { label: "Footwear", items: [
            { name: "Adidas Shoes", price: "$1499",imageUrl: "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "White Puma Shoes", price: "$1499",imageUrl: "https://images.pexels.com/photos/11324547/pexels-photo-11324547.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },
            { name: "Ladies Boots", price: "$1499",imageUrl: "https://images.pexels.com/photos/1537492/pexels-photo-1537492.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "High Heels", price: "$1499",imageUrl: "https://images.pexels.com/photos/3782788/pexels-photo-3782788.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Red High Heels", price: "$1499",imageUrl: "https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=600" },
            { name: "Unisex White Shoes", price: "$1499",imageUrl: "https://images.pexels.com/photos/6050914/pexels-photo-6050914.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" },

        ] }
    ];

    useEffect(() => {
        const categoryIndex = categories.findIndex(cat => cat.label === categoryParam);
        setValue(categoryIndex + 1);
    }, [categoryParam]);

    // Function to shuffle array items randomly
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Combine all items from all categories
    const allItems = categories.flatMap(category => category.items);
    const shuffledAllItems = shuffleArray(allItems);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Function to filter items based on category and search query
    const filteredItems = value === 0 ? shuffledAllItems.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) : categories[value - 1].items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
const { addToCart } = useCart();

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
        if (categoryParam) {
            const categoryIndex = categories.findIndex(cat => cat.label === categoryParam);
            setValue(categoryIndex + 1);
        }
    }, [categoryParam]);
    

    const handleTabChange = (index, categories) => {
        const category = index === 0 ? '' : categories[index - 1].label;
        window.history.replaceState(null, "new page", `/categories?category=${category}`);
        setValue(index);
    };

    return (
        <div>
            <Navbar />
            <div className='box-container'>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={(event, newValue) => handleTabChange(newValue, categories)} centered indicatorColor="black">
                    <Tab
                        label="All"
                        style={value === 0 ? { backgroundColor: 'black', color: 'white', borderRadius: '50px', marginRight: '1%', fontSize: '17px', textTransform: 'none' } : { color: '#333', marginRight: '1%', fontSize: '17px', textTransform: 'none' }}
                    />
                    {categories.map((category, index) => (
                        <Tab
                            key={index}
                            label={category.label}
                            
                            style={value === index + 1 ? { backgroundColor: 'black', color: 'white', borderRadius: '50px', marginRight: '1%', fontSize: '17px', textTransform: 'none' } : { color: '#333', marginRight: '1%', fontSize: '17px', textTransform: 'none' }}
                        />
                    ))}
                </Tabs>
            </Box>

            </div>
            <div className='search-search'>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
            </div>
            {showMessage && (
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="success">Item added to cart successfully</Alert>
            </Stack>
          )}<br></br>
            <div className="items-container">
    {/* Display filtered items with images */}
    {filteredItems.map((item, index) => (
        <div key={index} className="item">
            <div className='image-container' style={{ borderRadius:"20px",padding:"5%",height:"75%",boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)"}}>
                <img src={item.imageUrl} alt={item.name} />
                <div>{item.name}</div>
                <div>{item.price}</div>
                <button
                    type="button"
                    className="add-to-cart-btn"
                    style={{ backgroundColor: "black", color: "white", cursor: "pointer", borderRadius: "10px", marginTop: "20px", padding: "8px" }}
                    onClick={(e) => handleAddToCart(e, item)}>
                    Add To Cart
                </button>
                

            </div>
        </div>
    ))}
</div>
        <EndContainer/>
        </div>
    )
}
export default Categories;


