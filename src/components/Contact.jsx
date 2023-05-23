import React from 'react';
import { SiGooglemaps } from 'react-icons/si';
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  const iconStyle = 'text-4xl text-white'

  return (
    <div className="h-screen">
      <div className="mx-auto max-w-screen-xl">
        <div className="max-w-3xl xxs:flex xxs:justify-center xxs:mb-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Contact Us</h2>
        </div>

        <div className="flex xxs:flex-col gap-16">
          <div className="flex flex-col items-center">
            
            <div className='bg-blue-800 hover:bg-blue-700 p-6 rounded-full'>
              <SiGooglemaps className={iconStyle} />
            </div>
          
            <div className="text-2xl mt-4">Find Us</div>
            <div className="text-xl flex flex-col items-center">
              <p>28 Stephen Jewers Gardens</p>
              <p>Barking, Essex</p>
              <p>IG11 9FA</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className='bg-blue-800 hover:bg-blue-700  p-6 rounded-full'>
               <FaPhoneAlt className={iconStyle}  />
            </div>
           
            <div className="text-2xl mt-4">Call Us</div>
            <div className="text-xl flex flex-col items-center">
              <p>T: 02078559671</p>
              <p>M: 0758559671</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className='bg-blue-800 hover:bg-blue-700  p-6 rounded-full'>
              <FiMail className={iconStyle}  />
            </div>
            
            <div className="text-2xl mt-2">Email</div>
            <p className="text-lg flex justify-center">
              info@hedgecockcommunitycenter.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
