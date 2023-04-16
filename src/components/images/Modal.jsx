import "./modal.scss";
import { useState } from "react";
import UpdateImageCategoryForm from "./UpdateImageCategoryForm";

const Modal = ( { selectedImageUrl, setSelectedImageUrl, selectedImageId, setSelectedImageId } ) => {
    const [showUpdateImageCategoryForm, setShowUpdateImageCategoryForm] = useState(false)
    const [isActive, setActive] = useState("false");
  
    // const closeForm = () => {
    //     setShowUpdateImageCategoryForm(false)
    // }
    
    //if we click somewhere outside the image (outside the div) then setImage is set to null so it won´t show no more and we can get a new image to look at
    const handleClickClose = (e) => {
        setSelectedImageUrl(null)
        setSelectedImageId(null)
    }

    //prevent closing from happening on the inner div
    const handleButtonClick = (e) => {
        e.preventDefault();
        {e.stopPropagation(),
            console.log("HELP")
        setShowUpdateImageCategoryForm(!showUpdateImageCategoryForm)
        setActive(!isActive);
        }
    }

       //prevent closing from happening on the inner div
       const handleForm = (e) => {
        e.preventDefault();
        {e.stopPropagation(),
            console.log("HELP")
        }
    }


    return (
 
            <div>
                {/* <div className="backdrop" onClick={handleClickClose} > */}
                <div className={isActive ? "backdrop" : "backdropActive"} onClick={handleClickClose} >

                    <img  src={selectedImageUrl} alt="zoomed in image" />
                    <div className="backdropContent">

                        <button onClick={handleButtonClick}
                            >
                            {showUpdateImageCategoryForm ? 'Cancel Edit' : 'Change category'}
                        </button> 
                       
                        {showUpdateImageCategoryForm && 
                            <>
                                <div className="form" onClick={handleForm}>
                                    <UpdateImageCategoryForm selectedImageUrl={selectedImageUrl} selectedImageId={selectedImageId} setShowUpdateImageCategoryForm={setShowUpdateImageCategoryForm}/>
                                </div>
                            </>
                        }
                       
                    </div>
                </div>
            
            </div>
    
    )
}

export default Modal
