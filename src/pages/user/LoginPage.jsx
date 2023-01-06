import LoginForm from '../../components/user/LoginForm'
import RightSide from '../../components/user/RightSide'

const LoginPage = () => {
	return (
        <div className="w-full h-screen flex items-start">
            <div className='w-1/2 h-full flex flex-col'>
                <LoginForm />
            </div>
            <RightSide/>
        </div>
	)
}

export default LoginPage