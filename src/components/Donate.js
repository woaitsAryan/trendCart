import React, { useState } from 'react';
import '../styles/donate.css';
import Navbar from './Navbar'
import EndContainer from './endContainer';

const ClothesDonationPage = () => {
  const [clothes, setClothes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCloth, setSelectedCloth] = useState(null);
  const [newClothName, setNewClothName] = useState('');
  const [newClothDescription, setNewClothDescription] = useState('');
  const [newClothSize, setNewClothSize] = useState('');
  const [newClothCondition, setNewClothCondition] = useState('');
  const [newClothImage, setNewClothImage] = useState('');
  const [error, setError] = useState('');

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const conditions = ['New', 'Used'];

  const addCloth = () => {
    if (!newClothName || !newClothDescription || !newClothSize || !newClothCondition || !newClothImage) {
      setError('Please fill out all fields.');
      return;
    }

    const newCloth = {
      id: Date.now(),
      name: newClothName,
      description: newClothDescription,
      size: newClothSize,
      condition: newClothCondition,
      image: newClothImage
    };
    setClothes([...clothes, newCloth]);
    setNewClothName('');
    setNewClothDescription('');
    setNewClothSize('');
    setNewClothCondition('');
    setNewClothImage('');
    setError('');
  };

  const handleClothClick = (cloth) => {
    setSelectedCloth(cloth);
  };

  const filteredClothes = clothes.filter(cloth => {
    return cloth.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
    <Navbar/>
    <div className="clothes-donation-page">
      <h2 className="section-title" style={{marginBottom:"30px", marginLeft:"30px"}}>Donate Clothes</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search clothes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className='form-cont'>
      <div className="add-cloth-form">
        <input
          type="text"
          placeholder="Name"
          value={newClothName}
          onChange={(e) => setNewClothName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newClothDescription}
          onChange={(e) => setNewClothDescription(e.target.value)}
          required
        />
        <select value={newClothSize} onChange={(e) => setNewClothSize(e.target.value)} required>
          <option value="">Select Size</option>
          {sizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        <select value={newClothCondition} onChange={(e) => setNewClothCondition(e.target.value)} required>
          <option value="">Select Condition</option>
          {conditions.map(condition => (
            <option key={condition} value={condition}>{condition}</option>
          ))}
        </select>
        <input
          type="url"
          placeholder="Image URL"
          value={newClothImage}
          onChange={(e) => setNewClothImage(e.target.value)}
          required
        /><br></br>
        <button onClick={addCloth}>Add Cloth</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      </div>
      {selectedCloth ? (
        <div className="cloth-details">
          <h3>{selectedCloth.name}</h3>
          <p>{selectedCloth.description}</p>
          <div>
            <strong>Size:</strong> {selectedCloth.size}
          </div>
          <div>
            <strong>Condition:</strong> {selectedCloth.condition}
          </div>
          {selectedCloth.image && (
            <div>
              <img src={selectedCloth.image} alt={selectedCloth.name} />
            </div>
          )}
          <button onClick={() => setSelectedCloth(null)}>Back to Clothes List</button>
        </div>
        
      ) : (
        <div className="cloth-list">
          {filteredClothes.map(cloth => (
            <div className="cloth" key={cloth.id} onClick={() => handleClothClick(cloth)}>
            <div className='image-container' style={{ borderRadius:"20px",padding:"5%",height:"85%",boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)"}}>
              <img src={cloth.image} alt={cloth.name} className="cloth-image" />
              
                <h3 className="cloth-name">{cloth.name}</h3>
                <p className="cloth-description">{cloth.description}</p>
                <div className="size">Size: {cloth.size}</div>
                <div className="condition">Condition: {cloth.condition}</div>
              
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <EndContainer/>
    </div>
  );
};

export default ClothesDonationPage;
