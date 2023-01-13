import "./moodboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Notes from "../../components/notes/Notes";
import { FiPlus } from 'react-icons/fi';
//import useGetImages from "../../hooks/useGetImages";
import UploadImageForm from "../../components/images/UploadImageForm";
//import useViewImages from "../../hooks/useViewImages";
import useViewCategories from "../../hooks/useViewCategories";
//import TestGrid from "../../components/images/TestGrid";
import CategoriesTestGrid from "../../components/images/CategoriesTestGrid";

const Moodboard = () => {
    //Get me the images! from useGetImages-hook 
    //const { data: images, loading } = useGetImages()
    //Get me the images! from useViewImages-hook 
    //const imagesQuery = useViewImages()
    //const imagesQuery = useViewImages({ fetchOnlyCurrentUser: true })
    const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })
   // const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true , categoryId : 'tqmuluFvtjESTW88mG3J'})
   console.log("QCATEGORY WUERY categpry" , categoriesQuery.data);


    return (
        <div className="Container">

            <div className="Moodboard">
                <Sidebar/>
                <div className="MainMoodboard">
                    <div className="Middle">

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

                        {/* <TestGrid query={imagesQuery}/> */}

                        <h2>Here is CATEGORIESQuery-hook</h2>
                        <CategoriesTestGrid categoriesQuery={categoriesQuery}/>
                        
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