import "./card.scss";

const Card = ( {category} ) => {
    return (
        <div className="Card">
            <p>{category.heading}</p>
            <p>{category.name}</p>
        </div>
    )
}

export default Card