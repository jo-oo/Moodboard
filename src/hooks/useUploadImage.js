import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import { useAuthContext } from '../contexts/AuthContext'
import { db, storage } from '../firebase/config'

const useUploadImage = () => {
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(null)
	const [isSuccess, setIsSuccess] = useState(null)
	const [isUploading, setIsUploading] = useState(null)
	const [progress, setProgress] = useState(null)

	const { currentUser } = useAuthContext()

	const upload = async (image) => {
		// reset internal state
		setError(null)
		setIsError(null)
		setIsSuccess(null)
		setIsUploading(null)

		try {

			// generate a uuid for the file
			const uuid = uuidv4() // 1983793b7d-3hvvivd-ebfjed-3r34r490d

			// find file extension
			const ext = image.name.substring( image.name.lastIndexOf('.') + 1 ) // png

			// create filename to save image as
			const storageFilename = `${uuid}.${ext}` // 1983793b7d-3hvvivd-ebfjed-3r34r490d.png

			// construct reference to storage
			const storageRef = ref(storage, `images/${storageFilename}`)

			// start upload of image
			const uploadTask = uploadBytesResumable(storageRef, image)

			// attach upload observer
			uploadTask.on('state_changed', (uploadTaskSnapshot) => {
				// update progress
				setProgress(
					Math.round(
						(uploadTaskSnapshot.bytesTransferred / uploadTaskSnapshot.totalBytes) * 1000
					) / 10
				)
			})

			// wait for upload to be complete
			await uploadTask.then()

			// get download url to uploaded image
			const url = await getDownloadURL(storageRef)

			// create reference to db-collection 'images'
			const collectionRef = collection(db, 'images')

			// create document in db for the uploaded image
			await addDoc(collectionRef, {
				created: serverTimestamp(),
				name: image.name,			// lily.gif
				path: storageRef.fullPath,	// images/190873977364-lily.gif
				type: image.type,
				size: image.size,
				user: currentUser.uid,
				url,
			})

	
			setProgress(null)
			setIsSuccess(true)

		} catch (e) {
			console.log("Error!", e)

			setError(e)
			setIsError(true)

		} finally {
			setIsUploading(false)

		}
	}

	return {
		error,
		isError,
		isSuccess,
		isUploading,
		progress,
		upload,
	}
}

 export default useUploadImage
