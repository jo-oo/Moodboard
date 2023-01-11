const Progressbar = ( { value } ) => {
    return (
        <div>
            <div className='h-1 w-full bg-gray-300'>
                <div
                    style={{ width: `${value}%`}}
                    className={`h-full ${
                    value == 0 || value == null || value == undefined ? 'bg-black-100' : value > 0 && value < 70 ? 'bg-blue-100' : 'bg-blue-400'}`}>
                </div>
            </div>
        </div>
    )
}

export default Progressbar