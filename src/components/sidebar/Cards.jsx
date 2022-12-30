import "./cards.scss";
import Card from "./Card";

const Cards = ({ categoryList }) => {

    const list = categoryList;

    return (
        <div>
            {list.map((category, i) => {
                return (
                    <div key={i}>
                        {/* send rendering of each category to a Card component. Send category data there */}
                        <Card category={category} nr={i}/>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;