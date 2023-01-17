import logo from '../../assets/logos/logo.svg'
import Button from '../../components/user/Button'
import Alert from '../../components/general/Alert'
import React, { useRef, useState } from 'react'
import Progressbar from './Progressbar'
import useUploadImage from '../../hooks/useUploadImage'

const UploadImage = () => {
    const [image, setImage] = useState(null)
    const [message, setMessage] = useState()
    const uploadImage = useUploadImage()
    const inputRef = useRef()


    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
        console.log("File changed!", e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

     
        uploadImage.upload(image, inputRef.current.value)
    }

    const handleReset = () => {
        setImage(null)
        setMessage(null)
    }
    //console.log("Uploading...", uploadImage.progress)
    //console.log("Image...", image)
    return (
        <>
            
            <div className="nameContainer flex flex-col items-center min-h-screen sm:justify-center p-8">
                <div className="nameFormBox w-full px-10 py-12 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            
                    <div className="Logo flex flex-col items-center justify-center mt-2">
                        <div className='w-11'>
                            <img src={logo} className="Logo" alt="Logo"/>
                        </div>
                    </div>

                    <div className="InfoText flex flex-col items-center justify-center mt-1 mb-7">
                        <h3 className="text-2xl font-semibold mt-2">Upload image</h3>
                        <p className='text-base'>Choose your file</p>
                    </div>
{/* 
                    {error && (
                        //send error to Alert component
                        <Alert error={error} />
                    )} */}

                    {message && (
                        //send message to Alert component
                        <Alert message={message} />
                    )}

                    

                    <form onSubmit={handleSubmit} onReset={handleReset}>

                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Choose image to upload
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="file" onChange={handleFileChange}
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                <span className="mt-1">
                                    {
                                        image
                                            ? `${image.name} (${Math.round(image.size/1024)} kB)`
                                            : 'No photo selected'
                                    }
                                </span>
                            </div>
                        </div>




                        <div className="mt-4">
                            <label
                                htmlFor="category"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Category
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    ref={inputRef} 
                                    required= "A category must be submitted"
                                    name="category"
                                    className="nameInputField block w-full mt-1 p-1.5 border-[#9EB8EB] border-opacity-30  rounded-md 
                                    border-2 
                                    leading-tight focus:outline-none focus:shadow-outline
                                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-end mt-8 mb-2">
                            <Button disabled={uploadImage.isUploading} type="submit" value={`UPLOAD`}/>
                            <Button type="reset" value={`RESET`}/>
                     
                        </div>
                    </form>
                 
                    {uploadImage.progress !== null && (
                        <Progressbar className="mt-20"
                            value={uploadImage.progress}
                            label={`${uploadImage.progress}%`}
                        />
                    )}
                
                </div>
            </div>
            
        </>
    )
}

export default UploadImage
