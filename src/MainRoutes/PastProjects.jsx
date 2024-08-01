/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'



const PastProjects = ({refUse}) => {
    const [currentImage,setCurrentImage]=useState(1);
    const [isPlaying,setIsPlaying]=useState(false);
    const images = [
        '/videos/Video1.mp4',
        '/videos/Video2.mp4',
        '/videos/Video3.mp4',
        '/videos/Video4.mp4',
        '/videos/Video5.mp4'
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
     const handleVideoClick=()=>{
   setIsPlaying(!isPlaying);
   console.log("clivked");
     }

  return (
    <div className="relative w-screen h-screen mt-24 flex justify-center items-center" ref={refUse}>
    <div className="overflow-hidden w-3/4 h-3/4">
      <video controls src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-full object-cover" onClick={handleVideoClick} />
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
