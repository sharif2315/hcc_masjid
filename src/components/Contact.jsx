import React from 'react';
import { SiGooglemaps } from 'react-icons/si';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  const iconStyle = 'text-2xl text-white'

  return (
    <div className="">
      <div className="mx-auto max-w-screen-xl">
        <div className="xxs:flex xxs:justify-center xxs:mb-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Contact Us</h2>
        </div>

        <div className="flex xxs:flex-col md:flex-row gap-12 md:justify-evenly xxs:items-center text-gray-500">
          
          <a className='cursor-pointer' href='#'>
            <div className="flex flex-col items-center rounded-xl py-8 xxs:w-72 xxs:h-64 border border-gray-100 shadow-xl">            
              <div className='bg-blue-800 hover:bg-blue-700 p-5 rounded-full'>
                <SiGooglemaps className={iconStyle} />
              </div>          
              <div className="text-xl mt-4 font-semibold">Find Us</div>
              <div className="text-lg flex flex-col items-center">
                <p>28 Stephen Jewers Gardens</p>
                <p>Barking, Essex</p>
                <p>IG11 9FA</p>
              </div>
            </div>
          </a>


          <a className='cursor-pointer' href='#'>
            <div className="flex flex-col items-center rounded-xl py-8 xxs:w-72 xxs:h-64 border-gray-100 shadow-xl">
              <div className='bg-blue-800 hover:bg-blue-700 p-5 rounded-full'>
                <FaPhoneAlt className={iconStyle}  />
              </div>
              <div className="text-xl pt-8 font-semibold">Call Us</div>
              <div className="text-lg flex flex-col items-center">
                <p>T: 02078559671</p>
              </div>
            </div>
          </a>

          <a className='cursor-pointer' href='#'>
            <div className="flex flex-col items-center rounded-xl py-8 xxs:w-72 xxs:h-64 border-gray-100 shadow-xl">
              <div className='bg-blue-800 hover:bg-blue-700 p-5 rounded-full'>
                <FiMail className={iconStyle}  />
              </div>         
              <div className="text-xl pt-8 font-semibold">Email</div>
              <p className="text-lg flex justify-center">
                info@hcc.com
              </p>
            </div>
          </a>


        </div>
      </div>
    </div>
  );
};

export default Contact;
