import React from 'react'

function AISolution() {
  return (
  <div>
  <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AISolution</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      html,\n    body {\n     font-family: 'questrial', sans-serif;\n    }\n  \n"
    }}
  />
  
  {/* div Content */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        /* Text Animation */\n        .animate-text {\n          white-space: nowrap;\n        width: 0;\n          animation: animate-text 5s forwards;\n        }\n      \n        @keyframes animate-text {\n          0% {\n            width: 0;\n          }\n          100% {\n            width: 100%;\n          }\n        }\n      \n        /* Slide-left Animation */\n        .slide-left {\n          opacity: 0;\n          transform: translateX(-100px);\n          animation: slideRight 1.2s forwards;\n        }\n      \n        @keyframes slideRight {\n          to {\n            opacity: 1;\n            transform: translateX(0);\n          }\n        }\n      \n        /* Responsive Heading and Paragraph for Mobile */\n        @media (max-width: 640px) {\n          .mobile-slide-left {\n            opacity: 0;\n            transform: translateX(-30px);\n            animation: slideMobile 1.2s forwards;\n          }\n      \n          @keyframes slideMobile {\n            to {\n              opacity: 1;\n              transform: translateX(0);\n            }\n          }\n      \n          /* Font-size adjustments for mobile */\n          h1 {\n            font-size: 2.5rem; /* Smaller heading size on mobile */\n          }\n      \n          p {\n            font-size: 0.875rem; /* Smaller paragraph size */\n          }\n        }\n      \n        /* Larger screen adjustments */\n        @media (min-width: 641px) {\n          h1 {\n            font-size: 3.5rem; /* Medium heading size */\n          }\n      \n          p {\n            font-size: 1rem; /* Medium paragraph size */\n          }\n        }\n      \n        @media (min-width: 1024px) {\n          h1 {\n            font-size: 4.5rem; /* Larger heading size for desktops */\n          }\n      \n          p {\n            font-size: 1.125rem; /* Larger paragraph size */\n          }\n        }\n      "
    }}
  />
  {/* AI Solution Section with Breaks */}
  <div className="m-8 py-4 px-8">
    <h1 className="mt-12 text-7xl font-serif mb-8">
      AI Solution
    </h1>
    <p className="font-serif text-lg text-[18px] mb-16 max-w-3xl">
      At Geekyness, we harness the transformative potential of Artificial
      <br />
      Intelligence to drive innovation and deliver unparalleled value to your
      <br />
      business. Our cutting-edge AI solutions empower organizations across
      <br />
      industries to make data-driven decisions, automate complex
      <br />
      processes, and unlock new opportunities for growth.
    </p>
  </div>
  {/*AI Capability*/}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\n    section {\n      font-family: questrial, sans-serif;\n    }\n  \n    .flip-box {\n      background-color: transparent;\n      width: 100%; /* Set to 100% for mobile */\n      max-width: 100%; /* Prevent overflow */\n      height: 300px;\n      perspective: 1000px;\n    }\n  \n    .flip-box-inner {\n      position: relative;\n      width: 100%;\n      height: 100%;\n      transition: transform 0.8s;\n      transform-style: preserve-3d;\n    }\n  \n    .flip-box:hover .flip-box-inner {\n      transform: rotateY(180deg);\n    }\n  \n    .flip-box-front, .flip-box-back {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      -webkit-backface-visibility: hidden;\n      backface-visibility: hidden;\n    }\n  \n    .flip-box-back {\n      transform: rotateY(180deg);\n    }\n  \n    @media (min-width: 640px) {\n      .flip-box {\n        height: 350px;\n      }\n    }\n  "
    }}
  />
  <div className="container mx-auto p-3">
  <h1 className="text-center md:text-left ml-0 md:ml-9 text-2xl md:text-3xl font-semibold font-serif mb-6">
    AI Capability
  </h1>

  {/* First Row */}
  <div className="flex flex-col lg:flex-row h-auto lg:h-96 m-2 lg:m-10 pt-4 lg:pt-16">
  <section className="w-full lg:w-1/2 px-4 md:px-6 lg:px-8 mt-4 lg:mt-0">
    <div className="flip-box h-full flex flex-col justify-center items-center">
      <div className="flip-box-inner h-full flex flex-col justify-center items-center">
        <div className="bg-gray-200 flip-box-front p-6 sm:p-8 lg:p-12 flex justify-center items-center">
          <h1 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-center">
            Machine
            <br />
            Learning
          </h1>
        </div>
        <ul className="font-serif bg-gray-200 flip-box-back list-disc list-inside p-6 sm:p-8 lg:p-12 space-y-2 text-center flex-auto justify-center items-center">
          <li className='pt-16'>Anomaly detection and fraud prevention</li>
          <li>Predictive analytics and forecasting</li>
          <li>Pattern recognition and clustering</li>
          <li>Recommendation systems</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="w-full lg:w-1/2 px-4 md:px-6 lg:px-8 mt-4 lg:mt-0">
    <div className="flip-box h-full flex flex-col justify-center items-center">
      <div className="flip-box-inner h-full flex flex-col justify-center items-center">
        <div className="bg-orange-400 flip-box-front p-6 sm:p-8 lg:p-12 flex justify-center items-center">
          <h1 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-center">
            Natural Language
            <br />
            Processing (NLP)
          </h1>
        </div>
        <ul className="font-serif bg-orange-400 flip-box-back list-disc list-inside p-6 sm:p-8 lg:p-12 space-y-2 text-center flex-auto justify-center items-center">
          <li className='pt-16'>Language translation and speech recognition</li>
          <li>Text classification and summarization</li>
          <li>Chatbots and conversational AI</li>
          <li>Sentiment analysis</li>
        </ul>
      </div>
    </div>
  </section>
</div>



  {/* Second Row */}
  <div className="flex flex-col lg:flex-row h-auto lg:h-96 m-2 lg:m-10">
  <section className="w-full lg:w-1/2 px-4 md:px-8 lg:px-8 mt-4 lg:mt-0">
    <div className="flip-box h-full flex flex-col justify-center items-center">
      <div className="flip-box-inner h-full flex flex-col justify-center items-center">
        <div className="bg-orange-400 flip-box-front p-6 sm:p-8 lg:p-12 flex justify-center items-center">
          <h1 className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-center">
            AI-Powered
            <br />
            Automation
          </h1>
        </div>
        <ul className="font-serif bg-orange-400 flip-box-back list-disc list-inside p-6 sm:p-8 lg:p-12 space-y-2 text-center flex-auto justify-center items-center">
          <li className='pt-16'>Robotic Process Automation (RPA)</li>
          <li>Intelligent document processing</li>
          <li>Workflow optimization</li>
        </ul>
      </div>
    </div>
  </section>

  <section className="w-full lg:w-1/2 px-4 md:px-8 lg:px-8 mt-4 lg:mt-0">
    <div className="flip-box h-full flex flex-col justify-center items-center">
      <div className="flip-box-inner h-full flex flex-col justify-center items-center">
        <div className="bg-gray-200 flip-box-front p-6 sm:p-8 lg:p-12 flex justify-center items-center">
          <h1 className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-center">
            Advanced
            <br />
            AI Applications
          </h1>
        </div>
        <ul className="font-serif bg-gray-200 flip-box-back list-disc list-inside p-6 sm:p-8 lg:p-12 space-y-2 text-center flex-auto justify-center items-center">
          <li className='pt-16'>Reinforcement learning for decision-making systems</li>
          <li>Computer vision for facial recognition and OCR</li>
          <li>Generative AI for content creation</li>
        </ul>
      </div>
    </div>
  </section>
</div>

</div>

  {/*Use Cases*/}
  <div className="container mx-auto my-4 sm:my-10 px-4 sm:px-8 lg:px-16">
  <h1 className="font-serif border-b-2 border-black  text-lg sm:text-2xl lg:text-3xl font-semibold
   mb-12 shadow-md hover:shadow-lg text-center sm:text-left">
    Use Cases
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    <div>
      <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold mb-14">
        01 Finance
      </h2>
      <ul className="font-serif text-sm sm:text-base lg:text-lg list-disc list-inside space-y-1">
        <li>Credit risk assessment</li>
        <li>Algorithmic trading</li>
        <li>Fraud detection</li>
      </ul>
      <br/>
    </div>
    <div>
      <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold mb-14">
        02 Healthcare
      </h2>
      <ul className="font-serif text-sm sm:text-base lg:text-lg list-disc list-inside space-y-1">
        <li>Disease diagnosis and prediction</li>
        <li>Drug discovery and development</li>
        <li>Medical image analysis</li>
      </ul><br/>
    </div>
    <div>
      <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold mb-14">
        03 Retail
      </h2>
      <ul className="font-serif text-sm sm:text-base lg:text-lg list-disc list-inside space-y-1">
        <li>Inventory management and demand forecasting</li>
        <li>Personalized product recommendations</li>
        <li>Customer behavior analysis</li>
      </ul><br/>
    </div>
    <div>
      <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold mb-14">
        04 Manufacturing
      </h2>
      <ul className="font-serif text-sm sm:text-base lg:text-lg list-disc list-inside space-y-1">
        <li>Quality control and defect detection</li>
        <li>Supply chain optimization</li>
        <li>Predictive maintenance</li>
      </ul><br/>
    </div>
  </div>
  <div className="mt-8 sm:mt-12">
    <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold mb-14">
      05 Customer Service
    </h2>
    <ul className="font-serif text-sm sm:text-base lg:text-lg list-disc list-inside space-y-1">
      <li>Automated ticket routing and resolution</li>
      <li>Intelligent chatbots for 24/7 support</li>
      <li>Customer sentiment analysis</li>
    </ul>
  </div>
</div><br/>

<div className="container bg-gray-300 mx-auto my-4 sm:my-10 px-4 sm:px-10 py-6 sm:py-14">
  <h1 className=" font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-14">
    Technology Stack
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center sm:text-left">
      <h2 className="font-serif text-lg sm:text-xl font-bold mb-2">Programming Languages</h2>
      <p className="font-serif text-base sm:text-lg">Python, R, Java, C++</p>
    </div>
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center sm:text-left">
      <h2 className="font-serif text-lg sm:text-xl font-bold mb-2">Machine Learning Frameworks</h2>
      <p className="font-serif text-base sm:text-lg">TensorFlow, PyTorch, Scikit-learn, Keras</p>
    </div>
    
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center sm:text-left">
      <h2 className="font-serif text-lg sm:text-xl font-bold mb-2">NLP Libraries</h2>
      <p className="font-serif text-base sm:text-lg">NLTK, SpaCy, Hugging Face Transformers</p>
    </div>
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center sm:text-left">
      <h2 className="font-serif text-lg sm:text-xl font-bold mb-2">Computer Vision Tools</h2>
      <p className="font-serif text-base sm:text-lg">OpenCV, YOLO, TensorFlow Object Detection API</p>
    </div>
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center sm:text-left">
      <h2 className="font-serif text-lg sm:text-xl font-bold mb-2">Cloud Platforms</h2>
      <p className="font-serif text-base sm:text-lg">AWS SageMaker, Google Cloud AI, Azure Machine Learning</p>
    </div>
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center sm:text-left">
      <h2 className="font-serif text-lg sm:text-xl font-bold mb-2">Big Data Technologies      </h2>
      <p className="font-serif text-base sm:text-lg">Apache Spark, Hadoop, Kafka</p>
    </div>
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center sm:text-left">
      <h2 className="font-serif text-lg sm:text-xl font-bold mb-2">Visualization Tools</h2>
      <p className="font-serif text-base sm:text-lg">Tableau, Power BI, Matplotlib</p>
    </div>
  </div>
</div>

<div className="container mx-auto my-4 sm:my-10 px-4 sm:px-10 py-8">
  <h1 className=" border-b-2 border-black text-3xl sm:text-3xl font-semibold mb-12">Case Studies and Results</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 slide-left">
    <div className="bg-white p-6 sm:p-8 shadow-md rounded-lg">
      <h2 className="text-lg sm:text-2xl font-serif font-semibold mb-4">FinTech Revolution: AI-Powered Fraud Detection</h2>
      <p className="font-bold">Client</p>
      <p className="mb-4">Leading hospital network</p>
      <p className="font-bold">Challenge</p>
      <p className="mb-4">92% reduction in fraudulent activities, saving $10M annually</p>
      <p className="font-bold">Solution</p>
      <p className="mb-4">Implemented machine learning model for real-time fraud detection</p>
      <p className="font-bold">Result</p>
      <p>30% increase in early diagnoses, potentially saving countless lives</p>
    </div>
    
    <div className="bg-white p-6 sm:p-8 shadow-md rounded-lg">
      <h2 className="text-lg sm:text-2xl font-serif font-semibold mb-4">Healthcare Innovator: AI-Assisted Diagnosis</h2>
      <p className="font-bold">Client</p>
      <p className="mb-4">Leading hospital network</p>
      <p className="font-bold">Challenge</p>
      <p className="mb-4">Improving early disease detection</p>
      <p className="font-bold">Solution</p>
      <p className="mb-4">Developed deep learning model for medical image analysis</p>
      <p className="font-bold">Result</p>
      <p>30% increase in early diagnoses, potentially saving countless lives</p>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 slide-left mt-10">
    <div className="bg-white p-6 sm:p-8 shadow-md rounded-lg">
      <h2 className="text-lg sm:text-2xl font-serif font-semibold">Retail Transformation</h2>
      <h3 className="text-base sm:text-xl font-serif font-semibold mt-2">Personalized Shopping Experience</h3>
      <p className="mt-4 font-bold">Client</p>
      <p>E-commerce giant</p>
      <p className="mt-4 font-bold">Challenge</p>
      <p>Enhancing customer engagement and sales</p>
      <p className="mt-4 font-bold">Solution</p>
      <p>Implemented AI-powered recommendation engine</p>
      <p className="mt-4 font-bold">Result</p>
      <p>25% increase in average order value, 15% boost in customer retention</p>
    </div>
    
    <div className="bg-white p-6 sm:p-8 shadow-md rounded-lg">
      <h2 className="text-lg sm:text-2xl font-serif font-semibold">Manufacturing Excellence</h2>
      <h3 className="text-base sm:text-xl font-serif font-semibold mt-2">Predictive Maintenance</h3>
      <p className="mt-4 font-bold">Client</p>
      <p>Automotive manufacturer</p>
      <p className="mt-4 font-bold">Challenge</p>
      <p>Reducing equipment downtime</p>
      <p className="mt-4 font-bold">Solution</p>
      <p>Implemented predictive maintenance system</p>
      <p className="mt-4 font-bold">Result</p>
      <p>40% reduction in unplanned downtime, saving $5M in annual maintenance costs</p>
    </div>
  </div>

  <div className="container mx-auto mt-10 bg-white p-8 shadow-md rounded-lg slide-left">
    <h2 className="text-lg sm:text-2xl font-serif font-semibold mb-6">Customer Service Evolution: Intelligent Chatbot</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-base sm:text-xl font-semibold">Client</h3>
        <p>Telecommunications provider</p>
      </div>
      <div>
        <h3 className="text-base sm:text-xl font-semibold">Challenge</h3>
        <p>Improving customer support efficiency</p>
      </div>
      <div>
        <h3 className="text-base sm:text-xl font-semibold">Solution</h3>
        <p>Developed NLP-powered chatbot for 24/7 customer assistance</p>
      </div>
      <div>
        <h3 className="text-base sm:text-xl font-semibold">Result</h3>
        <p>50% reduction in support tickets, 30% increase in customer satisfaction scores</p>
      </div>
    </div>
  </div>
</div>


<div className="container bg-gray-100 mx-auto py-8">
    <h1 className="m-12 text-3xl font-serif font-bold mb-6">Pricing</h1>
    <div className="m-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Starter Package</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Basic AI implementation</li>
              <li>1-2 AI models</li>
              <li>Limited data processing</li>
              <li>Starting at $10,000</li>
            </ul>
          </li>
          <li>
            <strong>Professional Package</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Advanced AI solutions</li>
              <li>3-5 custom AI models</li>
              <li>Moderate data processing capabilities</li>
              <li>Starting at $25,000</li>
            </ul>
          </li>
          <li>
            <strong>Enterprise Package</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Comprehensive AI ecosystem</li>
              <li>Multiple custom AI models and integrations</li>
              <li>Large-scale data processing</li>
              <li>Starting at $50,000</li>
            </ul>
          </li>
          <li>
            <strong>Custom Solutions</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Tailored pricing based on project<br/> complexity, data volume, and specific<br/> requirements</li>
              <li>Contact us for a personalized quote</li>
            </ul>
          </li>
         
          
         
        </ol>
      </div>
      <div className="bg-orange-400  text-black p-6 relative">
        <div className=" lg:pt-28 absolute top-4 right-4 text-2xl">1</div>
        <h2 className="lg:pt-28 text-2xl font-bold mb-4 ">Sketches</h2>
        <p className=''>
          Share information on a previous project here to attract new clients.
          Provide a brief summary to help visitors understand the context and
          background of the work. Add details about why this project was created
          and what makes it significant.
        </p>
      </div>
      <div className="bg-gray-200 text-black p-6 relative">
        <div className="lg:pt-28 absolute top-4 right-4 text-2xl ">2</div>
        <h2 className="lg:pt-28 text-2xl font-bold mb-4 ">Illustrations</h2>
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

export default AISolution
