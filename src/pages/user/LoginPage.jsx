import LoginForm from '../../components/user/LoginForm'
import RightSide from '../../components/user/RightSide'

const LoginPage = () => {
	return (
        <div className="w-full h-screen flex items-start">
            <div className='w-full md:w-1/2 h-full flex flex-col p-4 bg-[#F8F8FB]'>
                <LoginForm />
            </div>
            <RightSide/>
        </div>
	)
}

export default LoginPage