import './sidebar.scss'
import logo from '../../assets/logos/logo.svg'

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
            <h2>Category 1</h2>
            <h2>Category 2</h2>
            <h2>Category 3</h2>
            <h2>Category 4</h2>
            <h2>Category 5</h2>
        </div>
    )
}

export default Sidebar