import { useState,useEffect } from "react"
const Achievements = () => {
    const [video1,setVideo1]=useState(0);
    const [graphic1,setGraphic1]=useState(0);
    const [social1,setSocial1]=useState(0);
    const [web1,setWeb1]=useState(0);
   // const [count, setCount] = useState(1); // Initial count
    //const isVisible = useRef(false); // Track component visibility
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (video1 < 1000 ) {
          setVideo1(video1 + 1);
        } else {
          clearInterval(intervalId);
        }
        if (social1<500){
            setSocial1(social1+1);
        }
        if(web1<150){
            setWeb1(web1+1)
        }
        if(graphic1<900){
            setGraphic1(graphic1+1);
        }
      }, 1);
      return () => clearInterval(intervalId);
    }, );
  return (
    <div>
      <section className="text-gray-600 body-font ">
 <div className="text-center bg-black ml-10 mr-10 mt-10  ">
    <h1 className="text-4xl mt-26 text-white font-extrabold font-serif">Our Achievements</h1>
 <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-5xl text-white">{video1}+</h2>
        <p className="leading-relaxed text-white text-3xl font-serif">Users</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-5xl text-white">{social1}+</h2>
        <p className="leading-relaxed text-white text-3xl font-serif">Subscribes</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-5xl text-white">{graphic1}+</h2>
        <p className="leading-relaxed text-white text-3xl font-serif">Downloads</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-5xl text-white">{web1}+</h2>
        <p className="leading-relaxed text-white text-3xl font-serif">Products</p>
      </div>
    </div>
  </div>
 </div>
</section>
    </div>
  )
}

export default Achievements
