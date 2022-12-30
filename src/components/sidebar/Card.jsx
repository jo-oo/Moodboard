import "./card.scss";

const Card = ( {category} ) => {
    return (
        <div>
            <p>{category.heading}</p>
        </div>
    )
}

export default Card