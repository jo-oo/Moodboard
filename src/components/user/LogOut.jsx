import { useAuthContext } from '../../contexts/AuthContext' //to temporarily dispaly user
import { Link } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs';
import { useState } from 'react';


const LogOut = () => {
    const { currentUser } = useAuthContext()
    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show);
      };
    
    return (
        <div className="self-end text-start">
                {
					currentUser ? (
						<>	
                        
                            {/* User is logged in */}
                            <p>You are logged in as {currentUser.email}!</p>  

                            <div className='grid place-items-center'>
                        
                             <BsPersonCircle size={40} 
                                onClick={toggle}/>
                             
                                {show ? (
                                    <>  

                                    <div className='grid grid-cols-3 gap-1'>
                                    
                                    <BsPersonCircle size={30} onClick={toggle}/>
                                        <div className="grid col-span-2">
                                            <Link as={Link} to="/logout">Logout</Link>
                                            <Link as={Link} to="/update-profile">Update Profile</Link>
                                        </div>
                                        </div>
                                    </>
                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </div>

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