import "./card.scss";
import { useAuthContext } from "../../contexts/AuthContext";

const Card = ( { category } )  => {

    const {setSearchParams } = useAuthContext()

    return (
        <div className="Card">
            <button onClick={() => 
            setSearchParams({category: category.id})
             }>
            
            {category.id}
          
            <p>{category.heading}</p>
            <p>{category.name}</p>
        
            </button> 

        </div>
    )
}


export default Card