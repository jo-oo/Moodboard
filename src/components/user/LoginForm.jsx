import logo from '../../assets/logos/logo.svg'
import Button from './Button.jsx'

const LoginForm = () => {
    return (
        <div>

            <div className="nameContainer flex flex-col items-center min-h-screen sm:justify-center p-8">
                <div className="nameFormBox w-full px-10 py-12 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            
                    <div className="Logo flex flex-col items-center justify-center mt-2">
                        <div className='w-11'>
                            <img src={logo} className="Logo" alt="Logo"/>
                        </div>
                    </div>

                    <div className="InfoText flex flex-col items-center justify-center mt-1 mb-7">
                        <h3 className="text-2xl font-semibold mt-2">Welcome back</h3>
                        <p className='text-base'>Please enter your details</p>
                    </div>

                    <form>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-8 mb-2">
                            <a
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                href="#"
                            >
                                Forgot password?
                            </a>
                            <Button />
                        </div>
                        <div className="mt-4">

                            <div className="flex flex-col items-center">
                            <a
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                href="#"
                            >
                                Don´t have an account? Sign up
                            </a>
                            </div>
                        </div>
                    </form>
                    
                </div>
            </div>

        </div>
    )
}

export default LoginForm