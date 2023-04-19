
import Button from "../user/Button"
import { doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { db} from '../../firebase/config'
import { useAuthContext } from '../../contexts/AuthContext'

//Get categories
import useViewCategories from "../../hooks/useViewCategories";

const UpdateImageCategoryForm = ( {  selectedImageId, showUpdateImageCategoryForm, setShowUpdateImageCategoryForm, handleClickClose } ) => {

    //Get the current category
    const { category  } = useAuthContext()

    //states for selected category
    const [selectedCategory, setSelectedCategory] = useState(category);

    //fetching the categories of that user
    const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })
    
    //updates document in collection "images"
    const updateCategory = async () => {
        console.log('selected Category from dropdown', selectedCategory);
        await updateDoc(doc(db, 'images', selectedImageId), { 
            category: selectedCategory 
        })
   
        console.log("Image updated!")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()      
        updateCategory()
        console.log("Trigga mig")
        setShowUpdateImageCategoryForm(!showUpdateImageCategoryForm)
        handleClickClose()
    }
  
    return (
        <div>
            <div className="nameFormBox w-full px-2 py-2 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-md 
            md:absolute md:bottom-80 md:left-[30%]">

                    <div className="InfoText flex flex-col items-center justify-center mt-1 mb-1">
                        <p className='text-base'>Please choose category</p>
                    </div> 

                    {/* UPDATE FORM */}
                    <form onSubmit={handleSubmit}>
                        {/* Dropdown */}
                        <div className="grid gap-3 text-center"> 
                            <select 
                                value={selectedCategory} 
                                onChange={e => setSelectedCategory(e.target.value)}
                                >
                                {categoriesQuery.data && categoriesQuery.data.map((category, i) => {
                                    return (
                                        <>
                                             <option value={category.name}>{category.name}</option>
                                        </>    
                                    )
                                })}
                            </select>
                        </div>

                        <div className="flex items-center justify-end mt-8 mb-2">
                                <button type="submit" onClick= {handleSubmit}>SEND</button>
                                {/* <Button type="reset" value={`RESET`}/> */}
                        </div>
                    
                    </form>
                    
                </div>
            </div> 


    )
}

export default UpdateImageCategoryForm