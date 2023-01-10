import './notes.scss'
import LogOut from '../user/LogOut'


const Notes = () => {

    return (
        <div className='RightContainer'>
            <div className="NotesContainer">
                <div className="Notepad">
                    Notes
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </div>
                <div className="LogOut">
                    <LogOut />
                </div>
            </div>
        </div>
    
  )
}

export default Notes