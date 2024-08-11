/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'



const PastProjects = ({refUse}) => {
    const [currentImage,setCurrentImage]=useState(1);
    const [isPlaying,setIsPlaying]=useState(false);
    // const [videoHeading,setVideoHeading]=useState(1);

    // const headings=[
    //   "WhiteBoard Animation",
    //   "Reel",
    //   "Reel",
    //   "Cashcow Video",
    //   "Slideshow "
    // ]
    const images = [
        'https://www.youtube.com/embed/GWW8bX4L2C8?si=vcLAYezR5F2FW2ym"',
        'https://www.youtube.com/embed/TzAvJvjcrc8?si=q95PLM3LPPJoHf8f',
        'https://www.youtube.com/embed/at8bPRPDSMk?si=5P2bPu6m2QbqhkjR',
        "https://www.youtube.com/embed/BRIkNF0q0Bc?si=cShL9n6gGZRIBnlg",
        'https://youtube.com/embed/qJ7_4hJUElw?si=zaq_sjOYiVf0l-5W',
        
        
        
      ];

      const nextImage = () => {
        setCurrentImage((prevImg) => {
          if (prevImg < images.length - 1) {
            return prevImg + 1;
          }
         
          return prevImg; // Return the current value if the condition is not met
        });
        // setVideoHeading((prev)=>{
        //   if(prev < headings.length -1){
        //     return prev +1 ;
        //   }
        //   return prev ;
        // })
        console.log("forward clicked");

      };
      
     const prevImage=()=>{
       setCurrentImage((prevImg)=>{
        if(prevImg>0)
            return prevImg-1;
        return prevImg;

       })

      //  setVideoHeading((prev)=>{
      //   if(prev>0)
      //     return prev-1 ;
      //   return prev
      //  })
     }
     const handleVideoClick=()=>{
   setIsPlaying(!isPlaying);
   console.log("clivked");
     }

  return (
    <div className="relative w-screen h-screen mt-24 flex justify-center items-center" ref={refUse}>
    
    <div className="overflow-hidden w-3/4 h-3/4">
      <iframe src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-full object-cover" onClick={handleVideoClick} />
      
    </div>
    <div className="absolute top-0 left-0 right-0 text-center">
          <h1 className="text-red-500 font-bold text-3xl ">Past Projects</h1>
          
          {/* <h2 className="text-black text-3xl">{headings[videoHeading]}</h2> */}
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
