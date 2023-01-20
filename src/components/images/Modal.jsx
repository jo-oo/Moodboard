import "./modal.scss";
import { useState } from "react";

const Modal = ( { selectedImage, setSelectedImage } ) => {
	
    //if we click somewhere outside the image (outside the div) then setImage is set to null so it won´t show no more
    const handleClickClose = (e) => {
        setSelectedImage(null)
    }

    //prevent closing from happening on the inner div
    const handleButtonClick = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
        e.stopPropagation();

    }

   

    return (
 
            <div>
                <div className="backdrop" onClick={handleClickClose} >
                    <img  src={selectedImage} alt="zoomed in image" />
                    <button onClick={handleButtonClick}>
                    Change Category
                    </button> 
                </div>
            
            </div>
    
    )
}

export default Modal