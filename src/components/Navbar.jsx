import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navbar() {
  const whiteClassName = "font-semibold uppercase text-lg text-white text-2xl"
  const regularClassName = "font-semibold uppercase text-lg text-blue text-2xl"
  return (
    <div className="z-10 fixed left-0 right-0 top-3 h-20">
      <nav className="flex items-center container mx-auto h-full justify-between">
      <div className="flex space-x-4">
        <div className="text-2xl">
          Al Robertson
        </div>
          <FaFacebookSquare size={32} />
          <FaInstagram size={33} />
          <MdOutlineEmail size={35} />
        </div>
        <div>
          <ul className="flex space-x-10 text-lg">
            <li>
              <Link to="/" className="text-blue-400 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/animation"
                className="text-blue-400 hover:text-black"
              >
                Animation
              </Link>
            </li>
            <li>
              <Link
                to="/everythingelse"
                className="text-blue-400 hover:text-black"
              >
                Everything Else
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
