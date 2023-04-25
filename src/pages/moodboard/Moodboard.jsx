import { useState } from "react";
import { FiPlus } from 'react-icons/fi';

import "./moodboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Notes from "../../components/notes/Notes";
import UploadImageForm from "../../components/images/UploadImageForm";
import MasonryGrid from "../../components/images/MasonryGrid";
import Modal from "../../components/images/Modal";
import useViewCategoryImagesByUser from "../../hooks/useViewCategoryImagesByUser";
import { useAuthContext } from '../../contexts/AuthContext'
import useViewCategories from "../../hooks/useViewCategories";

const Moodboard = () => {
    const [selectedImageUrl, setSelectedImageUrl] = useState(null)
    const [selectedImageId, setSelectedImageId] = useState(null)
    const [showUploadForm, setShowUploadForm] = useState(null)

    // Get users images in category
    const imagesByCategoryQuery = useViewCategoryImagesByUser({ fetchOnlyCurrentUser: true})

     console.log("MOOD BOARD ImagesQuery", imagesByCategoryQuery)
 
    //fetching the categories of that user
    const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })
    console.log("Moodboard categoriesQuery: ", categoriesQuery)

    if (categoriesQuery.isError) {
        console.log("Error query", categoriesQuery.error.message) 
    }
    if (imagesByCategoryQuery.isError) {
        console.log("Error query", imagesByCategoryQuery.error.message)  
    }
    
    //Get the current category
    const { category  } = useAuthContext()
 
    let categoryExists = categoriesQuery.data && categoriesQuery.data.filter(c => c.name == category).length >= 1;
 
    console.log("is a match???", categoryExists)


    const openUploadForm = () => {
        setShowUploadForm(true);
    };

    return (
        <>
            {/* Container */}
            <div className="grid min-w-full min-h-full">
                {/* Moodboard */}
                <div className="Moodboard">

                    <Sidebar
                        categoriesQuery={categoriesQuery}
                    />

                    <div className="MainMoodboard">
                        <div className="Middle">

                            {showUploadForm  &&
                                <UploadImageForm 
                                    showUploadForm={showUploadForm}
                                    setShowUploadForm={setShowUploadForm}
                                />
                            }

                            { imagesByCategoryQuery.isLoading && (
                                <p>loading</p>
                            )}
                        
    
                            {  !imagesByCategoryQuery.isLoading && !categoryExists ? (
                                    <div>
                                        <p>Det finns inte någon sådan kategori</p> 
                                    </div>               
                                ) : !showUploadForm && imagesByCategoryQuery.data && imagesByCategoryQuery.data.length == 0 ? (
                                    <>
                                        <p>Den här kategorin har inga bilder. Lägg till bilder eller radera kategorin</p>
                                    </>
                                ) : !showUploadForm && imagesByCategoryQuery.data && (
                                    <MasonryGrid 
                                    setSelectedImageUrl={setSelectedImageUrl} setSelectedImageId={setSelectedImageId}
                                    data={imagesByCategoryQuery.data}
                                    />
                            
                                )
                            }  

                            {/* renders Modal only of selectedImage is true. So opnly when a user has clicked an image */}
                            {selectedImageUrl && 
                                <Modal 
                                    selectedImageUrl={selectedImageUrl}  setSelectedImageUrl={setSelectedImageUrl} selectedImageId={selectedImageId} setSelectedImageId={setSelectedImageId}
                                />
                            }
                        </div>
                        <div className="Right">
                            <div>
                                <FiPlus 
                                    size={45}
                                    onClick={openUploadForm}
                                />
                            </div>  
                        </div>
                    </div> 

                    <Notes/>

                </div>
            </div>
        </>
    )
}

export default Moodboard