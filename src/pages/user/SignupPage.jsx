import SignupForm from '../../components/user/SignupForm'
import RightSide from '../../components/user/RightSide'

const SignupPage = () => {
	return (
        <div className="w-full h-screen flex items-start">
            <div className='w-full md:w-1/2 h-full flex flex-col p-4 bg-[#F8F8FB]'>
                <SignupForm />
            </div> 
            <RightSide/>
        </div>
	)
}

export default SignupPage