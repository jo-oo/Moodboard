
import Button from "../user/Button"
import { doc, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useRef, useState } from 'react'
import { db} from '../../firebase/config'
import useGetImage  from '../../hooks/useGetImage'

/**
 * 
 * This function is not at all finished. Right now, it updates the category field if the image only on the Button "UPDATE ME". But the handleSubmit-function is not working. 
 * 
 * TO DO
 * 

 *          Get image.category: 

 *          You will need to send {data} as an object through all the components where you now have taken out two values: selectedImageId, and selectedImageUrl. You will instead in Modal take out the parts from image data that you need to use there (map over it) and then in this component you will need to use the .catepory (YOU COULD MAYBE JUST CALL THE GETIMAGE-HOOK WITH THE ID THAT YOU ALREADY HAVE AND DONT DO ALL THIS STEPS)
 * 
 *  * Use GetCategories hook to do a similar check that you did in "Upload Image", where you check for if the category the user typed in already exists. 
 * If category does exist, AND if the category that the image already belongs to (getImage---image.catgeory) arrays length is more than [0]--> Update category field on image
 * If category does exist, AND if the category that the image already belongs to (getImage---image.catgeory) arrays length is = [0]--> Delete category in collection categories, AND Update category field on image 
 *  * If category does NOT exist, (either just abort: print  "catgeory not existing. choose another on"e ---OR --> user could be able to add category in in this stage..
 * 
 * 
 * CHECK CategoriesTestGrid from old bransch, on how to call on and render categories
*/


const UpdateImageCategoryForm = ( { onImgCatUpdated, selectedImageUrl, selectedImageId, setShowUpdateImageCategoryForm } ) => {

	const inputRef = useRef()

    
      //Get me the image! from useGetImage-hook 
      //const {getSnapShotData} = useGetImage(selectedImageId)
      //const {data} = useGetImage({ fetchOnlyCurrentUser: true })


    console.log("SelectedImage id " + selectedImageId)


    //updates document in collection "images"
    const updateCategory = async () => {
        await updateDoc(doc(db, 'images', selectedImageId), { 
            //contains these values:
        // category:  inputRef.toLowerCase(), 
            category: "updated category"     
        })
        console.log("update image ")
        toast.success("💪🏻 Todo updated!")
        onImgCatUpdated()
                            //toast.success("Imagr is updated!")
                            //onImgCatUpdated()//om vi skulle redigera ett formulär igen vill vi att den nya infon visas
                            //resets form
                            //reset()
                            //sends Admin back to Modal View when succesfullt updating
                            //setShowUpdateImageCategoryForm(false)    
        }


	const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('handleSubmit')
        

		updateCategory()
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

                    <form onSubmit={handleSubmit}>
                
                        <button onClick= {updateCategory}>UPDATE ME</button>
                        <div className="mt-1">
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Category
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    ref={inputRef} 
                                    required= "A category must be submitted"
                                    name="category"
                                    //defaultValue={selectedImageId.category}
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-8 mb-2">
                            <button type="submit">submit</button>
                                <Button type="submit" value={`SEND`}/>
                                <Button type="reset" value={`RESET`}/>
                        </div>
                    
                    </form>
                    
                </div>
            </div> 


    )
}

export default UpdateImageCategoryForm