import "./moodboard.scss";
import logo from '../../assets/logos/logo.svg'

const Moodboard = () => {
    return (
        <div className="Container">
            <div>
                <img src={logo} className="logo" alt="Moodboard logo"/>
            </div>
            <h1>Moodboard</h1>
            <div>
                <p>
                    let´s create a lovely moodboard
                </p>
            </div>
            <p>
                Stay tuned...
            </p>
        </div>
    )
}

export default Moodboard