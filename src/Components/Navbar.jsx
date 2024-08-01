/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Navbar = ({ handleScroll, refs }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-200">
    <nav className="p-10 flex justify-between items-center h-14">
      <div className="text-white text-xl font-bold">
        <img className=' object-contain' src="images/logo1.png" alt="Your Logo" />
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold">About</Link>
        <button className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold" onClick={() => handleScroll(refs.refA)}>Services</button>
        <button className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold" onClick={() => handleScroll(refs.refB)}>Past Projects</button>
        <button className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold">Testimonials</button>
        <button className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold">Clients</button>
        <button className="font-serif text-red-800 text-xl hover:text-red hover:text-2xl font-bold">Contact</button>
      </div>
    
    </nav>
  </div>
  );
};

export default Navbar;


// //  <div className="hidden md:flex space-x-4">
// <Link to="/" className="text-white text-xl hover:text-gray-300 hover:text-2xl">About</Link>
// <button className="text-white text-xl hover:text-gray-300 hover:text-2xl" onClick={() => handleScroll(refs.refA)}>Services</button>
// <button className="text-white text-xl hover:text-gray-300 hover:text-2xl" onClick={() => handleScroll(refs.refB)}>Past Projects</button>
// </div>