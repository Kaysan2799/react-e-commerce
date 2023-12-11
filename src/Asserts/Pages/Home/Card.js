// Card.jsx
import './Box.css';
import React from "react";

const Card = ({ card, onDelete, onUpdate }) => {
  const handleDelete = () => {
    onDelete();
  };

  const handleUpdate = () => {
    const updatedCard = {
      ...card,
      title: prompt("Enter the updated title", card.title),
      text: prompt("Enter the updated description", card.text),
      price: prompt("Enter the updated price", card.price),
    };
    onUpdate(updatedCard);
  };

  return (
    <div className="card box" style={{ border: '2px solid black', borderRadius: '20px', width: '22%', padding: '3%', display: 'flex' }}>
      <img style={{ width: '80%', height: '80%', padding: '1%', margin: '10%', border: '2px solid black', borderRadius: '20px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)' }} src={card.image} alt={card.title} />
      <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>{card.title}</h3>
      <p style={{ color: 'Black', fontSize: '20px', fontWeight: 'bold' }}>Discription: <p style={{ fontWeight: 'normal' }}>{card.text}</p></p>
      <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Price: <b style={{ color: 'green', }}>${card.price}</b></p>
      {/* add category handler too */}
      <p style={{ color: 'Black', fontSize: '20px', fontWeight: 'bold' }}>Category: </p>

      <button
        onClick={handleUpdate}
        style={{
          width: '120px',
          height: '40px',
          borderRadius: '12px',
          backgroundColor: '#032F40',
          color: 'white',
        }}
      >
        Update
      </button>
      <button onClick={handleDelete}
        style={{
          width: '120px',
          height: '40px',
          borderRadius: '12px',
          backgroundColor: '#032F40',
          color: 'white',
          marginTop:'2%'
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
