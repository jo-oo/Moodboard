import { useAuthContext } from "../../contexts/AuthContext";

const Card = ( { category } )  => {

    const { setSearchParams } = useAuthContext()
   
    const handleCategoryChoice= () => {
        setSearchParams({category: category.name})
    }

    return (
        <div className="">
            <button 
                onClick={handleCategoryChoice}
                className="focus:outline-none focus:inline-none
                hover:border-1 hover:border-[#CFC9C1] leading-5 w-full py-3 bg-[#F6F7F7] text-yellow-950 border-[0.5px] border-[#CFC9C1] shadow-sm"
                >      
                <p>{category.heading}</p>
                <p>{category.name}</p>
            </button> 

        </div>
    )
}


export default Card