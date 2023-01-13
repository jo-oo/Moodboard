import './sidebar.scss'
import logo from '../../assets/logos/logo.svg'
import useViewCategories from "../../hooks/useViewCategories";
//import CategoryList from './CategoryList'
import Cards from './Cards';
//import CategoryList from './CategoryList';


const Sidebar = () => {

    const categoriesQuery = useViewCategories({ fetchOnlyCurrentUser: true })
    console.log("QCATEGORY WUERY categpry" , categoriesQuery.data);

    return (
        <div className="SidebarContainer">
            <div className="Sidebar">
                <div className="Top justify-center">
                    <div>
                        <img src={logo} className="Logo" alt="Sidebar Logo"/>
                    </div>
                </div>
                <div className="Bottom">
                    <Cards categoriesQuery={categoriesQuery}/>
                    {/* <CategoryList /> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar