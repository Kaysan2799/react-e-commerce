// import './Admin.css';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Card from "./Home/Card";

const AdminPage = () => {
  const [cardsData, setCardsData] = useState([]);
  const [newCard, setNewCard] = useState({
    id: "",
    title: "",
    text: "",
    image: null,
    price: "",
    category: "Category 1",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewCard((prevState) => ({
      ...prevState,
      image: URL.createObjectURL(file),
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setNewCard((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const handleCardCreation = () => {
    const newCardData = {
      ...newCard,
      id: cardsData.length + 1,
    };
    setCardsData((prevState) => [...prevState, newCardData]);
    setNewCard({
      id: "",
      title: "",
      text: "",
      image: null,
      price: "",
      category: "Category 1",
    });
  };

  const handleCardDeletion = (cardId) => {
    setCardsData((prevState) =>
      prevState.filter((card) => card.id !== cardId)
    );
  };

  const handleCardUpdate = (cardId, updatedCard) => {
    setCardsData((prevState) =>
      prevState.map((card) =>
        card.id === cardId ? { ...card, ...updatedCard } : card
      )
    );
  };

  const handleCategoryClick = (category) => {
    const cardsUnderCategory = cardsData.filter(
      (card) => card.category === category
    );

    const categoryHeading = document.createElement("h2");
    categoryHeading.textContent = category;

    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(categoryHeading);

    cardsUnderCategory.forEach((card) => {
      const cardComponent = (
        <Card
          key={card.id}
          card={card}
          onDelete={() => handleCardDeletion(card.id)}
          onUpdate={(updatedCard) => handleCardUpdate(card.id, updatedCard)}
        />
      );

      ReactDOM.render(cardComponent, root);
    });
  };

  useEffect(() => {
    // Load initial cardsData or perform other necessary actions
    // This code will execute when the component mounts
  }, []);

  return (
    <div style={{ paddingLeft: '2%', fontFamily: 'Arial, sans-serif', marginTop: '-130px' }}>
      <h1 style={{ color: '#032F40', fontSize: '34px', fontWeight: 'bold', }}>Admin Page</h1>

      {/* ... (rest of the component) */}

      <h2 style={{ color: 'green', fontSize: '25px', fontWeight: 'bold' }}>Create Card</h2>
      <form
        style={{
          border: '2px solid black', width: '45%', borderRadius: '15px', padding: '10px', backgroundColor: '#032F40', color: 'white',

        }}
      >

        <label style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px', }}>
          Title:
          <input
            style={{ padding: '5px', borderRadius: '8px', margin: '10px' }}
            type="text"
            name="title"
            placeholder='Title of the card'
            value={newCard.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px', display: 'flex' }}>
          Description:
          <textarea
            style={{ padding: '5px', borderRadius: '8px', margin: '10px' }}
            name="text"
            value={newCard.text}
            onChange={handleInputChange}
            placeholder='Write Description here'
          ></textarea>
        </label>
        <br />
        <label style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px', marginTop: '-40px', width: '80%' }}>
          Image:
          <input
            style={{ padding: '5px', borderRadius: '8px', margin: '10px', }}
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <br />
        <label style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px', }}>
          Price:
          <input
            style={{ padding: '5px', borderRadius: '8px', margin: '10px' }}
            type="number"
            name="price"
            placeholder='Enter price here'
            value={newCard.price}
            onChange={handleInputChange}
          />
        </label >
        <br />
        <label style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px', }}>
          Category:
          <select
            style={{ padding: '5px', borderRadius: '8px', margin: '10px' }}
            name="category"
            value={newCard.category}
            onChange={handleCategoryChange}
          >
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            {/* Add more category options as needed */}
          </select>
        </label>
        <br />
        <button type="button" onClick={handleCardCreation}
          style={{ width: '220px', height: '60px', borderRadius: '12px', marginLeft: '3%', fontSize: '20px', fontWeight: 'bold', marginBottom: '2%' }}>
          Create Card
        </button>
      </form>

      <h2 style={{ color: 'Black', fontSize: '40px', marginTop: '80px' }}>Manage Cards</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(calc(25% - 1rem), 1fr))', gap: '1rem' }}>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            card={card}
            onDelete={() => handleCardDeletion(card.id)}
            onUpdate={(updatedCard) => handleCardUpdate(card.id, updatedCard)}
          />
        ))}
      </div>


      <h2 style={{ color: 'Black', marginTop: '20px', fontSize: '30px', fontWeight: 'bold' }}>Categories</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '10px', fontSize: '25px', fontWeight: 'bold', width: 'auto' }}>
        <button
          style={{
            width: '220px', height: '60px', borderRadius: '12px', backgroundColor:'skyblue',
            fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '5px',
          }}
          onClick={() => handleCategoryClick("Category 1")}>Category 1</button>
        <button
          style={{
            width: '220px', height: '60px', borderRadius: '12px',backgroundColor:'skyblue',
            fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', margin: '5px',
          }}
          onClick={() => handleCategoryClick("Category 2")}>Category 2</button>
      </ul>
    </div>
  );
};

export default AdminPage;