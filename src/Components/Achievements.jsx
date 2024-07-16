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
      <section className="text-gray-600 body-font bg-blue-700">
 <div className="text-center bg-blue-800 ">
    <h1 className="text-4xl mt-26 text-black font-extrabold">Our Achievements</h1>
 <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{video1}+</h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{social1}+</h2>
        <p className="leading-relaxed">Subscribes</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{graphic1}+</h2>
        <p className="leading-relaxed">Downloads</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{web1}+</h2>
        <p className="leading-relaxed">Products</p>
      </div>
    </div>
  </div>
 </div>
</section>
    </div>
  )
}

export default Achievements
