import logo from '../../assets/logos/logo.svg'
import useViewCategories from "../../hooks/useViewCategories";
import Cards from './Cards';

const Sidebar = ( ) => {
    //fetching the categories of that user
    const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })

    return (
        <>
            {/* SideBar Container */}
            <div className="bg-zinc-200 border-r-2 border-[#CFC9C1] w-[130px] md:w-[180px] overflow-hidden">
                
                {/* Sidebar */}
                <div className="p-3 md:p-4">
                    {/* Logo */}
                    <div className="mb-5 px-5 md:px-9">
                        <div>
                            <img src={logo} className="" alt="Sidebar Logo"/>
                        </div>
                    </div>
                <div className="mb-4 text-yellow-950 font-bold text-center md:text-[23px] text-[19px]  break-words">
                    <p>Categories</p>
                </div>
                    {/* Cards*/}
                    <Cards categoriesQuery={categoriesQuery} />
                </div>

                
            </div>
        </>
    )
}

export default Sidebar