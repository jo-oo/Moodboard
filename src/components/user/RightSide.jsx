import logo from '../../assets/logos/logo.svg'

const RightSide = () => {
    return (
        <div className='hidden relative md:w-1/2 h-full md:with-screen md:flex md:flex-col pr-4 pl-9 pt-10 bg-[#E1E2EC]'>
            <div className="absolute top-[5%] left-[8%] right-[12%] flex flex-col bg-slate-100 bg-opacity-50 rounded-lg border-dashed">
                <h1 className="p-4 font-semibold text-slate-700 break-words">Gather all your inspiration in one place</h1>
            </div>
            <img src={logo} alt="Logo" className="h-full"/>
        </div>
    )
}

export default RightSide