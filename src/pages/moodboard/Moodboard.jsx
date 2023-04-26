import { useState } from "react";
import { FiPlus } from 'react-icons/fi';
import { doc, collection, deleteDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from '../../firebase/config';

import "./moodboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Notes from "../../components/notes/Notes";
import UploadImageForm from "../../components/images/UploadImageForm";
import MasonryGrid from "../../components/images/MasonryGrid";
import Modal from "../../components/images/Modal";
import useViewCategoryImagesByUser from "../../hooks/useViewCategoryImagesByUser";
import { useAuthContext } from '../../contexts/AuthContext'
import useViewCategories from "../../hooks/useViewCategories";
import AddEmptyCategoryForm from "../../components/categories/addEmptyCategoryForm";

const Moodboard = () => {
    const [selectedImageUrl, setSelectedImageUrl] = useState(null)
    const [selectedImageId, setSelectedImageId] = useState(null)
    const [showUploadForm, setShowUploadForm] = useState(null)
    const [showAddCatForm, setShowAddCatForm] = useState(null)

    // Get users images in category
    const imagesByCategoryQuery = useViewCategoryImagesByUser({ fetchOnlyCurrentUser: true})
 
    //fetching the categories of that user
    const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })
    console.log("Moodboard categoriesQuery: ", categoriesQuery)

    if (categoriesQuery.isError) {
        console.log("Error query for categories", categoriesQuery.error.message) 
    }
    if (imagesByCategoryQuery.isError) {
        console.log("Error query for images", imagesByCategoryQuery.error.message)  
    }
   
    //Get the current category
    const { category, currentUser  } = useAuthContext()
    //find current category amongst users categories
    let myCategory = categoriesQuery.data && categoriesQuery.data.filter(c => c.name == category)[0];
    //check if current category amongst users categories exists
    let categoryExists = categoriesQuery.data && categoriesQuery.data.filter(c => c.name == category).length >= 1;

    const openUploadForm = () => {
        setShowUploadForm(true);
    };

    const openAddCatForm = () => {
        setShowAddCatForm(true);
    };

    //updates document in collection "categories"
    const deleteCategory = async () => {
        console.log("knapp!")
        await deleteDoc(doc(db, 'categories', myCategory.id), { 
        })
        console.log("Image updated!")
    }

    const handleDeleteCat= async (e) => {
        e.preventDefault()      
        deleteCategory()
    }

   
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

                            {categoriesQuery.isError && (
                                <p>An error occurred rendering categories: {categoriesQuery.error.message}</p>
                            )}

                            {imagesByCategoryQuery.isError && (
                                <p>An error occurred rendering images: {imagesByCategoryQuery.error.message}</p>
                            )}

                            { imagesByCategoryQuery.isLoading && (
                                <p>loading</p>
                            )}
                        
                            {  !imagesByCategoryQuery.isLoading && !categoryExists ? (
                                    <div>
                                        <p>Det finns inte någon sådan kategori</p> 
                                    </div>               
                                ) : !showUploadForm && imagesByCategoryQuery.data && imagesByCategoryQuery.data.length == 0 ? (
                                    <>
                                        <p>Den här kategorin har inga bilder. 
                                            du kan radera kategorin eller lägga till en tom kategori. </p>
                                      
                                            <p>Ladda annars upp bilder och välj en ny eller befintlig kategori direkt genom att trycka på + tecknet till höger</p>

                                        <div>
                                            <button type="submit" onClick= {handleDeleteCat}>RADERA KATEGORI</button>
                                            {/* <button type="submit" onClick= {handleSubmitCat}>LÄGG TILL KATEGORI</button> */}
                                            <button type="submit" onClick= {openAddCatForm}>LÄGG TILL KATEGORI</button>

                                        </div>

                                    {showAddCatForm &&
                                       < AddEmptyCategoryForm 
                                            showAddCatForm={showAddCatForm}
                                            setShowAddCatForm={setShowAddCatForm}
                                       />
                                    }
                           
                                    </>
                                ) : !showUploadForm && imagesByCategoryQuery.data && (
                             <>
                                    <MasonryGrid 
                                    setSelectedImageUrl={setSelectedImageUrl} setSelectedImageId={setSelectedImageId}
                                    data={imagesByCategoryQuery.data}
                                    />
                                    </>
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