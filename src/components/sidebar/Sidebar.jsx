import logo from '../../assets/logos/logo.svg'
import useViewCategories from "../../hooks/useViewCategories";
import Cards from './Cards';
import UserProfile from '../user/UserProfile';

const Sidebar = ( { categoriesQuery} ) => {
    

    return (
        <>
            {/* SideBar Container */}
            {/* grid h-screen sticky top-0 IS needed for only the middle section to move / scroll */}
            <div className="grid h-screen sticky top-0 bg-zinc-200 border-r-2 border-[#CFC9C1] w-[130px] md:w-[180px] overlow-y-hidden md:overflow-y-scroll overflow-x-hidden">
                
                {/* Sidebar */}
                <div className="p-3 md:p-4 h-[42rem] overflow-y-scroll md:overflow-y-hideen md:h-full">
                    {/* Logo */}
                    <div className="mb-5 px-5 md:px-9">
                        <div>
                            <img src={logo} className="" alt="Sidebar Logo"/>
                        </div>
                    </div>
                <div className="mb-4 text-yellow-950 font-bold text-center md:text-[23px] text-[19px] break-words">
                    <p>Categories</p>
                </div>
                    {/* Cards*/}
        
                        <Cards categoriesQuery={categoriesQuery} />
           
      
                  
                </div>
                <div className="visible md:hidden ">
                <UserProfile />
                </div>
               

                
            </div>
        </>
    )
}

export default Sidebar