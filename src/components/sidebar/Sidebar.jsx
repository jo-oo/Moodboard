import './sidebar.scss'
import logo from '../../assets/logos/logo.svg'
import useViewCategories from "../../hooks/useViewCategories";
import Cards from './Cards';

const Sidebar = ( ) => {
    //fetching the categories of that user
    const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })

    return (
        <div className="SidebarContainer">
            <div className="Sidebar">
                <div className="Top justify-center">
                    <div>
                        <img src={logo} className="Logo" alt="Sidebar Logo"/>
                    </div>
                </div>
                <div className="Bottom">
                    <Cards categoriesQuery={categoriesQuery} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar