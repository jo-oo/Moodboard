import "./cards.scss";
import Card from "./Card";
import { FiPlus } from 'react-icons/fi';


const Cards = ({ categoriesQuery , setSelectedCategory}) => {
    
    if (categoriesQuery.isError) {
        console.log("Error query", categoriesQuery.error.message)  
    }
  


    return ( 
        <div className="CardsBox"> 
            <div className="Cards">
                <FiPlus size={45}/>
            </div>
            {categoriesQuery.data && categoriesQuery.data.map((category, i) => {
                return (
                    <div key={i} className="Cards">
                        {/* send rendering of each category to a Card component. Send category data there */}
                        <Card category={category} nr={i} setSelectedCategory={setSelectedCategory}/>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;