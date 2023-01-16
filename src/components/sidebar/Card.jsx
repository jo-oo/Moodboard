import "./card.scss";

const Card = ( {category, myFunc} )  => {

    return (
        <div className="Card">
            <button onClick={() => 
            myFunc(category.id)
             }>
            
            {category.id}
          
            <p>{category.heading}</p>
            <p>{category.name}</p>
        
            </button> 

        </div>
    )
}


export default Card