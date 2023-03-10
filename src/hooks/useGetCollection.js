import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
//db instance from firebase config file:
import { db } from '../firebase/config'

const useGetCollection = (col) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

	//will run once when it loads and never again. Use snapshot to subscride to updates in the db
    const getSnapshotData = async () => {
		setLoading(true)
		// get reference to unspecified collection 
		const ref = collection(db, col)
		const snapshot = await getDocs(ref)
	
		//a snapshot.docs is everything visible in the docs
		const docsData = snapshot.docs.map(doc => {
			//return new object with: "id", and spread the data fields of the document, meaning the data of the dpc will become attributes on this object
			return {
				id: doc.id,
				...doc.data(),
			}
		}) 
	
			setData(docsData)		
			setLoading(false)
			
			console.log("got this data from the collection 'images' ", data)
			console.log("here is the snapshot of the collection 'images' ", snapshot)
		}

    useEffect(() => {

		getSnapshotData()
	}, [])

    return {
        data,
        loading,
		getSnapshotData
	}
}

export default useGetCollection