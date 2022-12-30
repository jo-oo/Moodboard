import './sidebar.scss'
import logo from '../../assets/logos/logo.svg'
import CategoryList from './CategoryList'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className='Top'>
                <div>
                    <img src={logo} className="Logo" alt="Sideboard Logo"/>
                </div>
            </div>
            <div className="Bottom">
                <CategoryList/>
            </div>
        </div>
    )
}

export default Sidebar