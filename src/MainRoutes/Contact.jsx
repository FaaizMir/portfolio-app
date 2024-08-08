
const Contact = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-200 mt-16">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Image Section (Right Half) */}
        <div className="lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0 lg:order-1 order-2">
          <img className="object-cover object-center rounded" alt="hero" src="/images/formimage.jpg" />
        </div>

        {/* Form Section (Left Half) */}
        <div className="lg:w-1/2 md:w-1/2 lg:order-2 order-1 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label  className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-lg">Submit</button>
    </div>
         
        </div>
      <div className="bg-black w-full p-16">
        <h1 className=" text-white font-serif font-bold">Address</h1>
        <br />
        <h2 className="text-white font-thin "><em>347A, Eastern Avenue, London , UK. Post Code IG2 6NE</em></h2>
        <h2 className="text-white font-thin "><em>Gulbahar , Peshawar , Pakistan</em></h2>
<br />
<h1 className=" text-white font-serif font-bold">Phone #</h1>
        <br />
        <h2 className="text-white font-thin "><em> +92 3169529042, +92 314 0989780</em></h2>

        <br />
<h1 className=" text-white font-serif font-bold">Email</h1>
        <br />
        <h2 className="text-white font-thin "><em> info@visualscreation.com</em></h2>
      </div>
    </section>
  )
}

export default Contact
