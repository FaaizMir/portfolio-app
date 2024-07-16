/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Navbar = ({ handleScroll, refs }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray">
    <nav className="p-10 flex justify-between items-center h-14">
      <div className="text-white text-xl font-bold">
        <img className=' object-contain' src="images/logo1.png" alt="Your Logo" />
      </div>
      <div className="hidden md:flex space-x-4">
        <Link to="/" className="text-black text-xl hover:text-black hover:text-2xl font-bold">About</Link>
        <button className="text-black text-xl hover:text-black hover:text-2xl font-bold" onClick={() => handleScroll(refs.refA)}>Services</button>
        <button className="text-black text-xl hover:text-black hover:text-2xl font-bold" onClick={() => handleScroll(refs.refB)}>Past Projects</button>
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