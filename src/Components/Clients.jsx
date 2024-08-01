
const Clients = () => {
  return (
    <div className="container mx-auto">
    <div className="text-center items-center mt-16"><h1 className="font-serif font-bold text-3xl text-red-800">Our Clients</h1></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <img src="/clientimages/Digics.png" alt="Image 1" className="w-full h-auto object-cover" />
      <img src="/clientimages/eighteeth.png" alt="Image 2" className="w-full h-auto object-cover " />
      <img src="/clientimages/hmb.jpg" alt="Image 3" className="w-full h-auto object-cover mt-10" />
      <img src="/clientimages/mv.png" alt="Image 4" className="w-full h-auto object-cover" />
      <img src="/clientimages/x.png" alt="Image 5" className="w-140 h-auto object-cover" />
    </div>
  </div>
  
  )
}

export default Clients
