
import Card from "./Card";
function CardHeader() {

    const cardsData = [
        {
          title: 'Card 1',
          text: 'This is the description for Card 1',
          image: '../../Pics/Internal Work Communication.gif',
          price: '10'
        },
        {
            title: 'Card 2',
            text: 'This is the description for Card 2',
            image: '../../Pics/Internal Work Communication.gif',
            price: '10'
        },
        // Add more card data objects as needed
      ];
    return (
        <>
            <div className=" row row-cols-1 row-cols-md-3 g-4">

                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        title={card.title}
                        text={card.text}
                        price={card.price}
                    />
                ))}
            </div>
        </>
    );
}
export default CardHeader;