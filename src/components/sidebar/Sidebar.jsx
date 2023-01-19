import './sidebar.scss'
import logo from '../../assets/logos/logo.svg'
import useViewCategories from "../../hooks/useViewCategories";
//import CategoryList from './CategoryList'
import Cards from './Cards';

const Sidebar = ( {setSelectedCategory}) => {
    //fetching the categories of that user
    const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })
    console.log("Catwgory query for only the categories of the user" , categoriesQuery.data);

    return (
        <div className="SidebarContainer">
            <div className="Sidebar">
                <div className="Top justify-center">
                    <div>
                        <img src={logo} className="Logo" alt="Sidebar Logo"/>
                    </div>
                </div>
                <div className="Bottom">
                    <Cards categoriesQuery={categoriesQuery} setSelectedCategory={setSelectedCategory} />
                    {/* <CategoryList /> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar