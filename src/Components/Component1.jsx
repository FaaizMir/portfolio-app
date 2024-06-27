import './component1.css'; // Import the custom CSS

const Component1 = () => {
  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
  ];

  return (
    <div className="flex justify-center space-x-4">
      {/* Empty div with a separate image */}
      <div className="w-1/4 rounded-lg shadow-lg">
        <img src="/images/img1.jpg" alt="Separate Image" className="w-full h-64 object-cover rounded-lg" />
      </div>

      {/* Wrapper div for the images */}
      <div className="image-wrapper">
        {images.map((image, index) => (
          <div key={index} className="image-container rounded-lg shadow-lg">
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component1;
