
const Component1 = () => {
  const images = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg',
  ];

  return (
    <div className="flex justify-center space-x-4">
      {images.map((image, index) => (
        <div key={index} className="w-1/4 transform transition-transform duration-300 hover:scale-110 rounded-lg shadow-lg">
          <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default Component1;
