const CategoryList = () => {

    const categoryList = [
        {
            heading: "Category 1",
            //If using data later:
            //dataHeading: categoryOneHeading,
        },
        {
            heading: "Category 2",
        },
        {
            heading: "Category 3",
        },
        {
            heading: "Category 4",
        
        },
        {
            heading: "Category 5",
        },
    ];
    
    return (
        <div>
            <h2>CategoryList</h2>
            {categoryList.map((category, i) => {
                return (
                    <div key={i}>
                        <p>{category.heading}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default CategoryList