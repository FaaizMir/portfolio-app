
const Production = () => {
  return (
    <div>
    <div className='text-center mb-8 mt-8'>
    <h1 className="text-3xl text-black font-bold ">Our Production Services</h1>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-10 mr-10">
  <div className="bg-red-400 text-white text-center  rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ">
  <img src="/images/productionImages/vanimation.png" className="w-full h-60 " />
    <h2 className="text-2xl font-bold mb-4">Video Animation</h2> 
  </div>
  <div className="bg-red-400 text-white text-center  rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
  <img src="/images/productionImages/commercial.png" className="w-full h-60" />
    <h2 className="text-2xl font-bold mb-4">Commercial Video</h2>
  </div>
  <div className="bg-red-400 text-white text-center  rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
  <img src="/images/productionImages/vcorporate.png " className="w-full h-60" />
    <h2 className="text-2xl font-bold mb-4">Corporate Video</h2>
  </div>
  <div className="bg-red-400 text-white text-center  rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
  <img src="/images/productionImages/vediting.png" className="w-full h-60" />
    <h2 className="text-2xl font-bold mb-4">Video Editing</h2>
  </div>
  <div className="bg-red-400 text-white text-center  rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
  <img src="/images/productionImages/vexplainer.png" className="w-full h-60" />
    <h2 className="text-2xl font-bold mb-4">Video Explainer</h2>
  </div>
  <div className="bg-red-400 text-white text-center rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
  <img src="/images/productionImages/vcommercial.png" className="w-full h-60" />
    <h2 className="text-2xl font-bold mb-4">Video Commercial</h2>
  </div>
</div>

    </div>
  )
}

export default Production
