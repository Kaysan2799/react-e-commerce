// import React, { useState } from 'react';
// import './ProductPage.css'; // Include your CSS file

// const ProductPage = () => {
//     const [totalItems, setTotalItems] = useState(1);

//     const handleIncrement = () => {
//         setTotalItems(totalItems + 1);
//     };

//     const handleDecrement = () => {
//         setTotalItems((prev) => (prev > 1 ? prev - 1 : 1));
//     };

//     const handleChange = (e) => {
//         const value = parseInt(e.target.value, 10);
//         setTotalItems(value > 0 ? value : 1);
//     };

//     // Add other event handlers and state as needed

//     return (
//         <div className="container">
//             <div className="row">
//                 {/* ... Other HTML content ... */}
//                 <div className="col-2">
//                     {/* ... Other HTML content ... */}
//                     <div className="buttonsRow">
//                         <div className="increment">
//                             <img alt="" src="./images/icon-minus.svg" id="minus" onClick={handleDecrement} />
//                             <input type="number" name="totalItems" id="totalItems" value={totalItems} onChange={handleChange} />
//                             <img alt="" src="./images/icon-plus.svg" id="plus" onClick={handleIncrement} />
//                         </div>
//                         <div className="callToAction">
//                             <button id="btn">
//                                 <i className="fa-solid fa-cart-shopping"></i> Add to cart
//                             </button>
//                         </div>
//                     </div>
//                     {/* ... Other HTML content ... */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductPage;


// ProductPage.jsx
import image1 from '../Pics/image-product-1.jpg'
import image2 from '../Pics/image-product-2.jpg'
import image3 from '../Pics/image-product-3.jpg'
import image4 from '../Pics/image-product-4.jpg'
import React, { useState } from 'react';
import './ProductPage.css';

const ProductPage = () => {
    const [totalItems, setTotalItems] = useState(1);

    const handleIncrement = () => {
        setTotalItems(totalItems + 1);
    };

    const handleDecrement = () => {
        setTotalItems((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        setTotalItems(value > 0 ? value : 1);
    };

    const [currentImage, setCurrentImage] = useState(0);
    const productImages = [
        image1,
        image2,
        image3,
        image4,
    ];

    const handleImageChange = (index) => {
        setCurrentImage(index);
    };

    return (
        <div className="product-page">
            <div className="product-images">
                <img className='img1' src={process.env.PUBLIC_URL + productImages[currentImage]} alt="Product" />
                <div className="image-thumbnails">
                    {productImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={index === currentImage ? 'active-thumbnail' : ''}
                            onClick={() => handleImageChange(index)}
                        />
                    ))}
                </div>
            </div>
            <div className="product-details">
                <h2 className="product-title">Product Title</h2>
                <p className="product-price">$99.99</p>
                <h3 className="product-title" style={{ fontSize: '1.8rem' }}>Discription:</h3>
                <p className="product-description">
                    <p>Introducing LPS Generation 7: A new generation of Littlest Pet Shop has arrived; Series 1 Generation 7 is here! Farm Besties Collectors Set includes: 5 unique bobblin’ head pets, 7 cute accessories, 1 collector card, 1 virtual code , and 1 collector’s guide. Pets #56 to #60.</p>
                    <p>Farm Besties Collector’s Set: Littlest Pet Shop, Collector Set offers 2 unique themes. Meet our Farm besties, pets #56 to #60. Run around with rooster, goat, and the rest of the crew!</p>
                    <p>Discover Your New Pets: LPS pets are 2” collectible figures with bobblin’ heads. Use the collector’s card to discover each adorable pet, its unique personality, breed, and rarity level.</p>
                    <p>Virtual Play: Join our virtual play experience! With the code on your coin, you can unlock unique surprises, including virtual pets. Scan the QR code on our packaging or on the back of the collector card to learn more!</p>
                    <p>About Littlest Pet Shop: Littlest Pet Shop encourages community and imaginative play.Experience the joy of unboxing and discovering your new pet - friends.Collect them all, share, and trade.Welcome to the world of LPS!</p >
                </p >
                <div className="quantity-controls">
                    <div className="increment">
                        <button onClick={handleDecrement}>-</button>
                        <input
                            type="number"
                            name="totalItems"
                            id="totalItems"
                            value={totalItems}
                            onChange={handleChange}
                        />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                </div>
                <button className="add-to-cart-button">Add to Cart</button>
            </div >
        </div >
    );
};

export default ProductPage;

