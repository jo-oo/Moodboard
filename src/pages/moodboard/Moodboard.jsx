import "./moodboard.scss";
import logo from '../../assets/logos/logo.svg'
import Sidebar from "../../components/sidebar/Sidebar";

const Moodboard = () => {
    return (
        <div className="Container">

            <div className="Moodboard">
                <Sidebar/>
                <div className="MainMoodboard">
                    <div className="Left">
                        <div>
                            <h2>PLUS</h2>
                        </div>  
                    </div>
                    <div className="Middle">
                        <h1>Moodboard</h1>
                        <div>
                            <img src={logo} className="Logo" alt="Moodboard Logo"/>
                        </div>
                    </div>
                    <div className="Right">
                        <h2>Notes</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Moodboard