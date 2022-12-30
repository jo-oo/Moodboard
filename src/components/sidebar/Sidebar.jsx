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
            <h1>Sidebar</h1>
            <h2>Plus</h2>
            <CategoryList/>
        </div>
    )
}

export default Sidebar