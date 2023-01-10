import './notes.scss'
import { useAuthContext } from '../../contexts/AuthContext' //to temporarily dispaly user
import { Link } from 'react-router-dom'

const Notes = () => {

    const { currentUser } = useAuthContext()

    return (
        <div className='RightContainer'>
            <div className="NotesContainer">
                <div className="Notepad">
                    Notes
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                </div>
                <div className="LogOut">
        
                        {
							currentUser ? (
								<>
									{/* User is logged in */}
                                    <p>You are logged in as {currentUser.email}!</p>
									<Link as={Link} to="/logout">Logout</Link>
								</>
							) : (
								<>
									{/* No user is logged in, show nothing. (They won´t get to this route anyways but might as well write this logic.) */}
                                    <p>My name</p>
								</>
							)
						}
                </div>
            </div>
        </div>
    
  )
}

export default Notes