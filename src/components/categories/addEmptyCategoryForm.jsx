import logo from '../../assets/logos/logo.svg'
import Button from '../../components/user/Button'
import React, { useRef, useState } from 'react'
import useAddCategory from '../../hooks/useAddCategory';

const AddEmptyCategoryForm = ( showAddCatForm, setShowAddCatForm, ) => {

    //call useAddCategory-hook
	const addCat = useAddCategory()
    //get inputRef
    const inputRef = useRef()

    const handleSubmitCat = async (e) => {
        e.preventDefault()  
        addCat.addEmptyCategory(inputRef.current.value)
    }

    //This does not work but should be correct (peError: setShowAddCatForm is not a function)
    //  const closeAddCatForm = () => {
    //     setShowAddCatForm(false);
    // };

  
	return (
		<>
			
			<div className="nameContainer flex flex-col items-center min-h-screen sm:justify-center pl-4 xs:pl-8 xs:pr-8 mt-10">
                <div className="nameFormBox w-[11rem] xs:w-full px-3 xs:px-10 py-12 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            
                    <div className="Logo flex flex-col items-center justify-center mt-2">
                        <div className='w-11'>
                            <img src={logo} className="Logo" alt="Logo"/>
                        </div>
                    </div>

                    <div className="InfoText flex flex-col items-center justify-center mt-1 mb-7">
                        <h3 className="text-2xl font-semibold mt-2">Add Moodboard</h3>
                        <p className='text-base'>Choose new Moodboard</p>
                    </div>

				
                    <form onSubmit={handleSubmitCat}>

                        <div className="mt-4">
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-griesay-700"
                            >
                                Add a new Moodboard
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    ref={inputRef} 
                                    required= "A Moodboard name must be submitted"
                                    name="category"
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div className="xs:flex items-end justify-end mt-8 mb-2">
                            <Button type="submit" value={`ADD`}/>
							<Button type="reset" value={`RESET`}/>
                            {/* <div 
                                className="ml-4 mt-1 xs:mt-0 font-bold"
                                onClick={closeAddCatForm}>
                                <p>CLOSE</p>
                            </div> */}
                        </div>
                    </form>
                    {addCat.isError && 
                        <div className='flex justify-center'>
                            <p className="text-lg font-bold text-red-600">{addCat.error} :-(</p>
                        </div>  
                    }

                    {addCat.isSuccess && 
                        <div className='flex justify-center'>
                            <p className="text-lg font-bold text-blue-600">{addCat.message} :-)</p>
                        </div>  
                    }
                    

                </div>
            
            </div>
			
		</>
	)
}

export default AddEmptyCategoryForm
