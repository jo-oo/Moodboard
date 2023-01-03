import "./moodboard.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Notes from "../../components/notes/Notes";
import { FiPlus } from 'react-icons/fi';

import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
//db instance from firebase config file:
import { db } from '../../firebase/config'


const Moodboard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
		const getSnapshot = async () => {
			// get reference to collection 'images'
			const ref = collection(db, 'images')
			const snapshot = await getDocs(ref)

            const data = snapshot.docs.map(doc => {
				return {
					id: doc.id,
					...doc.data(),
				}
			})

			setData(data)

			console.log("here is the snapshot of the collection 'images' ", snapshot)
		}
		getSnapshot()
	}, [])

    return (
        <div className="Container">

            <div className="Moodboard">
                <Sidebar/>
                <div className="MainMoodboard">
                    <div className="Middle">
                        <div>
                            {data.map((image, index) => (
                                <div key={index}>
                                    <p>{image.name} "type:" {image.type} "path:" {image.path} </p>
                                    
                                </div>
                            ))}
                        </div>
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