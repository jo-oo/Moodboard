import "./modal.scss";
import { useState } from "react";
import UpdateImageCategoryForm from "./UpdateImageCategoryForm";

const Modal = ( { selectedImage, setSelectedImage } ) => {
    const [showUpdateImageCategoryForm, setShowUpdateImageCategoryForm] = useState(false)
  
    const onImgCatUpdated = () => {
		setShowUpdateImageCategoryForm(false)
	}
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
                    <div className="backdropContent">
                        <button onClick={(e) => 
                            {e.stopPropagation(),
                            setShowUpdateImageCategoryForm(!showUpdateImageCategoryForm)}}>
							{showUpdateImageCategoryForm ? 'Cancel Edit' : 'Change category'}
                        </button> 
                        {showUpdateImageCategoryForm && <>
						<hr className="my-4" />

						<UpdateImageCategoryForm onImgCatUpdated={onImgCatUpdated}/>
					</>}
                    </div>
                </div>
            
            </div>
    
    )
}

export default Modal