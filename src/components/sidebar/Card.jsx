import "./card.scss";

const Card = ( {category} ) => {
    return (
        <div className="Card">
            <p>{category.heading}</p>
        </div>
    )
}

export default Card