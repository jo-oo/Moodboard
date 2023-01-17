import { useState, useEffect } from "react";
import useViewCategoryImagesByUser from "../../hooks/useViewCategoryImagesByUser";
//import useGetImagesByCategory from "../../hooks/useGetImagesByCategory";
import { useAuthContext } from "../../contexts/AuthContext"; //to recieve category

const TestGrid = ( ) => {



	//skickar in parametrarna fetchOnlyCurrentUser % categoryId TILL use-hooken som nett objekt
	//const { data } = useViewCategoryImagesByUser({ fetchOnlyCurrentUser: true, categoryId: category})


	const { data } = useViewCategoryImagesByUser({ fetchOnlyCurrentUser: true})
 	// if (imagesByCategoryQuery.isError) {
    //     console.log("Error query", imagesByCategoryQuery.error.message)
    //  }


	//  if (imagesByCategoryQuery.data) {
    //     console.log("data", imagesByCategoryQuery.data)
    //  }
    // if (imagesByCategoryQuery.isError) {
    //     console.log("Error query", imagesByCategoryQuery.error.message)
    // }
	// if (query.isError) {
    //     console.log("Error query", query.error.message)
    // }



    // const fetchData = async () => {
    //     setLoading(true)

    //     const res = await useViewCategoryImagesByUser()

    //     setCountries([...res])
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

	return (
		<div>
			{data &&
			data.map(image => (
			
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







			{/**users all images */}
				{/* {query.data && query.data.map(image => (
				<div key={image.id} className="d-flex mb-4">
                    <img src={image.url} />
					<span className="image-filename" title={image.name}>
						{image.name}
					</span>
                    <div>
					{Math.round(image.size / 1024)} kB
				</div>
				</div>
			))} */}
		</div>
	)
}

export default TestGrid
