import React from 'react'

const Header = () => {
  return (
    
    <div className='mx-8'>

        <div className=' pt-5 uppercase font-bold'>
            <h1 className='flex justify-center xxs:text-2xl xs:text-3xl md:text-4xl lg:text-5xl text-gray-700'>Hedgecock Community Centre</h1>
            <h2 className='flex justify-center xxs:text-xl text-gray-500'>A hub for the community</h2>
        </div>

        {/* Donate Button  */}
        <div className="pt-6 flex justify-center ">
            <div>
                <button className="xxs:w-[20rem] xs:w-[25rem] md:w-[42rem] lg:hidden bg-red-800 hover:bg-red-900 text-white py-2 px-6 rounded-full">Donate</button>
            </div>
        </div>

        {/*  Date & Calendar Link */}
        <div className='mr-4 text-sm md:text-md'>
            <div className="mt-4 flex justify-end text-gray-600">
                <p className="mr-4">25 April 2023</p>
                <p>5 Shawwal 1444</p>
            </div>
            <div className='mt-2'>
                <p className='text-red-700 font-bold flex justify-end'>Timetable & Calendar</p>
            </div>
        </div>

        {/*  Prayer times  */}
        <div className='flex justify-end border-b-2'>
            <table className="my-4">
                <thead>
                    <tr>
                        <td className="xxs:px-2 sm:px-4"></td>
                        <td className="xxs:px-2 sm:px-4">Fajr</td>
                        <td className="xxs:px-2 sm:px-4">Zuhr</td>
                        <td className="xxs:px-2 sm:px-4 flex justify-center">Asr</td>
                        <td className="xxs:px-2 sm:px-4">Maghrib</td>
                        <td className="xxs:px-2 sm:px-4">Isha</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="xxs:px-2 sm:px-4 text-gray-600">Begins</td>
                        <td className="xxs:px-2 sm:px-4 ">4:07</td>
                        <td className="xxs:px-2 sm:px-4 ">1:04</td>
                        <td className="xxs:px-2 sm:px-4">4:56</td>
                        <td className="xxs:px-2 sm:px-4 flex justify-center">8:17</td>
                        <td className="xxs:px-2 sm:px-4 ">9:30</td>
                    </tr>
                    <tr>
                        <td className="xxs:px-2 sm:px-4 text-gray-600">Jamā‘ah</td>
                        <td className="xxs:px-2 sm:px-4">4:07</td>
                        <td className="xxs:px-2 sm:px-4">1:04</td>
                        <td className="xxs:px-2 sm:px-4">4:56</td>
                        <td className="xxs:px-2 sm:px-4 flex justify-center ">8:17</td>
                        <td className="xxs:px-2 sm:px-4">9:30</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div> 
  )
}

export default Header