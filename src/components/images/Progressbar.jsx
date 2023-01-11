/* This Progress Bar can be used setting "progress" to !null in the file where it´s rendered, and then the null/undefrined/0-values can be removed from logic here. If the Progress Bar is simply rendered, it is written to be neraly invisible in non progress mode so that user won´t be confused.*/

const Progressbar = ( { value, label } ) => {
    return (
        <div>
            <div className='h-4 w-full bg-gray-300 mt-5 rounded-sm'>
                <div    
                    style={{ width: `${value}%` }}
                    className={`h-full ${
                    value == 0 || value == null || value == undefined ? 'bg-black-100' : value > 0 && value < 70 ? 'bg-blue-100' : 'bg-blue-400'}`}>   
                </div>
                <p>{label}</p>
            </div>
        </div>
    )
}

export default Progressbar