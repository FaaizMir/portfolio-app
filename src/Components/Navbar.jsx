/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleScroll, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-200">
    <nav className="p-6 py-7 flex justify-between items-center h-24">  {/* Set a specific height */}
      <div className="text-white text-xl font-bold">
        <img className="object-contain h-28" src="images/visualscreationlogo.png" alt="Your Logo" />  {/* Adjust logo height */}
      </div>
      <div className="hidden md:flex space-x-14 mr-28">
        <Link to="/" className=" text-red-800 text-2xl hover:text-red hover:text-3xl ">About</Link>
        <button className=" text-red-800 text-2xl hover:text-red hover:text-3xl " onClick={() => handleScroll(refs.refA)}>Services</button>
        <button className=" text-red-800 text-2xl hover:text-red hover:text-3xl " onClick={() => handleScroll(refs.refB)}>Past Projects</button>
        <button className=" text-red-800 text-2xl hover:text-red hover:text-3xl ">Testimonials</button>
        <button className=" text-red-800 text-2xl hover:text-red hover:text-3xl ">Clients</button>
        <button className=" text-red-800 text-2xl hover:text-red hover:text-3xl ">Contact</button>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-red-800">
        <img src='/images/hamburger.png' />
        </button>
      </div>
    </nav>
    <div className={`fixed top-0 right-0 w-60 mt-16 bg-gray-200 z-40 ${isOpen ? 'block' : 'hidden'}`}>
  <div className="flex flex-col h-full justify-center">
    <button className="text-red-800 text-xl mb-4">About</button>
    <button className="text-red-800 text-xl mb-4">Services</button>
    <button className="text-red-800 text-xl mb-4">Past Projects</button>
    <button className="text-red-800 text-xl mb-4">Testimonials</button>
    <button className="text-red-800 text-xl mb-4">Clients</button>
    <button className="text-red-800 text-xl mb-4">Contact</button>
  </div>
</div>

  </div>
);
  
}

export default Navbar;











