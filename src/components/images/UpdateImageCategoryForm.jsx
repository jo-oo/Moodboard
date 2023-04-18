
import Button from "../user/Button"
import { doc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useRef, useState, useEffect } from 'react'
import { db} from '../../firebase/config'
import useGetImage  from '../../hooks/useGetImage'

//Get categories
import useViewCategories from "../../hooks/useViewCategories";

const UpdateImageCategoryForm = ( { onImgCatUpdated, selectedImageUrl, selectedImageId, setShowUpdateImageCategoryForm } ) => {
    const [selectedCategory, setSelectedCategory] = useState('');


            //fetching the categories of that user
            const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })
            // console.log("CAT ", categoriesQuery.data)

      //Get me the image! from useGetImage-hook 
      //const {getSnapShotData} = useGetImage(selectedImageId)
      //const {data} = useGetImage({ fetchOnlyCurrentUser: true })
        console.log("SelectedImage id " + selectedImageId)
    
    
    //updates document in collection "images"
    const updateCategory = async () => {
        console.log('selected Category from dropdown', selectedCategory);
        await updateDoc(doc(db, 'images', selectedImageId), { 
            //contains these values:
        // category:  inputRef.toLowerCase(), 
            category: selectedCategory 
        })
   
        toast.success("Image updated!")
    }
       // onImgCatUpdated()
                    
                            //onImgCatUpdated()//om vi skulle redigera ett formulär igen vill vi att den nya infon visas
                            //resets form
                            //reset()
                            //sends Admin back to Modal View when succesfullt updating
                            //setShowUpdateImageCategoryForm(false)    
       


        const handleSubmit = async (e) => {
            e.preventDefault()      
            updateCategory()
            console.log("Trigga mig")
        }
  
	

    return (
        <div>
            <div className="nameFormBox w-full px-2 py-2 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-md">

                    <div className="InfoText flex flex-col items-center justify-center mt-1 mb-1">
                        <p className='text-base'>Please choose category</p>
                    </div> 

                    {/* {error && (
                        //send error to Alert component
                        <Alert error={error} />
                    )} */}


                    {/* UPDATE FORM */}
                    <form handleSubmit={handleSubmit}>
                    
                        <div className="mt-1">
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Category
                            </label>
                                <div className="flex flex-col items-start">
                                    {/* <input
                                        type="text"
                                        ref={inputRef} 
                                        required= "A category must be submitted"
                                        name="category"
                                        
                                        //defaultValue={selectedImageId.category}
                                        className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                        border-2 
                                        leading-tight focus:outline-none focus:shadow-outline
                                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />*/}
                                </div> 
                        </div>

                        {/* Dropdown */}
                        <div className="grid gap-3 text-center"> 
                            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                                {categoriesQuery.data && categoriesQuery.data.map((category, i) => {
                                    console.log("Return cat" , category)
                                    return (
                                        
                                            <>
                                            <option value={category.name}>{category.name}</option>
                            
                                            </>    
                                    )
                                })}
                            </select>
                        </div>


                        <div className="flex items-center justify-end mt-8 mb-2">
                          {/* CURRENTLY delets image from category but does not add it to the other one */}
                                <button onClick= {updateCategory}>UPDATE ME</button>
                                <button type="submit">TEST</button>
                                <Button type="submit" value={`SEND`}/>
                                <Button type="reset" value={`RESET`}/>
                        </div>
                    
                    </form>
                    
                </div>
            </div> 


    )
}

export default UpdateImageCategoryForm