'use client'
import Image from 'next/image'
import notfound from './assets/notfound.png'
const { useEffect } = require("react")

export default  function Error({error,reset}){
    useEffect(()=>{
        console.log(error)
    },[error])

    return (
        <div className='flex flex-col items-center justify-center h-screen '>
            <Image 
            height={500}
            width={500}
             src={notfound}
             alt='not found'
              />
            <h2 className='my-4'>{error?.message}</h2>
            <button
            className="bg-green-400 p-3 mb-2"
            onClick={
                ()=>reset()
            }
            >
            RETRY
            </button>
        </div>
    )


}
