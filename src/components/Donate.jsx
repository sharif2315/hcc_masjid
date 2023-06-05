import React from 'react'

const Donate = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="text-3xl font-bold sm:text-4xl xxs:flex xxs:justify-center">
        Quick Donate
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 bg-yellow-300">
        
        <div className="lg:py-16">

          {/* Donate Info */}
          <article className="space-y-4 text-gray-600 xxs:px-8 flex flex-col items-center">
            <h4 className='text-lg font-semibold'>Give in the path of Allah</h4>
            <p>
              Your contribution will help us to maintain and develop the wide range of services we offer. Prophet Muhammad ﷺ said: “Allah said: ‘Spend, O son of Adam, and I shall spend on you.’”
            </p>
          </article>
          
          {/* Donate Buttons */}
          <div>

            {/* Row of Donation Amounts */}
            <div className='pt-5 xxs:flex xxs:justify-center'>
              <button className='bg-blue-800 hover:bg-blue-700 hover:cursor-pointer text-white mx-4 px-4 py-3 rounded-lg shadow-xl'>£10</button>
              <button className='bg-blue-800 hover:bg-blue-700 hover:cursor-pointer text-white mx-4 px-4 py-3 rounded-lg shadow-xl'>£25</button>
              <button className='bg-blue-800 hover:bg-blue-700 hover:cursor-pointer text-white mx-4 px-4 py-3 rounded-lg shadow-xl'>£100</button>
            </div>

            {/* Other Amount Input */}

            {/* Donate Button */}
            
          </div>
        </div>


        <div className="xxs:h-[20rem] xxs:px-5 xs:h-[25rem] md:h-[27rem] sm:h-80 lg:h-full bg-green-200 items-center flex justify-center">
          <img
            alt="/"
            src="https://www.eastlondonmosque.org.uk/GetImage.aspx?IDMF=37a63912-6755-4581-bd0e-37d8d848e1b6&w=2184&h=1456&src=mc"
            className="rounded-xl shadow-xl"
          />
        </div>

      </div>


    </div>
  )
}

export default Donate