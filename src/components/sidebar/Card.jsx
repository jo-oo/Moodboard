import "./card.scss";
import { useState } from "react";


const Card = ( {category} ) => {
    const [selectedItem, setSelectedItem] = useState();

    console.log("Caqtegory" +category.id)
    console.log("Selected item is " +selectedItem)
    //The value the user clicked is now stored in selsectedItem. It is the category id.

    return (
        <div className="Card">
            <button onClick={() => setSelectedItem(category.id)}
          >
            {category.id}
          
            <p>{category.heading}</p>
            <p>{category.name}</p>
        
            </button>
       

        </div>
    )
}


export default Card