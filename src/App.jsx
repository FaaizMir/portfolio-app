import { BrowserRouter , Routes , Route } from "react-router-dom"
import About from "./MainRoutes/About"
import Resources from "./MainRoutes/Resources"
import PastProjects from "./MainRoutes/PastProjects"
import Contact from "./MainRoutes/Contact"
import Services from "./MainRoutes/Services"
// import Home from "./Components/Home"
import Navbar from "./Components/Navbar"



export default function App() {
  return (
<div>

<BrowserRouter>
<Navbar />
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/pastprojects" element={<PastProjects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services" element={<Services />} />
  </Routes>
</BrowserRouter>


    
</div>


   
  )
}