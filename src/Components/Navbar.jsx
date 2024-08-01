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
    <nav className="p-10 flex justify-between items-center h-14">
      <div className="text-white text-xl font-bold">
        <img className="object-contain" src="images/logo1.png" alt="Your Logo" />
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold">About</Link>
        <button className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold" onClick={() => handleScroll(refs.refA)}>Services</button>
        <button className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold" onClick={() => handleScroll(refs.refB)}>Past Projects</button>
        <button className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold">Testimonials</button>
        <button className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold">Clients</button>
        <button className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold">Contact</button>
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


// //  <div className="hidden md:flex space-x-4">
// <Link to="/" className="text-white text-xl hover:text-gray-300 hover:text-2xl">About</Link>
// <button className="text-white text-xl hover:text-gray-300 hover:text-2xl" onClick={() => handleScroll(refs.refA)}>Services</button>
// <button className="text-white text-xl hover:text-gray-300 hover:text-2xl" onClick={() => handleScroll(refs.refB)}>Past Projects</button>
// </div>