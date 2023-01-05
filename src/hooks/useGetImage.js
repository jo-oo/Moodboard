import useStreamDocument from "./useStreamDocument"

const useGetImage = (id) => {
	return useStreamDocument('images', id)
}

export default useGetImage