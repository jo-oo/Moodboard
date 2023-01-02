import "./cards.scss";
import Card from "./Card";
import { HiOutlinePlus } from 'react-icons/hi';
import { FiPlus } from 'react-icons/fi';
import { TiPlus } from 'react-icons/ti';

const Cards = ({ categoryList }) => {

    const list = categoryList;

    return ( 
        <div className="CardsBox"> 
            <div className="Cards">
                {/* <HiOutlinePlus size={40}/> */}
                <FiPlus size={45}/>
            </div>
            {list.map((category, i) => {
                return (
                    <div key={i} className="Cards">
                        {/* send rendering of each category to a Card component. Send category data there */}
                        <Card category={category} nr={i}/>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;