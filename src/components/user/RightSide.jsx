import logo from '../../assets/logos/logo.svg'

const RightSide = () => {
    return (
        <div className='relative w-1/2 h-full flex flex-col pr-4 pl-9 pt-10 bg-[#E1E2EC]'>
            <div className="absolute top-[5%] left-[8%] right-[8%] flex flex-col bg-slate-100 bg-opacity-20 rounded-lg border-dashed">
                <h1 className="m-4 p-2 font-semibold text-slate-700">Gather all your inspiration in one place</h1>
            </div>
            <img src={logo} alt="Logo" className="h-full"/>
        </div>
    )
}

export default RightSide