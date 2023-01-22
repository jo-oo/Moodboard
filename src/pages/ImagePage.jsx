import { useParams } from 'react-router-dom'
import useGetImage from '../hooks/useGetImage'

const ImagePage = () => {
	const { id } = useParams()
	const { data: image, loading } = useGetImage(id)//skickar in id som jag får från useParams
	//DETTA BETYDER ATT DU MÅSTE HA EN /"din-bilds-id" Det är den som useParams hämtar från från routingen. Annars kommer det inte funka

	return (
		<div>
			{loading && <p>Loading image...</p>}

			{!loading && !image && <p>No Image found here anymore</p>}

			{!loading && image && (
				<>
					<div>
						<h1>{image.name} {image.type} {image.age}</h1>
					</div>

				</>
			)}
		</div>
	)
}

export default ImagePage
