/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'



const PastProjects = ({refUse}) => {
    const [currentImage,setCurrentImage]=useState(1);
    const images = [
        '/images/img5.avif',
        '/images/img6.avif',
        '/images/img7.avif',
      ];

      const nextImage = () => {
        setCurrentImage((prevImg) => {
          if (prevImg < images.length - 1) {
            return prevImg + 1;
          }
          return prevImg; // Return the current value if the condition is not met
        });
        console.log("forward clicked");
      };
      
     const prevImage=()=>{
       setCurrentImage((prevImg)=>{
        if(prevImg>0)
            return prevImg-1;
        return prevImg;

       })
     }

  return (
    <div className="relative w-screen h-screen" ref={refUse}>
    <div className="overflow-hidden w-full h-full">
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-full object-cover" />
    </div>
    <button
      onClick={prevImage}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black text-xl p-4 rounded-full hover:bg-gray-500 focus:outline-none"
    >
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    <button
      onClick={nextImage}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black p-4 text-xl rounded-full hover:bg-gray-500 focus:outline-none mr-6"
    >
      <FontAwesomeIcon icon={faChevronRight} />
      </button>

    
  </div>
  )
}

export default PastProjects
