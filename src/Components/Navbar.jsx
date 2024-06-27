import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <nav className="bg-gray-800 p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link to="/">MUHAMMAD TALHA PORTFOLIO</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white text-xl hover:text-gray-300 hover:text-2xl">About</Link>
          <Link to="/services" className="text-white text-xl hover:text-gray-300 hover:text-2xl">Services</Link>
          <Link to="/pastprojects" className="text-white text-xl hover:text-gray-300 hover:text-2xl">Past Projects</Link>
          <Link to="/contact" className="text-white text-xl  hover:text-gray-300 hover:text-2xl">Contact</Link>
          <Link to="/resources" className="text-white text-xl hover:text-gray-300 hover:text-2xl">Resources</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
