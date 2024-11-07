import React from 'react'

function DigitalMarketting() {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Desktop Application Development</title>
 
  {/* Content with animations */}
  <div className="container m-4 sm:m-8 lg:m-14">
    <h1 className="text-6xl questrial sans-serif mb-8 slide-left">
      Digital
      <br />
      Marketting
    </h1>
    <p className="slide-left paragraph-responsive text-xs sm:text-lg lg:text-[20px] mb-4 sm:mb-6 mobile-slide-left">
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
  <h1 className="m-12 text-2xl md:text-3xl font-bold text-black mb-6">
    Services Offered
  </h1>
  {/* First Section */}
  <div className="container vert-move mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-8 lg:my-12">
    <div className="flex flex-col lg:flex-row justify-center mt-4 space-y-6 lg:space-y-0 lg:space-x-8">
      {/* Content Marketing Section */}
      <div className="bg-gray-200 p-4 sm:p-6 rounded-lg shadow-lg w-full lg:w-1/3">
        <div className="flex items-center mb-4">
          <i className="fas fa-sun text-xl sm:text-2xl" />
          <h2 className="ml-2 text-lg sm:text-xl font-bold">
            Content Marketing
          </h2>
        </div>
        <ul className="text-sm sm:text-base questrial sans-serif list-disc pl-5 space-y-2">
          <li>Content strategy development aligned with business goals</li>
          <li>Blog writing and management</li>
          <li>Ebook and whitepaper creation</li>
          <li>Infographic design and distribution</li>
          <li>Video content production and optimization</li>
        </ul>
      </div>
      {/* Email Marketing Section */}
      <div className="bg-orange-400 p-4 sm:p-6 rounded-lg shadow-lg w-full lg:w-1/3 text-black">
        <div className="flex items-center mb-4">
          <i className="fas fa-envelope text-xl sm:text-2xl text-white" />
          <h2 className="ml-2 text-lg sm:text-xl font-bold">Email Marketing</h2>
        </div>
        <ul className="text-sm sm:text-base questrial sans-serif list-disc pl-5 space-y-2">
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
          <h2 className="ml-2 text-lg sm:text-xl font-bold">
            Social Media Marketing (SMM)
          </h2>
        </div>
        <ul className="text-sm sm:text-base questrial sans-serif list-disc pl-5 space-y-2">
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
          <h2 className="ml-2 text-lg sm:text-xl font-bold">
            Search Engine Optimization (SEO)
          </h2>
        </div>
        <ul className="text-sm sm:text-base questrial sans-serif list-disc pl-5 space-y-2">
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
          <h2 className="ml-2 text-lg sm:text-xl font-bold">
            Search Engine Marketing (SEM)
          </h2>
        </div>
        <ul className="text-sm sm:text-base questrial sans-serif list-disc pl-5 space-y-2">
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
    <h1 className="border-b border-black text-2xl lg:text-3xl font-semibold mb-4">
      Our Approach
    </h1>
    <div className="flex flex-col lg:flex-row text-lg lg:text-xl">
      {/* Left Text Section */}
      <div className="w-full lg:w-1/2 lg:pr-8">
        <div className="border-b font-semibold mb-4">
          <h2 className="madefor-display-bold text-2xl text-[18px]">
            Discovery and Planning
          </h2>
        </div>
        <p className="text-[15px] madefor-text mb-8 text-base">
          We begin with thorough requirements gathering, stakeholder interviews,
          and workflow analysis to define clear project objectives and technical
          specifications.
        </p>
        <div className="border-b font-semibold mb-4">
          <h2 className="madefor-display-bold text-2xl text-[18px]">
            Development and Integration
          </h2>
        </div>
        <p className="text-[15px] madefor-text mb-8 text-base">
          Using agile methodologies, we develop your desktop application with
          regular sprints and client check-ins, ensuring seamless integration
          with existing systems and third-party services.
        </p>
        <div className="border-b font-semibold mb-4">
          <h2 className="madefor-display-bold text-2xl text-[18px]">
            Deployment and Ongoing Support
          </h2>
        </div>
        <p className="text-[15px] madefor-text mb-8 text-base">
          We manage smooth deployment with installer creation and user training,
          followed by continued support and maintenance to ensure your
          application remains up-to-date and functional.
        </p>
        <div className="border-b font-semibold mb-4">
          <h2 className="madefor-display-bold text-2xl text-[18px]">
            Design and Prototyping
          </h2>
        </div>
        <p className="text-[15px] madefor-text mb-8 text-base">
          Our team creates detailed wireframes and interactive prototypes,
          allowing for early visualization and feedback before full-scale
          development begins.
        </p>
        <div className="border-b font-semibold mb-4">
          <h2 className="madefor-display-bold text-2xl text-[18px]">
            Comprehensive Testing
          </h2>
        </div>
        <p className="text-[15px] madefor-text mb-8 text-base">
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
    <h1 className="text-[22px] md:text-[28px] madefor-text mb-6">
      Case Studies and Results
    </h1>
    <div className="grid gap-6 md:gap-8 m-2 md:m-4 slide-left md:grid-cols-2">
      {/* Responsive grid */}
      <div className="flex flex-col bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-xl md:text-2xl questrial sans-serif font-bold mb-4">
          FinTech Revolution: AI-Powered Fraud Detection
        </h2>
        <p className="font-bold">Client</p>
        <p className="mb-2 md:mb-4">Leading hospital network</p>
        <p className="font-bold">Challenge</p>
        <p className="mb-2 md:mb-4">
          92% reduction in fraudulent activities, saving $10M annually
        </p>
        <p className="font-bold">Solution</p>
        <p className="mb-2 md:mb-4">
          Implemented machine learning model for real-time fraud detection
        </p>
        <p className="font-bold">Result</p>
        <p>
          30% increase in early diagnoses, potentially saving countless lives
        </p>
      </div>
      <div className="flex flex-col bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-xl md:text-2xl questrial sans-serif font-bold mb-4">
          Healthcare Innovator: AI-Assisted Diagnosis
        </h2>
        <p className="font-bold">Client</p>
        <p className="mb-2 md:mb-4">Leading hospital network</p>
        <p className="font-bold">Challenge</p>
        <p className="mb-2 md:mb-4">Improving early disease detection</p>
        <p className="font-bold">Solution</p>
        <p className="mb-2 md:mb-4">
          Developed deep learning model for medical image analysis
        </p>
        <p className="font-bold">Result</p>
        <p>
          30% increase in early diagnoses, potentially saving countless lives
        </p>
      </div>
    </div>
  </div>
  {/* Horizontal line to separate case studies */}
  <div className="shadow-md container mx-auto my-6 p-6 slide-left">
    <h2 className="text-xl md:text-2xl questrial sans-serif font-bold mb-4">
      Customer Service Evolution: Intelligent Chatbot
    </h2>
    <div className="space-y-4 md:space-y-6">
      <div>
        <h2 className="text-[14px] md:text-[15px] questrial sans-serif text-lg font-semibold mb-2 md:mb-4">
          Client
        </h2>
        <p>Telecommunications provider</p>
      </div>
      <div>
        <h2 className="text-[14px] md:text-[15px] questrial sans-serif text-lg font-semibold mb-2 md:mb-4">
          Challenge
        </h2>
        <p>Improving customer support efficiency</p>
      </div>
      <div>
        <h2 className="text-[14px] md:text-[15px] questrial sans-serif text-lg font-semibold mb-2 md:mb-4">
          Solution
        </h2>
        <p>Developed NLP-powered chatbot for 24/7 customer assistance</p>
      </div>
      <div>
        <h2 className="text-[14px] md:text-[15px] questrial sans-serif text-lg font-semibold mb-2 md:mb-4">
          Result
        </h2>
        <p>
          50% reduction in support tickets, 30% increase in customer
          satisfaction scores
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container sm:m-10 p-4 sm:p-8">
      <h1 className="text-base sm:text-lg font-semibold mb-4">Pricing</h1>
      <ul className="text-sm sm:text-base list-disc pl-5 mb-8">
        <li>
          All illustrations are customized to every project’s needs/specs, and
          our pricing methods reflect that. We offer flexible pricing options
          tailored to your specific needs, including:
        </li>
        <li>Time-based: Pricing based on the time spent on the project.</li>
        <li>
          Project-based: Fixed price for the entire project, regardless of time
          spent.
        </li>
        <li>
          Revisions: Pricing for any additional revisions or changes beyond the
          initial project scope.
        </li>
        <li>
          Extras: Pricing for any additional services or add-ons requested
          during the project.
        </li>
        <li>
          We believe in keeping our pricing methods detailed and structured to
          reflect everything that you are getting along the way.
        </li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        {/* Sketches */}
        <div className="transition duration-150 ease-out hover:ease-in bg-orange-400 p-4 sm:p-8 hover:bg-orange-300 relative">
          <div className="absolute top-2 left-2">
            <div className="h-1 w-6 sm:w-8 bg-black mb-2" />
            <div className="h-1 w-3 sm:w-4 bg-black" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Sketches</h2>
          <p className="text-xs sm:text-sm mb-4">
            Price will vary for every project based on the content and
            background of the work. Additional details may change if more
            material and work needs to get done.
          </p>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-4xl sm:text-6xl font-bold">
            1
          </div>
        </div>
        {/* Illustrations */}
        <div className="bg-orange-400 p-4 sm:p-8 hover:bg-orange-300 relative">
          <div className="absolute top-2 left-2">
            <div className="h-1 w-6 sm:w-8 bg-black mb-2" />
            <div className="h-1 w-3 sm:w-4 bg-black" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">
            Illustrations
          </h2>
          <p className="text-xs sm:text-sm mb-4">
            Price will vary for every project based on the content and
            background of the work. Additional details may change if more
            material and work needs to get done.
          </p>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-4xl sm:text-6xl font-bold">
            2
          </div>
        </div>
        {/* Renders */}
        <div className="bg-orange-400 p-4 sm:p-8 hover:bg-orange-300 relative">
          <div className="absolute top-2 left-2">
            <div className="h-1 w-6 sm:w-8 bg-black mb-2" />
            <div className="h-1 w-3 sm:w-4 bg-black" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Renders</h2>
          <p className="text-xs sm:text-sm mb-4">
            Price will vary for every project based on the content and
            background of the work. Additional details may change if more
            material and work needs to get done.
          </p>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-4xl sm:text-6xl font-bold">
            3
          </div>
        </div>
        {/* 3D Art */}
        <div className="bg-orange-400 p-4 sm:p-8 hover:bg-orange-300 relative">
          <div className="absolute top-2 left-2">
            <div className="h-1 w-6 sm:w-8 bg-black mb-2" />
            <div className="h-1 w-3 sm:w-4 bg-black" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold mb-2">3D Art</h2>
          <p className="text-xs sm:text-sm mb-4">
            Price will vary for every project based on the content and
            background of the work. Additional details may change if more
            material and work needs to get done.
          </p>
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-4xl sm:text-6xl font-bold">
            4
          </div>
        </div>
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
  {/* Footer Section */}
  {/* <section className="bg-white">
    <div className="p-4 sm:p-10 m-4 sm:m-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8">
        <div className="space-y-2">
          <a href="#" className="block text-green-600 hover:underline">
            Home
          </a>
          <a href="#" className="block text-gray-600 hover:underline">
            About
          </a>
          <div className="relative">
            <a href="#" className="block text-gray-600 hover:underline">
              Services
            </a>
            <svg
              className="w-4 h-4 absolute right-0 top-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="relative">
            <a href="#" className="block text-gray-600 hover:underline">
              Solutions
            </a>
            <svg
              className="w-4 h-4 absolute right-0 top-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <a href="#" className="block text-gray-600 hover:underline">
            Contact
          </a>
        </div>
        <div className="space-y-2 text-gray-600">
          <p>Bhopal Road,</p>
          <p>Nasrullaganj, Sehore 466331</p>
          <p>info@geekyness.com</p>
          <p>+91 9755-36755</p>
        </div>
        <div className="space-y-2">
          <a href="#" className="block text-gray-600 hover:underline">
            LinkedIn
          </a>
          <a href="#" className="block text-gray-600 hover:underline">
            Instagram
          </a>
          <a href="#" className="block text-gray-600 hover:underline">
            Facebook
          </a>
          <a href="#" className="block text-gray-600 hover:underline">
            X
          </a>
        </div>
        <div>
          <a href="#" className="block text-gray-600 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200 text-right text-gray-500">
        © 2024 by GEEKYNESS
      </div>
    </div>
  </section> */}
</>

    </div>
  )
}

export default DigitalMarketting
