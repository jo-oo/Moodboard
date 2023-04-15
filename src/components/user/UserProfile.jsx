import { useAuthContext } from '../../contexts/AuthContext' //to temporarily dispaly user
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
            <div className="p-2 ">
                    {
                        currentUser ? (
                            <>	
                                {/* User is logged in */}
                                <div className="text-center">
                                    <p>Hello {userName}!</p>
                                </div>
            
                                <div className='grid place-items-center'>
                            
                                    {show ? (
                                        <>  

                                        <div className='grid bg-blue-200 grid-cols-3 gap-1'>
                                        
                                        <BsPersonCircle 
                                            size={30} 
                                            onClick={toggle}
                                        />
                                            <div className="grid col-span-2">
                                                <Link as={Link} to="/logout">Logout</Link>
                                                <Link as={Link} to="/update-profile">Update Profile</Link>
                                            </div>
                                            </div>
                                        </>
                                        ) : (
                                            <>
                                                <BsPersonCircle 
                                                    size={40} 
                                                    onClick={toggle}
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