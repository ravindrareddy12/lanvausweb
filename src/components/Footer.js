import React from 'react';
// import { MailIcon, PhoneIcon } from '@heroicons/react/solid';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Lanvaus &nbsp;</h2>
            <p className="mt-2"> Your one-stop solution for all digital needs</p>
          </div>
          <div className="flex space-x-6">
            <div className="flex items-center">
              {/* <MailIcon className="h-6 w-6 text-white mr-2" /> */}
              <span>contact@lanvaus.com</span>
            </div>
            <div className="flex items-center">
              {/* <PhoneIcon className="h-6 w-6 text-white mr-2" /> */}
              <span>+1 234 567 890</span>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Lanvaus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
