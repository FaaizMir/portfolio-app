import './component1.css'; // Import the custom CSS

const Component1 = () => {

return(
  <div className="flex flex-col md:flex-row mt-14 mb-14">
  <div className="w-full md:w-1/2 p-4">
    <h1 className="mt-10 font-bold text-3xl md:text-7xl text-red-500">Your Partner in Content Production</h1>
    <h2 className="text-xl mt-4">We offer services in design, thumbnails, video production, animations, youtube channels, channel monitization.</h2>
    <button className="bg-red-500 px-8 py-4 mt-8 font-bold hover:scale-110 transition-transform duration-300 text-white">Contact Us</button>
  </div>
  <div className="w-full md:w-1/2">
    <img src="/images/vector.jpg" alt="Image" />
  </div>
</div>
)
 };

export default Component1;
