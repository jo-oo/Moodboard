import { useState } from "react";
import { FiPlus } from 'react-icons/fi';

import "./moodboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Notes from "../../components/notes/Notes";
import UploadImageForm from "../../components/images/UploadImageForm";
import MasonryGrid from "../../components/images/MasonryGrid";
import Modal from "../../components/images/Modal";

const Moodboard = () => {
    const [selectedImageUrl, setSelectedImageUrl] = useState(null)
    const [selectedImageId, setSelectedImageId] = useState(null)
    const [showUploadForm, setShowUploadForm] = useState(null)

    const openUploadForm= () => {
        setShowUploadForm(true);
      };


    return (
        <>
            {/* Container */}
            <div className="grid min-w-full min-h-full">
                {/* Moodboard */}
                <div className="Moodboard">

                    <Sidebar/>

                    <div className="MainMoodboard">
                        <div className="Middle">

                            {showUploadForm  &&
                                <UploadImageForm 
                                    showUploadForm={showUploadForm}
                                    setShowUploadForm={setShowUploadForm}
                                />
                            }
                        
                            { !showUploadForm &&
                                <MasonryGrid setSelectedImageUrl={setSelectedImageUrl} setSelectedImageId={setSelectedImageId}/>
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