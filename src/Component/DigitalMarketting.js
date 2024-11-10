import React from 'react'

function DigitalMarketting() {
  return (
  <div className='overflow-x-hidden'>
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Desktop Application Development</title>
 
  {/* Content with animations */}
  <div className="container m-4 sm:m-8 lg:m-14">
    <h1 className="text-6xl font-serif mb-8 slide-left">
      Digital
      <br />
      Marketting
    </h1>
    <p className=" font-serif slide-left paragraph-responsive text-xs sm:text-lg lg:text-[20px] mb-4 sm:mb-6 mobile-slide-left">
      At Geekyness, we drive your online success through data-driven
      <br />
      strategies and cutting-edge techniques. Our holistic approach to
      <br />
      digital marketing ensures your brand stands out in the crowded
      <br />
      digital landscape, reaching your target audience effectively and driving
      <br />
      measurable results.
    </p>
  </div>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      .move {\n        opacity: 0;\n        transform: translateY(-20px);\n        animation: moveDown 1s forwards;\n      }\n\n      @keyframes moveDown {\n        to {\n          opacity: 1;\n          transform: translateY(0);\n        }\n      }\n\n      .vert-move {\n        opacity: 0;\n        transform: translateY(-30px);\n        animation: moveDown 2s forwards;\n      }\n    "
    }}
  />
  <h1 className=" font[-serif m-12 text-2xl md:text-3xl font-bold text-black mb-6">
    Services Offered
  </h1>
  {/* First Section */}
  <div className="container vert-move mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-8 lg:my-12">
    <div className="flex flex-col lg:flex-row justify-center mt-4 space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Content Marketing Section */}
      <div className="bg-gray-200 p-4 sm:p-6 rounded-lg shadow-lg w-full lg:w-1/3">
        <div className=" flex items-center mb-4">
          <i className="fas fa-sun text-xl sm:text-2xl" />
          <h2 className="font-serif text- ml-2 text-lg sm:text-xl font-bold">
            Content Marketing
          </h2>
        </div>
        <ul className=" font-serif text-sm sm:text-base questrial sans-serif list-disc pl-5 space-y-2">
          <li>Content strategy development aligned with business goals</li>
          <li>Blog writing and management</li>
          <li>Ebook and whitepaper creation</li>
          <li>Infographic design and distribution</li>
          <li>Video conten  t production and optimization</li>
        </ul>
      </div>
      {/* Email Marketing Section */}
      <div className="bg-orange-400 p-4 sm:p-6 rounded-lg shadow-lg w-full lg:w-1/3 text-black">
        <div className="flex items-center mb-4">
          <i className="fas fa-envelope text-xl sm:text-2xl text-white" />
          <h2 className="font-serif ml-2 text-lg sm:text-xl font-bold">Email Marketing</h2>
        </div>
        <ul className="font-serif text-sm sm:text-base questrial sans-serif list-disc pl-5 space-y-2">
          <li>Email strategy development and list management</li>
          <li>Newsletter design and copywriting</li>
          <li>Automated email sequence creation</li>
          <li>A/B testing and performance optimization</li>
          <li>Integration with CRM and other marketing tools</li>
        </ul>
      </div>
      {/* Social Media Section */}
      <div className="bg-gray-200 p-4 sm:p-6 rounded-lg w-full lg:w-1/3">
        <div className="flex items-center mb-4">
          <i className="fas fa-share-alt text-xl sm:text-2xl" />
          <h2 className="font-serif ml-2 text-lg sm:text-xl font-bold">
            Social Media Marketing (SMM)
          </h2>
        </div>
        <ul className="font-serif text-sm sm:text-base questrial sans-serif list-disc pl-5 space-y-2">
          <li>Strategic social media planning and execution</li>
          <li>
            Content creation and curation for platforms (Facebook, Instagram,
            LinkedIn, Twitter, TikTok)
          </li>
          <li>Community management and engagement</li>
          <li>Paid social media advertising campaigns</li>
          <li>Influencer marketing strategy and management</li>
        </ul>
      </div>
    </div>
  </div>
  {/* Second Section */}
  <div className="container vert-move mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-8 lg:my-12">
    <div className="flex flex-col lg:flex-row justify-center mt-4 space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Search Engine Optimization Section */}
      <div className="bg-orange-400 p-4 sm:p-6 rounded-lg w-full lg:w-1/2">
        <div className="flex items-center mb-4">
          <i className="fas fa-search text-xl sm:text-2xl" />
          <h2 className="font-serif ml-2 text-lg sm:text-xl font-bold">
            Search Engine Optimization (SEO)
          </h2>
        </div>
        <ul className="font-serif text-sm sm:text-base questrial sans-serif list-disc pl-5 space-y-2">
          <li>Comprehensive website audits and optimization</li>
          <li>Keyword research and strategy development</li>
          <li>On-page and technical SEO implementation</li>
          <li>Link building and content optimization</li>
          <li>Local SEO for businesses targeting specific geographic areas</li>
        </ul>
      </div>
      {/* Search Engine Marketing Section */}
      <div className="bg-gray-200 p-4 sm:p-6 rounded-lg w-full lg:w-1/2 text-black">
        <div className="flex items-center mb-4">
          <i className="fas fa-bullhorn text-xl sm:text-2xl" />
          <h2 className="font-serif ml-2 text-lg sm:text-xl font-bold">
            Search Engine Marketing (SEM)
          </h2>
        </div>
        <ul className="font-serif text-sm sm:text-base questrial sans-serif list-disc pl-5 space-y-2">
          <li>Google Ads and Microsoft Advertising campaign management</li>
          <li>Keyword research and ad copy creation</li>
          <li>Landing page optimization for higher conversion rates</li>
          <li>Bid management and budget optimization</li>
          <li>Remarketing and display advertising</li>
        </ul>
      </div>
    </div>
  </div>
  {/*Our Approach*/}
  <div className="container mx-auto px-4 lg:px-20 mt-10">
    <h1 className=" font-serif border-b border-black text-2xl lg:text-3xl font-semibold mb-4">
      Our Approach
    </h1>
    <div className="flex flex-col lg:flex-row text-lg lg:text-xl">
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 lg:pr-8">
        <div className="border-b font-semibold mb-4">
          <h2 className=" font-serif  madefor-display-bold text-2xl text-[18px]">
            Discovery and Planning
          </h2>
        </div>
        <p className="text-[15px] font-serif mb-8 text-base">
          We begin with thorough requirements gathering, stakeholder interviews,
          and workflow analysis to define clear project objectives and technical
          specifications.
        </p>
        <div className=" font-serif border-b font-semibold mb-4">
          <h2 className="madefor-display-bold text-2xl text-[18px]">
            Development and Integration
          </h2>
        </div>
        <p className="text-[15px] font-serif mb-8 text-base">
          Using agile methodologies, we develop your desktop application with
          regular sprints and client check-ins, ensuring seamless integration
          with existing systems and third-party services.
        </p>
        <div className="font-serif border-b font-semibold mb-4">
          <h2 className="madefor-display-bold text-2xl text-[18px]">
            Deployment and Ongoing Support
          </h2>
        </div>
        <p className="font-serif text-[15px] madefor-text mb-8 text-base">
          We manage smooth deployment with installer creation and user training,
          followed by continued support and maintenance to ensure your
          application remains up-to-date and functional.
        </p>
        <div className="font-serif border-b font-semibold mb-4">
          <h2 className="madefor-display-bold text-2xl text-[18px]">
            Design and Prototyping
          </h2>
        </div>
        <p className="text-[15px] font-serif mb-8 text-base">
          Our team creates detailed wireframes and interactive prototypes,
          allowing for early visualization and feedback before full-scale
          development begins.
        </p>
        <div className="border-b font-semibold mb-4">
          <h2 className="font-serif madefor-display-bold text-2xl text-[18px]">
            Comprehensive Testing
          </h2>
        </div>
        <p className="font-serif text-[15px] madefor-text mb-8 text-base">
          We conduct rigorous testing throughout the development process,
          including unit testing, integration testing, and user acceptance
          testing to guarantee a high-performance, bug-free application.
        </p>
      </div>
      {/* Right Image Section */}
      <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
        <img
          alt="A man and a woman smiling at each other, the woman is wearing an orange sweater and the man is wearing a purple sweater."
          className="w-full h-auto object-cover"
          src="https://storage.googleapis.com/a1aa/image/fHdXbdnOLBT9Mi1uUeeBdxabkUnULAUszbDQVxSowLdbWEGnA.jpg"
        />
      </div>
    </div>
  </div>
  {/*Case Study and study */}
  <div className="shadow-md container mx-auto my-6 p-6">
    <h1 className="ml-10 text-[22px] md:text-[28px] font-serif mb-6">
      Case Studies and Results
    </h1>
    <div className="grid gap-6 md:gap-8 m-2 md:m-4 slide-left md:grid-cols-2">
      {/* Responsive grid */}
      <div className="flex flex-col bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-4">
          FinTech Revolution: AI-Powered Fraud Detection
        </h2>
        <p className="font-bold font-serif">Client</p>
        <p className="mb-2 md:mb-4 font-serif">Leading hospital network</p>
        <p className="font-bold font-serif">Challenge</p>
        <p className="font-serif mb-2 md:mb-4">
          92% reduction in fraudulent activities, saving $10M annually
        </p>
        <p className="font-serif font-bold">Solution</p>
        <p className="font-serif mb-2 md:mb-4">
          Implemented machine learning model for real-time fraud detection
        </p>
        <p className="font-serif font-bold">Result</p>
        <p className='font-serif'>
          30% increase in early diagnoses, potentially saving countless lives
        </p>
      </div>
      <div className="flex flex-col bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-4">
          Healthcare Innovator: AI-Assisted Diagnosis
        </h2>
        <p className="font-serif font-bold">Client</p>
        <p className="font-serif mb-2 md:mb-4">Leading hospital network</p>
        <p className="font-serif font-bold">Challenge</p>
        <p className="font-serif mb-2 md:mb-4">Improving early disease detection</p>
        <p className="font-serif font-bold">Solution</p>
        <p className="font-serif mb-2 md:mb-4">
          Developed deep learning model for medical image analysis
        </p>
        <p className="font-serif font-bold">Result</p>
        <p className='font-serif'>
          30% increase in early diagnoses, potentially saving countless lives
        </p>
      </div>
    </div>
  </div>
  {/* Horizontal line to separate case studies */}
  <div className="lg:ml-10 shadow-md container mx-auto my-6 p-6 slide-left md:ml-28">
    <h2 className=" text-xl md:text-2xl font-serif   font-bold mb-4">
      Customer Service Evolution: Intelligent Chatbot
    </h2>
    <div className="font-serif space-y-4 md:space-y-6">
      <div>
        <h2 className="text-[14px] md:text-[15px] font-serif text-lg font-semibold mb-2 md:mb-4">
          Client
        </h2>
        <p className='font-serif'>Telecommunications provider</p>
      </div>
      <div>
        <h2 className="text-[14px] md:text-[15px] font-serif text-lg font-semibold mb-2 md:mb-4">
          Challenge
        </h2>
        <p className='font-serif'>Improving customer support efficiency</p>
      </div>
      <div>
        <h2 className="text-[14px] md:text-[15px] font-serif text-lg font-semibold mb-2 md:mb-4">
          Solution
        </h2>
        <p className='font-serif'>Developed NLP-powered chatbot for 24/7 customer assistance</p>
      </div>
      <div>
        <h2 className="text-[14px] md:text-[15px] font-serif text-lg font-semibold mb-2 md:mb-4">
          Result
        </h2>
        <p className='font-serif'>
          50% reduction in support tickets, 30% increase in customer
          satisfaction scores
        </p>
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
  
</>

    </div>
  )
}

export default DigitalMarketting
