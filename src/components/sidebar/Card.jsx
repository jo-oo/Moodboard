import "./card.scss";
import { useState } from "react";


const Card = ( {category, myFunc} )  => {
    const [selectedItem, setSelectedItem] = useState();

    console.log("Caqtegory" +category.id)

    //The value the user clicked is now stored in selsectedItem. It is the category id.

    return (
        <div className="Card">
            <button onClick={() => 
            myFunc(category.id)
             }>
            {/* <button onClick={() => setSelectedItem(category.id)}
          >*/}
            
            {category.id}
          
            <p>{category.heading}</p>
            <p>{category.name}</p>
        
            </button> 

        </div>
    )
}


export default Card