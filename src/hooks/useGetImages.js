import { orderBy } from 'firebase/firestore'
import useStreamCollection from "./useStreamCollection"

const useGetImages = () => {
	return useStreamCollection('images', orderBy('name'))
}

export default useGetImages