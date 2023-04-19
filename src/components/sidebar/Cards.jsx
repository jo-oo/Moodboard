import Card from "./Card";
import { FiPlus } from 'react-icons/fi';


const Cards = ({ categoriesQuery }) => {
    
    if (categoriesQuery.isError) {
        console.log("Error query", categoriesQuery.error.message)  
    }

    return ( 
        <>
            {/* Cardsbox container div for all cards */}
            <div className="grid gap-3 text-center"> 
                {categoriesQuery.data && categoriesQuery.data.map((category, i) => {
                    return (
                        <Card category={category} key={i}/>      
                    )
                })}
            </div>
        </>
    );
};

export default Cards;