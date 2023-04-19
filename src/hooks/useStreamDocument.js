/*Streams for updates in real time*/
import { useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
//db instance from firebase config file:
import { db } from '../firebase/config'

const useStreamDocument = (col, id) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// get reference to document (firestore db-instance, col=a path, and id)
		const documentRef = doc(db, col, id)

		// subscribe to changes on the document
		const unsubscribe = onSnapshot(documentRef, (snapshot) => {
            // got me a new snapshot
			setData({
				id: snapshot.id,
				...snapshot.data(),
			})
			setLoading(false)
		})

		return unsubscribe
	}, [])

	return {
		data,
		loading,
	}
}

export default useStreamDocument