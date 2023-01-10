import RightSide from '../../components/user/RightSide'
import ForgotPasswordForm from '../../components/user/ForgotPasswordForm'

const ForgotPasswordPage = () => {
	return (
        <div className="w-full h-screen flex items-start">
            <div className='w-1/2 h-full flex flex-col p-4 bg-[#F8F8FB]'>
                <ForgotPasswordForm />
            </div>
            <RightSide/>
        </div>
	)
}

export default ForgotPasswordPage

