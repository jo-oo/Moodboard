import "./cards.scss";
import Card from "./Card";
import { HiOutlinePlus } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';

const Cards = ({ categoriesQuery, myFunc }) => {

    //const list = categoryList;
    
    if (categoriesQuery.isError) {
        console.log("Error query", categoriesQuery.error.message)  
    }

    console.log("Category is this id" + [categoriesQuery]);


    // const handleChildFunc = (id) => {
   
    //     console.log("id", id)
    // }

    return ( 
        <div className="CardsBox"> 
            <div className="Cards">
                {/* <HiOutlinePlus size={40}/> */}
                <FiPlus size={45}/>
            </div>
            {categoriesQuery.data && categoriesQuery.data.map((category, i) => {
                return (
                    <div key={i} className="Cards">
                        {/* send rendering of each category to a Card component. Send category data there */}
                        <Card category={category} nr={i} myFunc={myFunc}/>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;