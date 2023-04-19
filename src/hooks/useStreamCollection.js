/*Streams for updates in real time*/
import { useEffect, useState } from 'react'
import {
	collection,
	onSnapshot,
    query
} from 'firebase/firestore'
//db instance from firebase config file:
import { db } from '../firebase/config'

const useStreamCollection = (col, ...queryConstraints) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// get reference to collection
        const collectionRef = collection(db, col)
		const queryRef = query(collectionRef, ...queryConstraints)


		// subscribe to changes in collection
		const unsubscribe = onSnapshot(queryRef, (snapshot) => {
			// get a new snapshot
			const docs = snapshot.docs.map(doc => {
				//return new object with: "id", and spread the data fields of the document, meaning the data of the dpc will become attributes on this object
				return {
					id: doc.id,
					...doc.data(),
				}
			})

			setData(docs)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	return {
		data,
		loading,
	}
}

export default useStreamCollection
