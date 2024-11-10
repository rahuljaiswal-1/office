import React from 'react'

function MobileApp() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mobile App Development</title>
  <div className='overflow-x-hidden ' >
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n         html,body\n         {\n        overflow-x: hidden;\n         }\n  section {\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  .flip-box {\n    background-color: transparent;\n    width: 600px;\n    /* border: 1px solid #f1f1f1; */\n    height: 350px;\n    perspective: 1000px;\n  }\n\n  .flip-box-inner {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    transition: transform 0.8s;\n    transform-style: preserve-3d;\n  }\n\n  .flip-box:hover .flip-box-inner {\n    transform: rotateY(180deg);\n  }\n\n  .flip-box-front, .flip-box-back {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n  }\n\n  .flip-box-front {\n    color: black;\n  }\n\n  .flip-box-back {\n    color: black;\n    transform: rotateY(180deg);\n  }\n    "
    }}
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    \n    /* Text Animation */\n    .animate-text {\n      white-space: nowrap;\n      overflow: hidden;\n      width: 0;\n      animation: animate-text 5s forwards;\n    }\n  \n    @keyframes animate-text {\n      0% {\n        width: 0;\n      }\n      100% {\n        width: 100%;\n      }\n    }\n  \n    /* Slide-left Animation for Heading and Paragraph */\n    .slide-left {\n      opacity: 0;\n      transform: translateX(-100px);\n      animation: slideRight 1.2s forwards;\n    }\n  \n    @keyframes slideRight {\n      to {\n        opacity: 1;\n        transform: translateX(0);\n      }\n    }\n  \n    /* Responsive Animations and Font Sizes for Mobile */\n    @media (max-width: 640px) {\n      .mobile-slide-left {\n        opacity: 0;\n        transform: translateX(-30px);\n        animation: slideLeftToRight 1.2s forwards;\n      }\n  \n      @keyframes slideLeftToRight {\n        to {\n          opacity: 1;\n          transform: translateX(0);\n        }\n      }\n  \n      /* Adjust font sizes for mobile */\n      .heading-responsive {\n        font-size: 1.5rem; /* Adjust for mobile */\n        line-height: 1.5;\n      }\n  \n      .paragraph-responsive {\n        font-size: 0.9rem; /* Adjust for mobile */\n        line-height: 1.4;\n      }\n    }\n  \n    /* Larger screen adjustments */\n    @media (min-width: 641px) {\n      .heading-responsive {\n        font-size: 2rem; /* Adjust for tablets */\n        line-height: 1.6;\n      }\n  \n      .paragraph-responsive {\n        font-size: 1.1rem; /* Adjust for tablets */\n        line-height: 1.5;\n      }\n    }\n  \n    /* Desktop adjustments */\n    @media (min-width: 1024px) {\n      .heading-responsive {\n        font-size: 3rem; /* Adjust for large screens */\n        line-height: 1.8;\n      }\n  \n      .paragraph-responsive {\n        font-size: 1.2rem; /* Adjust for large screens */\n        line-height: 1.6;\n      }\n    }\n  "
    }}
  />
  <div className="container m-4 sm:m-8 lg:m-14">
    <h1 className="text-7xl font-serif mb-8 slide-left">
      Mobile
      <br /> Application
    </h1>
    <p className="slide-left font-serif paragraph-responsive text-xs sm:text-lg lg:text-[20px] mb-4 sm:mb-6 mobile-slide-left">
      At Geekyness, we specialize in developing sea mless and intuitive mobile{" "}
      <br />
      applications across all major platforms, including iOS, Android, and Cross
      <br />
      -Platform solutions. Our team of skilled developers has in-depth expertise{" "}
      <br />
      in the latest technologies and frameworks, enabling us to create high-
      <br />
      performance, feature-rich apps tailored to your unique requirements.
      <br />
    </p>
  </div>
  <div className="flex flex-col md:flex-row justify-center items-center py-8 md:py-12 space-y-8 md:space-y-0 md:space-x-6 lg:space-x-8">
  <div className="flex w-full max-w-xs md:max-w-sm lg:max-w-md flip-box">
    <div className="bg-gray-200 p-6 md:p-6 lg:p-8 text-center flex-1 h-64 md:h-72 lg:h-80 pt-12 md:pt-16 lg:pt-20 flip-box-inner">
      <div className="flip-box-front">
        <h2 className="font-serif mt-16 mr-14 text-lg md:text-xl lg:text-2xl font-bold mb-4">
          iOS Development
        </h2>
      </div>
      <div className="flip-box-back">
        <p className="font-serif ml-8 text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8">
          Leveraging the power of Swift and Objective-C, we build robust and visually appealing iOS apps that adhere to Apple's stringent design guidelines and provide a delightful user experience.
        </p>
      </div>
    </div>
  </div>

  <div className="flex w-full max-w-xs md:max-w-sm lg:max-w-md flip-box">
    <div className="bg-orange-400 p-6 md:p-6 lg:p-8 text-center flex-1 h-64 md:h-72 lg:h-80 pt-12 md:pt-16 lg:pt-20 flip-box-inner">
      <div className="flip-box-front">
        <h2 className="font-serif mt-16 mr-14 text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Android Development
        </h2>
      </div>
      <div className="flip-box-back">
        <p className="font-serif ml-8 text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8">
          Our Android developers are proficient in Java, Kotlin, and the Android SDK, ensuring your apps are optimized for performance, security, and seamless integration with the Android ecosystem.
        </p>
      </div>
    </div>
  </div>

  <div className="flex w-full max-w-xs md:max-w-sm lg:max-w-md flip-box">
    <div className="bg-gray-200 p-6 md:p-6 lg:p-8 text-center flex-1 h-64 md:h-72 lg:h-80 pt-12 md:pt-16 lg:pt-20 flip-box-inner">
      <div className="flip-box-front">
        <h2 className="font-serif mt-16 mr-14 text-lg md:text-xl lg:text-2xl font-bold mb-4">
          Cross-Platform Development
        </h2>
      </div>
      <div className="flip-box-back">
        <p className="font-serif ml-8 text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8">
          For clients seeking cost-effective solutions and faster time-to-market, we offer cross-platform development using cutting-edge frameworks, enabling us to create apps that run seamlessly on both iOS and Android platforms.
        </p>
      </div>
    </div>
  </div>
</div>

  <div className="bg-gray-200">
    {/* Development Process Heading */}
    <div className="text-center mt-8 p-6 sm:p-10">
      <h1 className="font-serif text-2xl sm:text-3xl font-bold">Development Process</h1>
      <hr className="border-t-2 border-green-500 w-1/2 sm:w-1/4 mx-auto mt-2" />
    </div>
    {/* Process Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 mx-4 sm:mx-12 md:mx-16">
  <div className="text-center process-step p-4 md:p-6">
    <h2 className="font-serif text-3xl md:text-4xl font-bold">01</h2>
    <p className="font-serif mt-4 text-base md:text-lg">
      Ideation and
      <br />
      Requirements Gathering
    </p>
  </div>
  <div className="text-center process-step p-4 md:p-6">
    <h2 className="font-serif text-3xl md:text-4xl font-bold">02</h2>
    <p className="font-serif mt-4 text-base md:text-lg">
      Wireframing and
      <br />
      Prototyping
    </p>
  </div>
  <div className="text-center process-step p-4 md:p-6">
    <h2 className="font-serif text-3xl md:text-4xl font-bold">03</h2>
    <p className="font-serif mt-4 text-base md:text-lg">UI/UX Design</p>
  </div>
  <div className="text-center process-step p-6 md:p-8">
    <h2 className="font-serif text-3xl md:text-4xl font-bold">04</h2>
    <p className="font-serif mt-4 text-base md:text-lg">Development and Testing</p>
  </div>
  <div className="text-center process-step p-6 md:p-8">
    <h2 className="font-serif text-3xl md:text-4xl font-bold">05</h2>
    <p className="font-serif mt-4 text-base md:text-lg">Launch and Support</p>
  </div>
</div>

  </div>
  {/* Features Heading */}
  <div className="font-semibold text-3xl sm:text-4xl ml-4 sm:ml-12 mt-4 slide-left">
    <h1 className='font-serif '>Features</h1>
  </div>
  {/* Features List */}
  <div className="max-w-full sm:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 mt-8 sm:mt-14 slide-left">
    <div className="font-serif bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      User Authentication &amp; Authorization
    </div>
    <div className="font-serif bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Real-time Data Synchronization
    </div>
    <div className="font-serif bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      In-App Purchases and Subscriptions
    </div>
    <div className="font-serif bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Geolocation and Mapping Integration
    </div>
    <div className="font-serif bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Social Media Integration
    </div>
    <div className="font-serif bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Augmented Reality (AR) &amp; Virtual Reality (VR)
    </div>
    <div className="font-serif bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Machine Learning &amp; Artificial Intelligence
    </div>
    <div className="font-serif bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Internet of Things (IoT) Integration
    </div>
    <div className="font-serif bg-orange-400 text-center py-3 sm:py-4 rounded-full text-black hover:bg-gray-200">
      Push Notifications
    </div>
  </div>
  {/* Success Stories Section */}
  <div className="container mx-auto px-4 py-8 mt-8 sm:ml-9">
    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
      <span className="font-serif  border-b-4 border-black">Success Stories</span>
    </h1>
    <p className="font-serif text-base sm:text-lg leading-relaxed mt-4 sm:mt-9">
      Our portfolio showcases a diverse range of successful mobile app
      development projects across various industries, from e-commerce and
      fintech to healthcare and entertainment. Explore our case studies and
      testimonials to see how we've helped businesses like yours achieve their
      mobile goals, drive user engagement, and unlock new revenue streams.
    </p>
  </div>
  <div className="container bg-gray-100 mx-auto py-8">
    <h1 className="m-12 text-3xl font-serif font-bold mb-6">Pricing</h1>
    <div className="m-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <p> At Geekyness, we understand that every project is unique, and our
           pricing model reflects that. We offer flexible pricing options tailored
           to your specific needs, including:</p>
          
            <ul className="list-disc list-inside ml-4">
              <li>Fixed Price: For projects with well-defined requirements and scope.</li>
              <li>Time and Materials: For projects with evolving requirements or ongoing development needs.</li>
              <li>Retainer: For long-term partnerships and dedicated development resources.</li>
            </ul>
             <p>We believe in transparency and provide detailed cost estimates upfront, ensuring 
                there are no surprises along the way.</p>
      </div>
      <div className="bg-orange-400  text-black p-6 relative">
        <div className=" lg:pt-8 absolute top-4 right-4 text-2xl">1</div>
        <h2 className="lg:pt-8 text-2xl font-bold mb-4 ">Sketches</h2>
        <p className=''>
          Share information on a previous project here to attract new clients.
          Provide a brief summary to help visitors understand the context and
          background of the work. Add details about why this project was created
          and what makes it significant.
        </p>
      </div>
      <div className="bg-gray-200 text-black p-6 relative">
        <div className="lg:pt-8 absolute top-4 right-4 text-2xl ">2</div>
        <h2 className="lg:pt-8 text-2xl font-bold mb-4 ">Illustrations</h2>
        <p>
          Share information on a previous project here to attract new clients.
          Provide a brief summary to help visitors understand the context and
          background of the work. Add details about why this project was created
          and what makes it significant.
        </p>
      </div>
    </div>
    <div className="m-8 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="bg-gray-200 text-black p-6 relative">
        <div className="absolute top-4 right-4 text-2xl">3</div>
        <h2 className="text-2xl font-bold mb-4">Renders</h2>
        <p>
          Share information on a previous project here to attract new clients.
          Provide a brief summary to help visitors understand the context and
          background of the work. Add details about why this project was created
          and what makes it significant.
        </p>
      </div>
      <div className="bg-orange-400 text-black p-6 relative">
        <div className="absolute top-4 right-4 text-2xl">4</div>
        <h2 className="text-2xl font-bold mb-4">3D Art</h2>
        <p>
          Share information on a previous project here to attract new clients.
          Provide a brief summary to help visitors understand the context and
          background of the work. Add details about why this project was created
          and what makes it significant.
        </p>
      </div>
    </div>
  </div>
  {/* Newsletter Section */}
  <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-5xl font-light mb-4 sm:mb-6 md:mb-0 leading-tight">
          FOMO got
          <br />
          you puzzled?
        </h2>
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 mb-4">
            Subscribe to our weekly newsletter.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required=""
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Email *"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label
                htmlFor="subscribe"
                className="ml-2 block text-sm text-gray-900"
              >
                Yes, subscribe me to your newsletter.
              </label>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="bg-orange-400 rounded-lg overflow-hidden h-52">
        <div className="flex justify-center items-center py-12">
          <img
            className="w-1/3"
            src="https://static.wixstatic.com/media/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  </div>
</>

    </div>
  )
}

export default MobileApp
