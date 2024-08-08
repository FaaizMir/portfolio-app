import { useState,useEffect } from "react"
const Achievements = () => {
    const [video1,setVideo1]=useState(0);
    // const [graphic1,setGraphic1]=useState(0);
    const [social1,setSocial1]=useState(0);
    const [web1,setWeb1]=useState(0);
   // const [count, setCount] = useState(1); // Initial count
    //const isVisible = useRef(false); // Track component visibility
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (video1 < 30 ) {
          setVideo1(video1 + 1);
        } else {
          clearInterval(intervalId);
        }
        if (social1<100){
            setSocial1(social1+1);
        }
        if(web1<275){
            setWeb1(web1+1)
        }
        // if(graphic1<90){
        //     setGraphic1(graphic1+1);
        // }
      }, 1);
      return () => clearInterval(intervalId);
    }, );
  return (
    <div>
      <section className="text-gray-600 body-font ">
 <div className="text-center bg-gray-400 ml-10 mr-10 mt-10 pt-8 rounded ">
    <h1 className="text-4xl mt-30 text-black font-bold">Our Achievements</h1>
 <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-5xl text-black">{video1}+</h2>
        <p className="leading-relaxed text-black text-3xl ">Brands</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-5xl text-black">{social1}+</h2>
        <p className="leading-relaxed text-black text-3xl ">International Companies</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-5xl text-black">5M+</h2>
        <p className="leading-relaxed text-black text-3xl ">Content Creators</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-5xl text-black">{web1}+</h2>
        <p className="leading-relaxed text-black text-3xl ">Subscribers</p>
      </div>
    </div>
  </div>
 </div>
</section>
    </div>
  )
}

export default Achievements
