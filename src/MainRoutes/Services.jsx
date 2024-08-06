/* eslint-disable react/prop-types */
import Production from "../Components/Production";

const Services = ({ refUse }) => {
  return (
    <section ref={refUse} className="text-gray-600 body-font">
      <div className="container px-5  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <img
              className="h-80 rounded w-full object-cover object-center mb-6"
              src="/images/img14.jpg"
              alt="content"
            />
            <h1 className="text-2xl text-gray-900 font-medium title-font mb-4">
              Video Editing
            </h1>
            <p className="leading-relaxed text-base">
              At Visuals Media, we turn your raw videos into amazing stories.
              Our team makes sure every clip looks great with smooth transitions
              and perfect colors. We focus on every little detail to make your
              videos stand out. Trust us to create high-quality videos just the
              way you want them.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <img
              className="h-80 rounded w-full object-cover object-center mb-6"
              src="images/img13.jpg"
              alt="content"
            />
            <h1 className="text-2xl text-gray-900 font-medium title-font mb-4">
              Graphic Designing
            </h1>
            <p className="leading-relaxed text-base">
              At Visuals Media, we make eye-catching graphics for your brand.
              Our team designs logos, social media posts, and more, all looking
              fantastic. You can count on us to deliver top-quality graphics
              that make you stand out.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <img
              className="h-80 rounded w-full object-cover object-center mb-6"
              src="images/img15.jpg"
              alt="content"
            />
            <h1 className="text-2xl text-gray-900 font-medium title-font mb-4">
              Social Media Management
            </h1>
            <p className="leading-relaxed text-base">
              At Visuals Media, we help you shine on social media. Our team
              creates engaging posts, manages your accounts, and runs effective
              campaigns. We aim to boost your online presence and connect you
              with your audience. Trust us to grow your brand on social media.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <img
              className="h-80 rounded w-full object-cover object-center mb-6"
              src="images/img12.jpg"
              alt="content"
            />
            <h1 className="text-2xl text-gray-900 font-medium title-font mb-4">
              Web Development
            </h1>
            <p className="leading-relaxed text-base">
              At Visuals Media, we build beautiful and functional websites for
              your business. Our team designs and develops sites that are easy
              to use and look great on any device. Your website will represent
              your brand and meet your needs. Trust us to create a top-quality
              website that helps you succeed online.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen ml-20 mr-20">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          {/* Card content */}
          <img
            className="h-80 rounded w-full object-cover object-center mb-6"
            src="images/videoproduction.png"
            alt="content"
          />
          <h1 className="text-2xl text-gray-900 font-medium title-font mb-4">
            Video Production
          </h1>
          <p className="leading-relaxed text-base">
            At Visuals Media, we build beautiful and functional websites for
            your business. Our team designs and develops sites that are easy to
            use and look great on any device. Your website will represent your
            brand and meet your needs. Trust us to create a top-quality website
            that helps you succeed online.
          </p>
        </div>
      </div>

      <Production />
    </section>
  );
};

export default Services;
