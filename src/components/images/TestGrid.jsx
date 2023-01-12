const TestGrid = ({ query }) => {

    if (query.isError) {
        console.log("Error query", query.error.message)
    }


	return (
		<div>
			{query.data && query.data.map(image => (
				<div key={image.id} className="d-flex mb-4">
                    <img src={image.url} />
					<span className="image-filename" title={image.name}>
						{image.name}
					</span>
                    <div>
					{Math.round(image.size / 1024)} kB
				</div>
				</div>
			))}
		</div>
	)
}

export default TestGrid
