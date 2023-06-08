import React from 'react'

const News = () => {
    return (
        <div className='p-12'>

            <div className='grid grid-cols-3 gap-8 lg:gap-10 xl:12'>

                {/* News Section */}
                <div className='xxs:col-span-3 md:col-span-2'>

                        <h2 className='xxs:text-2xl xs:text-3xl font-bold'>Latest News & Features</h2>

                        <div className='grid grid-cols-2 gap-4 pt-4'>

                            <div className='col-span-2'>
                                <img className='rounded-md w-full' src='https://www.eastlondonmosque.org.uk/handlers/getimage.ashx?idmf=01e651f7-a955-45ba-a686-c7938e7a9000&w=672&h=262&f=1' />
                                <p className='text-xl pt-3 text-blue-900 hover:text-blue-800 hover:underline'>Autism - Peer Support Group</p>
                            </div>
                            
                            <div className='xxs:col-span-2 sm:col-span-1 w-full'>
                                <img className='rounded-md w-full' src='https://www.eastlondonmosque.org.uk/handlers/getimage.ashx?idmf=8c13baf8-5599-40bc-b8ea-308eb91905df&w=672&h=262&f=1' />
                                <p className='text-xl pt-3 text-blue-900 hover:text-blue-800 hover:underline'>Your amazing support in Ramadan 2023!</p>
                            </div>
                            
                            <div className='xxs:col-span-2 sm:col-span-1 w-full'>
                                <img className='rounded-md w-full' src='https://www.eastlondonmosque.org.uk/handlers/getimage.ashx?idmf=3fe97da8-26dd-4c23-a730-ef3e87a7d1a9&w=672&h=262&f=1' />
                                <p className='text-xl pt-3 text-blue-900 hover:text-blue-800 hover:underline'>Hajj Seminar 2023</p>
                            </div>

                        </div>

                </div>


                {/* Updates Section */}
                <div className='xxs:col-span-3 md:col-span-1'>
                    <div className='grid grid-cols-1'>
                        
                        <h2 className='text-3xl font-bold pb-2'>Recent Updates</h2>

                        <div className='grid grid-cols-1 xxs:gap-5 xxs:text-xl md:text-2xl lg:text-3xl pt-4'>
                            <a className='text-blue-900 hover:text-blue-800 hover:underline' href="#">Make marriage easy (English)</a>
                            <a className='text-blue-900 hover:text-blue-800 hover:underline' href="#">Make marriage easy (Bangla)</a>
                            <a className='text-blue-900 hover:text-blue-800 hover:underline' href="#">Job Vacancy at ELM Schools: Deputy Headteacher</a>
                            <a className='text-blue-900 hover:text-blue-800 hover:underline' href="#">Job Vacancy: Chief Executive</a>
                            <a className='text-blue-900 hover:text-blue-800 hover:underline' href="#">Show mercy to our youth and respect our elderly</a>
                            
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default News