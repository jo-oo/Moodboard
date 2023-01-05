import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
//db instance from firebase config file:
import { db } from '../firebase/config'

const useGetDocument = (col, id) => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

    //Use snapshot to subscride to updates in the db
	const getSnapshotData = async () => {
		setLoading(true)
		// get reference to document in unspecified collection col
		const documentRef = doc(db, col, id)
		const snapshot = await getDoc(documentRef)

		if (!snapshot.exists()) {
			setData(false)
			setLoading(false)
			return
		}

		setData(snapshot.data())
		setLoading(false)
	}

	useEffect(() => {
		getSnapshotData()
	}, [])

	return {
		data,
		loading,
		getSnapshotData,
	}
}

export default useGetDocument