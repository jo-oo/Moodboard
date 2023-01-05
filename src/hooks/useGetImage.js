import useGetDocument from "./useGetDocument"

const useGetImage = (id) => {
	return useGetDocument('images', id)
}

export default useGetImage