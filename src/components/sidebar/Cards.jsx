import "./cards.scss";
import Card from "./Card";

const Cards = ({ categoryList }) => {

    const list = categoryList;

    return (
        <div className="CardsBox"> 
            <div className="Cards">
                PLUS
            </div>
            {list.map((category, i) => {
                return (
                    <div key={i} className="Cards">
                        {/* send rendering of each category to a Card component. Send category data there */}
                        <Card category={category} nr={i}/>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;