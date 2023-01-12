import "./moodboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Notes from "../../components/notes/Notes";
import { FiPlus } from 'react-icons/fi';
import useGetImages from "../../hooks/useGetImages";
import UploadImageForm from "../../components/images/UploadImageForm";

const Moodboard = () => {
    const { data: images, loading } = useGetImages()

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

                        {/*WHEN USING GetImages() which uses useStreamCollection*/}
                        {loading && (<p>Loading..</p>) }
                        <div>
                            {!loading && 
                            images.map((image, index) => (
                                <div key={index}>
                                    <p>{image.name} "type:" {image.type} "path:" {image.path} </p> 
                                </div>
                            ))}
                        </div>

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