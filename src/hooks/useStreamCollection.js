/*Streams for updates in real time*/
import { useEffect, useState } from 'react'
import {
	collection,
	onSnapshot,
    query
} from 'firebase/firestore'
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
			// got me a new snapshot
			const docs = snapshot.docs.map(doc => {
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
