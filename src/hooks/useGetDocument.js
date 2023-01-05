import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
//db instance from firebase config file:
import { db } from '../firebase/config'

const useGetDocument = (collection, id) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //will run once when it loads and never again. Use snapshot to subscride to updates in the db
            const getSnapshot = async () => {
			setLoading(true)
			// get reference to document from unspecified collection
			const ref = doc(db, collection, id)
			const snapshot = await getDoc(ref)

            if (!snapshot.exists()) {
                setData(false)
                setLoading(false)
                return
            }
    
            setData(snapshot.data())
            setLoading(false)

            console.log("got this document data from the collection 'images' ", data)
			console.log("here is the snapshot of the document from collection 'images' ", snapshot)
		}
		getSnapshot()
	}, [])

    return {
        data,
        loading
	}
}

export default useGetDocument