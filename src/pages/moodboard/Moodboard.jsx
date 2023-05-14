import { useState } from "react";
import { FiPlus } from 'react-icons/fi';
import { doc, collection, deleteDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { db, storage } from '../../firebase/config';
import { useLocation } from 'react-router-dom';

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
    //trying to check if location is home / only to be able to render a differnet message on screen than "det finns inte någon sådan kategori"
    // let location = useLocation();
    // let locationHome = location.pathname === '/'

    // console.log("location ", location.pathname)

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

                            <div className="flex flex-col items-center sm:justify-center pl-4 xs:pl-8 xs:pr-8 mt-10">
                                {categoriesQuery.isError && (
                                    <p>An error occurred rendering categories: {categoriesQuery.error.message}</p>
                                )}

                                {imagesByCategoryQuery.isError && (
                                    <p>An error occurred rendering images: {imagesByCategoryQuery.error.message}</p>
                                )}

                                { imagesByCategoryQuery.isLoading && (
                                    <p>loading...</p>
                                )}

                                <div className="m4">

                                    { !imagesByCategoryQuery.isLoading && !categoryExists && !showUploadForm ? (
                                        <div className="m-5">
                                            <p>Här finns det ingen kategori. Gå till dina kategorier i vänstermenyn eller lägg till en bild i en kategori via att klicka på + till höger.</p> 
                                        </div>               
                                    ) : !showUploadForm && imagesByCategoryQuery.data && imagesByCategoryQuery.data.length == 0 ? (
                                        <>
                                            <p className="mb-2">Den här kategorin har inga bilder. 
                                                Ladda upp bilder till kategorin genom att trycka på + tecknet till höger</p>
                                                <p>Du kan annars radera kategorin eller lägga till ny kategori</p>
                                            <div>
                                                <button className="mt-5" type="submit" onClick= {handleDeleteCat}>RADERA KATEGORI</button>
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
                                </div>

                            </div>

                            {/* renders Modal only of selectedImage is true. So opnly when a user has clicked an image */}
                            {selectedImageUrl && 
                                <Modal 
                                    selectedImageUrl={selectedImageUrl}  setSelectedImageUrl={setSelectedImageUrl} selectedImageId={selectedImageId} setSelectedImageId={setSelectedImageId}
                                />
                            }
                        </div>
                        <div className="Right mt-4">
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