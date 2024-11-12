import React from 'react'

function Desktop() {
  return (
  <div>
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Desktop Application Development</title>
  <div className='overflow-x-hidden ' >
  <div className="container m-4 sm:m-8 lg:m-14">
    <h1 className="text-6xl font-serif mb-8 slide-left">
      Desktop
      <br /> Application
    </h1>
    <p className="slide-left font-serif paragraph-responsive text-xs sm:text-lg lg:text-[20px] mb-4 sm:mb-6 mobile-slide-left">
      At Geekyness, we drive your online success through data-driven strategies
      <br />
      and cutting-edge techniques. Our holistic approach to digital marketing
      <br />
      ensures your brand stands out in the crowded digital landscape,
      <br />
      reaching your target audience effectively and driving measurable results.
    </p>
  </div>
  <h1 className="font-serif text-3xl ml-9 font-semibold text-black">
    Services offered
  </h1>{" "}
  <br />
  <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-gray-200 p-8 rounded-lg">
      <div className="flex items-center mb-4">
        <i className="fas fa-sun text-2xl" />
      </div>
      <h2 className="font-serif text-2xl font-bold mb-4">
        Custom Desktop Application Development
      </h2>
      <ul className="font-serif list-disc pl-5 space-y-2">
        <li>Bespoke software solutions tailored to your unique requirements</li>
        <li>Cross-platform development for Windows, macOS, and Linux</li>
        <li>Integration with existing systems and databases</li>
        <li>User-friendly interface design and development</li>
      </ul>
    </div>
    <div className="bg-orange-400 text-black p-8 rounded-lg">
      <div className="flex items-center mb-4">
        <i className="fas fa-sun text-2xl" />
      </div>
      <h2 className="font-serif text-2xl font-bold mb-4">
        Legacy Application Modernization
      </h2>
      <ul className="font-serif list-disc pl-5 space-y-2">
        <li>Upgrading outdated desktop applications</li>
        <li>Improving performance and adding new features</li>
        <li>Ensuring compatibility with modern operating systems</li>
        <li>Migrating to newer technologies and frameworks</li>
      </ul>
    </div>
    <div className="bg-gray-200 p-8 rounded-lg">
      <div className="flex items-center mb-4">
        <i className="fas fa-sun text-2xl" />
      </div>
      <h2 className="font-serif text-2xl font-bold mb-4">
        Desktop Application Integration
      </h2>
      <ul className=" font-serif list-disc pl-5 space-y-2">
        <li>Connecting desktop apps with cloud services</li>
        <li>Integrating with third-party APIs and services</li>
        <li>Developing plugins and extensions for existing applications</li>
        <li>Creating sync capabilities for offline and online functionality</li>
      </ul>
    </div>
  </div>
  <div className="flex justify-center py-16">
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      <div className="bg-orange-400 text-black p-8 rounded-lg w-full md:w-96">
        <div className="flex items-center mb-4">
          <i className="fas fa-sun text-2xl" />
        </div>
        <h2 className="font-serif text-2xl font-bold mb-4">
          Desktop Application Maintenance and Support
        </h2>
        <ul className="font-serif list-disc pl-5 space-y-2">
          <li>Regular updates and feature enhancement</li>
          <li>Bug fixes and performance optimization</li>
          <li>Technical support and troubleshooting</li>
          <li>Security patches and vulnerability management</li>
        </ul>
      </div>
      <div className="bg-orange-400 p-8 rounded-lg w-full md:w-96">
        <div className="flex items-center mb-4">
          <i className="fas fa-sun text-2xl" />
        </div>
        <h2 className="font-serif text-2xl font-bold mb-4">
          Desktop Application Testing &amp; Quality Assurance
        </h2>
        <ul className="font-serif list-disc pl-5 space-y-2">
          <li>
            Comprehensive testing across multiple platforms and configurations
          </li>
          <li>Automated testing implementation for efficient QA processes</li>
          <li>User acceptance testing (UAT) coordination</li>
          <li>Performance and security testing</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container mx-auto mt-8 px-4">
    <h1 className="font-serif text-2xl font-bold mb-4">Our Approach</h1>
    <div className="flex flex-col lg:flex-row">
      {/* Text section */}
      <div className="w-full lg:w-1/2 lg:pr-8">
        <div className="border-b border-black mb-4">
          <h2 className="font-serif text-xl font-bold m-3">Discovery and Planning</h2>
        </div>
        <p className="font-serif mb-8 m-3">
          We begin with thorough requirements gathering, stakeholder interviews,
          and workflow analysis to define clear project objectives and technical
          specifications.
        </p>
        <div className="border-b border-black mb-4">
          <h2 className="font-serif text-xl font-bold m-3">Development and Integration</h2>
        </div>
        <p className=" font-serif mb-8 m-3">
          Using agile methodologies, we develop your desktop application with
          regular sprints and client check-ins, ensuring seamless integration
          with existing systems and third-party services.
        </p>
        <div className="border-b border-black mb-4">
          <h2 className="font-serif text-xl font-bold m-3">
            Deployment and Ongoing Support
          </h2>
        </div>
        <p className="font-serif mb-8 m-3">
          We manage smooth deployment with installer creation and user training,
          followed by continued support and maintenance to ensure your
          application remains up-to-date and functional.
        </p>
        <div className="border-b border-black mb-4">
          <h2 className="font-serif text-xl font-bold m-3">Design and Prototyping</h2>
        </div>
        <p className="font-serif mb-8 m-3">
          Our team creates detailed wireframes and interactive prototypes,
          allowing for early visualization and feedback before full-scale
          development begins.
        </p>
        <div className="border-b border-black mb-4">
          <h2 className="font-serif text-xl font-bold m-3">Comprehensive Testing</h2>
        </div>
        <p className="font-serif mb-8 m-3">
          We conduct rigorous testing throughout the development process,
          including unit testing, integration testing, and user acceptance
          testing to guarantee a high-performance, bug-free application.
        </p>
      </div>
      {/* Image section */}
      <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
        <img
          alt="A man and a woman smiling at each other, the woman is wearing an orange sweater and the man is wearing a purple sweater."
          className="w-full h-auto"
          src="https://storage.googleapis.com/a1aa/image/fHdXbdnOLBT9Mi1uUeeBdxabkUnULAUszbDQVxSowLdbWEGnA.jpg"
          width={800}
          height={400}
        />
      </div>
    </div>
  </div>
  <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 mt-12 ml-4 sm:ml-8 slide-left">
    Technologies We Use
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 slide-left">
    <div className="font-serif bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      Electron for cross-platform applications
    </div>
    <div className="font-serif bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      .NET Framework and .NET Core for Windows applications
    </div>
    <div className="font-serif bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      Qt for cross-platform development
    </div>
    <div className="font-serif bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      Java for platform-independent applications
    </div>
    <div className="font-serif bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      Python for rapid development &amp; data-intensive applications
    </div>
    <div className="font-serif bg-orange-400 text-black p-4 rounded-full text-center hover:bg-gray-200">
      C++ for high-performance applications
    </div>
  </div>
  <div className="container mx-auto mt-8">
    <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mt-16 mb-16">
      Case Studies and Results
    </h1>
    <hr className="border-t-2 border-gray-300 my-4" />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="bg-white p-8 shadow-md">
        <h2 className="font-serif text-2xl  font-serif font-bold mb-4">
          Inventory Management System
        </h2>
        <p className="font-serif mt-4">
          <span className="font-serif font-bold">Client</span>
          <br />
          Manufacturing Company XYZ
        </p>
        <p className="font-serif mt-4">
          <span className="font-serif font-bold">Challenge</span>
          <br />
          Streamline inventory tracking across multiple warehouses
        </p>
        <p className="font-serif mt-4">
          <span className="font-serif font-bold">Solution</span>
          <br />
          Custom desktop application with real-time syncing and reporting
        </p>
        <p className="font-serif mt-4">
          <span className="font-serif font-bold">Result</span>
          <br />
          40% reduction in inventory discrepancies, 25% increase in operational
          efficiency
        </p>
      </div>
      <div className="bg-white p-8 shadow-md">
        <h2 className="font-serif text-2xl  font-serif font-bold">
          Financial Analysis Tool
        </h2>
        <p className="mt-4">
          <span className="font-serif font-bold">Client</span>
          <br />
          Investment Firm ABC
        </p>
        <p className="font-serif mt-4">
          <span className="font-bold">Challenge</span>
          <br />
          Create a high-performance application for complex financial modeling
        </p>
        <p className="font-serif mt-4">
          <span className="font-serif font-bold">Solution</span>
          <br />
          Desktop application with advanced algorithms and data visualization
        </p>
        <p className="font-serif mt-4">
          <span className="font-serif font-bold">Result</span>
          <br />
          70% faster analysis time, enabling real-time decision making
        </p>
      </div>
      <div className="bg-white p-8 shadow-md">
        <h1 className=" text-2xl  font-serif font-bold mb-4">
          Patient Management System
        </h1>
        <div className="font-serif mb-4">
          <h2 className="font-serif text-lg sm:text-xl font-bold">Client</h2>
          <p>Healthcare Provider DEF</p>
        </div>
        <div className="font-serif mb-4">
          <h2 className="font-serif text-lg sm:text-xl font-bold">Challenge</h2>
          <p>Develop a secure, HIPAA-compliant patient records system</p>
        </div>
        <div className="font-serif mb-4">
          <h2 className="font-serif text-lg sm:text-xl font-bold">Solution</h2>
          <p>
            Cross-platform desktop application with robust security features
          </p>
        </div>
        <div className="font-serif mb-4">
          <h2 className="font-serif text-lg sm:text-xl font-bold">Result</h2>
          <p>
            99.9% uptime, 50% reduction in administrative tasks, full regulatory
            compliance
          </p>
        </div>
      </div>
    </div>
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
          <p>We believe in transparency and provide detailed cost estimates upfront, ensuring there
             are no surprises along the way.
          </p>
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

export default Desktop

