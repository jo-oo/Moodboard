import { useAuthContext } from '../../contexts/AuthContext' //to temporarily dispaly user
import { Link } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs';


const LogOut = () => {
    const { currentUser } = useAuthContext()
    
    return (
        <div>
                {
					currentUser ? (
						<>
							{/* User is logged in */}
                            <p>You are logged in as {currentUser.email}!</p>
							<Link as={Link} to="/logout">Logout</Link>
                            <BsPersonCircle size={45}/>
						</>
					) : (
						<>
							{/* No user is logged in, show nothing. (They won´t get to this route anyways but might as well write this logic.) */}
                            <p>My name</p>
						</>
					)
				}      
        </div>
    )
}

export default LogOut