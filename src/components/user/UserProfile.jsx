import { useAuthContext } from '../../contexts/AuthContext' //to temporarily display user
import { Link } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs';
import { useState } from 'react';


const UserProfile = () => {
    const { currentUser, userName } = useAuthContext()
    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show);
      };
    
    return (
        <>
            {/* Container for Profile section */}
            <div className="pt-2">
                    {
                        currentUser ? (
                            <>	
                                <div className='grid place-items-center mt-1 overflow-x-hidden break-all'>
                                    {show ? (
                                        <>  
                                            <BsPersonCircle 
                                                size={30} 
                                                onClick={toggle}
                                                className=""
                                            />
                                            <div className="text-center mt-2 mb-9">
                                                <Link as={Link} to="/logout">
                                                    <p className="mb-2">Logout</p>
                                                </Link>
                                                <Link as={Link} to="/update-profile">
                                                    <p className="leading-4">Update profile</p>
                                                </Link>
                                            </div>   
                                        </>
                                        ) : (
                                            <>
                                                {/* User is logged in */}
                                                <div className="text-center mb-3 px-1 leading-5">
                                                    <p>Hello {userName}!</p>
                                                </div>
                                                <BsPersonCircle 
                                                    size={40} 
                                                    onClick={toggle}
                                                    className="mb-12"
                                                />
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
        </>  
    )
}

export default UserProfile