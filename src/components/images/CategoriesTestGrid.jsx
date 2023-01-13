const CategoriesTestGrid = ({ categoriesQuery }) => {

    if (categoriesQuery.isError) {
        console.log("Error query", categoriesQuery.error.message)
        
    }

	return (
		<div>
			{categoriesQuery.data && categoriesQuery.data.map(category => (
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
