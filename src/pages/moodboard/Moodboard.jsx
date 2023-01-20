import { useState } from "react";
import "./moodboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Notes from "../../components/notes/Notes";
import { FiPlus } from 'react-icons/fi';
import UploadImageForm from "../../components/images/UploadImageForm";
import TestGrid from "../../components/images/TestGrid";
import MasonryGrid from "../../components/images/MasonryGrid";
import Modal from "../../components/images/Modal";



const Moodboard = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)




    //Get me the images! from useGetImages-hook 
    //const { data: images, loading } = useGetImages()
                    // const imagesByCategoryQuery = useViewCategoryImagesByUser({ fetchOnlyCurrentUser: true, categoryId: 'tqmuluFvtjESTW88mG3J'})
    //const imagesQuery = useViewUsersImages({ fetchOnlyCurrentUser: true })
        //const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })
   // const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true , categoryId : 'tqmuluFvtjESTW88mG3J'})


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


    return (
        <div className="Container">

            <div className="Moodboard">
                <Sidebar/>
                <div className="MainMoodboard">
                    <div className="Middle">

                        <MasonryGrid setSelectedImage={setSelectedImage}/>
                        {/* renders Modal only of selectedImage is true. So opnly when a user has clicked an image */}
                         {selectedImage && <Modal selectedImage={selectedImage}  setSelectedImage={setSelectedImage}/>}

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
                      
                        {/* <TestGrid/> */}
                       
                        
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