import './component1.css'; // Import the custom CSS

const Component1 = () => {
//   const images = [
//     '/images/img1.jpg',
//     '/images/img2.jpg',
//     '/images/img3.jpg',
//     '/images/img4.jpg',
//   ];

//   return (
//     <div className="flex justify-center space-x-4">
//       {/* Empty div with a separate image */}
//       <div className="w-1/4 rounded-lg shadow-lg">
//         <img src="/images/img1.jpg" alt="Separate Image" className="w-full h-64 object-cover rounded-lg" />
//       </div>

//       {/* Wrapper div for the images */}
//       <div className="image-wrapper">
//         {images.map((image, index) => (
//           <div key={index} className="image-container rounded-lg shadow-lg">
//             <img src={image} alt={`Image ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );


return(
  <div className="flex h-screen mt-10">
      <div className="w-1/2 p-4 ml-20">
   <h1 className='mt-20  font-bold text-3xl text-red-600'><em>Your Partner in Content Production</em></h1>
   <h2 className='text-xl mt-4'>We offer services in design, thumbnails, video production, animations, youtube channels, channel monitization.</h2>
   <button className="bg-red-800 p-4 mt-4 font-bold hover:scale-110 transition-transform duration-300">Contact Us</button>
   </div>
      <div className="w-1/2">
        <img src='/images/vector.jpg' />
      </div>
    </div>
)
 };

export default Component1;
