import SignupForm from '../../components/user/SignupForm'
import RightSide from '../../components/user/RightSide'

const SignupPage = () => {
	return (
        <div className="w-full h-screen flex items-start">
            <div className='w-1/2 h-full flex flex-col'>
                <SignupForm />
            </div>
            <RightSide/>
        </div>
	)
}

export default SignupPage