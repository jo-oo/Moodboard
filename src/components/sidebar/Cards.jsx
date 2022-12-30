import "./cards.scss";

const Cards = ({ categoryList }) => {

    const list = categoryList;

    return (
        <div>
            {list.map((category, i) => {
                return (
                    <div key={i}>
                        <p>{category.heading}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;