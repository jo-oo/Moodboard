import "./modal.scss";

const Modal = ( { selectedImage, setSelectedImage } ) => {

    console.log("selectedImage" + selectedImage)
    const handleClick = (e) => {
        setSelectedImage(null)
    }
    //if we click somewhere outside the image (outside the div) then setImage is set to null so it won´t show no more

    return (
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImage} alt="zoomed in image" />
        </div>
    )
}

export default Modal