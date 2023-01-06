import './sidebar.scss'
import logo from '../../assets/logos/logo.svg'
import CategoryList from './CategoryList'

const Sidebar = () => {
    return (
        <div className="SidebarContainer">
            <div className="Sidebar">
                <div className="Top justify-center">
                    <div>
                        <img src={logo} className="Logo" alt="Sidebar Logo"/>
                    </div>
                </div>
                <div className="Bottom">
                    <CategoryList/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar