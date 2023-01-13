const CategoriesTestGrid = ({ query }) => {

    if (query.isError) {
        console.log("Error query", query.error.message)
        
    }

	return (
		<div>
			{query.data && query.data.map(category => (
				<div key={category.id} className="d-flex mb-4">
					<span title={category.name}>
                        <p>{category.name}</p>
                        <p>Here is the desciption:</p>
						<p>{category.text}</p>
					</span>
                    <p>"User"{category.user}</p>
				</div>
			))}
		</div>
	)
}

export default CategoriesTestGrid
