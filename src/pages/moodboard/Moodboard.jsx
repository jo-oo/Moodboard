import { useState, useEffect, useCallback } from "react";
import "./moodboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Notes from "../../components/notes/Notes";
import { FiPlus } from 'react-icons/fi';
//import useGetImages from "../../hooks/useGetImages";
import UploadImageForm from "../../components/images/UploadImageForm";
//import useViewCategories from "../../hooks/useViewCategories";
import TestGrid from "../../components/images/TestGrid";
//import CategoriesTestGrid from "../../components/images/CategoriesTestGrid";
import useViewCategoryImagesByUser from "../../hooks/useViewCategoryImagesByUser";



const Moodboard = () => {
    //Get me the images! from useGetImages-hook 
    //const { data: images, loading } = useGetImages()
    //Get me the images! from useViewImages-hook 
    //const imagesQuery = useViewImages()
                    // const imagesByCategoryQuery = useViewCategoryImagesByUser({ fetchOnlyCurrentUser: true, categoryId: 'tqmuluFvtjESTW88mG3J'})
    //const imagesQuery = useViewUsersImages({ fetchOnlyCurrentUser: true })
        //const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })
   // const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true , categoryId : 'tqmuluFvtjESTW88mG3J'})
    //console.log("QCATEGORY WUERY categpry" , categoriesQuery.data);



    const [selectedCategory, setSelectedCategory] = useState('')
    
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	// const getData = async () => {

	// 	setLoading(true)

    //     const handleChildFunc = (id) => {
    //         setSelectedCategory(id)
    //         console.log("ID " + id)
    //     }
	
    //     const imagesByCategoryQuery = useViewCategoryImagesByUser({ fetchOnlyCurrentUser: true, categoryId: 'tqmuluFvtjESTW88mG3J'})

	// 	if (id !== categoryId) {
	// 		setData(false)
	// 		setLoading(false)
	// 		return
	// 	}

	// 	setData(imagesByCategoryQuery.data())
	// 	setLoading(false)
	// }

	// useEffect(() => {
	// 	getData()
	// }, [])



    //callback function for the SELECT BUTTON CATEGORY STATE IN CARD.jsx
    // //The value the user clicked is now stored in selsectedItem. It is the category id.
    //  const handleChildFunc = async (id) => {
    //      //console.log("id", id)
    //      setLoading(true)
    //         setSelectedCategory(id)
    //      return selectedCategory
    //      setLoading(false)
    //  }

    //  console.log("ID ", selectedCategory)

    const handleChildFunc = useCallback(( id) => {
 
         return setSelectedCategory(id)
       
     }, [])
     console.log("ID first time ", selectedCategory)
     console.log("Does it re-render ID? No it only renders twice (I guess due to React-StrictModes default mode) ", selectedCategory)



     //UNNECCESSARY??
     useEffect(() => {
        // this will be triggered only when "handleChildFunc" value actually changes
        handleChildFunc();
      }, [handleChildFunc]);



	// const handleChildFunc = async (id) => {
    //     return setSelectedCategory(id)
	// }
    // console.log("IIIDD"+selectedCategory)
    // const handleChildFunc = (id) => {
    //     setSelectedCategory(id)
    //     console.log("ID   ", selectedCategory)
    // }

    // const handleChildFunc = useCallback((id) => {
	// 	if (!id) {
	// 		return
	// 	}

	// 	console.log("Mmmm, yummy", id)
    //     setSelectedCategory(id)
	// 	// trigger upload of the first meme
	// 	console.log("IIIIID" + id)
	// }, [])

    // console.log("ID:et är   ", selectedCategory)





    return (
        <div className="Container">

            <div className="Moodboard">
                <Sidebar myFunc={handleChildFunc}/>
                <div className="MainMoodboard">
                    <div className="Middle">

                        {/*renders directly*/}
                        <h1>{selectedCategory}</h1>

                        {/*Tailwind test*/}
                        <div className="bg-blue-300">
                            TAILWIND
                        </div>

                        <h2>Here is getImages-hook</h2>
                        {/* WHEN USING GetImages() which uses useStreamCollection */}
                        {/*{loading && (<p>Loading..</p>) }
                         <div>
                            {!loading && 
                            images.map((image, index) => (
                                <div key={index}>
                                    <p>{image.name} "type:" {image.type} "path:" {image.path} </p> 
                                    <img src={image.url} />
                                </div>
                            ))}
                        </div>  */}
                        <h2>Here is ImagesQuery-hook</h2>

                        {/* <TestGrid  imagesByCategoryQuery={imagesByCategoryQuery}/> */}
                        {/* <TestGrid  query={imagesQuery}/> */}

                        <h2>Here is CATEGORIESQuery-hook</h2>
                             {/* <CategoriesTestGrid categoriesuery={categoriesQuery}/> */}
                        <TestGrid selectedCategory={selectedCategory}/>
                        <UploadImageForm />
                        
                    </div>
                    <div className="Right">
                        <div>
                        <FiPlus size={45}/>
                        </div>  
                    </div>
                </div>
                <Notes/>
            </div>

        </div>
    )
}

export default Moodboard