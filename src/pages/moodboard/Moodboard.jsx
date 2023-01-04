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
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //will run once when it loads and never again. Use snapshot to subscride to updates in the db
            const getSnapshot = async () => {
			setLoading(true)
			// get reference to collection 'images'
			const ref = collection(db, 'images')
			const snapshot = await getDocs(ref)

            //a snapshot.docs is everything visible in the docs
            const data = snapshot.docs.map(doc => {
                //return new object with: "id", and spread the data fields of the document, meaning the data of the dpc will become attributes on this object
				return {
					id: doc.id,
					...doc.data(),
				}
			}) 

			setData(data)
            setLoading(false)
            console.log("got this data from the collection 'images' ", data)
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
                        {loading && (<p>Loading..</p>) }
                        <div>
                            {!loading && data.map((image, index) => (
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