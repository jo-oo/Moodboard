const Button = ( { value, type }) => {
    return (
        <button
            type={type}
            className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
        >
       { value }
    </button>
    )
}

export default Button