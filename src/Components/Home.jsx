import Navbar from './Navbar';
import Component1 from "./Component1";
// import Component2 from "./Component2";
import Services from "../MainRoutes/Services";
import PastProjects from "../MainRoutes/PastProjects";
import { useRef } from "react";
import Achievements from './Achievements';
import Contact from '../MainRoutes/Contact';
import Clients from './Clients';
import FounderData from './FounderData';

const Home = () => {
  const refA = useRef(null);
  const refB = useRef(null);

  const handleClick = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='pt-20'>
      <Navbar handleScroll={handleClick} refs={{ refA, refB }} />
      <Component1 />
      {/* <Component2 /> */}
      <Services refUse={refA} />
      <PastProjects refUse={refB} />
      <Achievements />
      <Clients />
      <FounderData />
      <Contact />

    </div>
  );
};

export default Home;
