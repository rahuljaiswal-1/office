import React from 'react'
import { Link } from 'react-router-dom';
import { BsFillGridFill } from "react-icons/bs";
import { LiaBroadcastTowerSolid } from "react-icons/lia";
import { LiaAtomSolid } from "react-icons/lia";
import { TbDeviceMobileBolt } from "react-icons/tb";
import { AiFillBug } from "react-icons/ai";


function Homeee() {
  return (
     <>
     <meta charSet="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Geekyness - Your Partner in Innovative Web Solutions</title>
     <link href="./output.css" rel="stylesheet" />
     <div className="container mx-auto p-8 bg-gray-200">
       <h1 className="text-4xl md:text-7xl font-bold text-start mb-3 ml-6 mt-12 ">
         Geekyness
        </h1>
        <h1 className="text-3xl md:text-7xl  text-start ml-6">
         Your Partner
       </h1>
       <h1 className="text-3xl md:text-7xl  text-start mb-12 ml-6">
         in Innovative Web Solutions
       </h1>

       <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
         <div className="bg-gray-300 p-8 rounded-3xl w-full md:w-1/3">
           <h2 className="text-xl md:text-3xl mb-4 font-serif">Innovate</h2>
           <p className="text-gray-700 font-serif ">
             Stay ahead in the digital world. Discover how our high-quality
             solutions can help your business achieve its digital transformation
             goals.
           </p>
           <Link to="/contact">
             <button className="font-serif text-sm border border-black rounded-full px-4 py-2 hover:bg-orange-400 mt-4">
               Schedule a Free Consultation
             </button>
           </Link>
         </div>
         <div className="flex items-end justify-center md:justify-start">
           <div className="bg-black w-48 h-48 rounded-3xl flex items-center justify-center">
             <svg
               className="animate-bounce w-12 h-12 md:w-16 md:h-24 text-white"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 strokelinecap="round"
                 strokelinejoin="round"
                 strokewidth="{2}"
                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
               />
             </svg>
           </div>
         </div>
         <div className="font-serif bg-gray-300 p-8 rounded-3xl w-full md:w-1/3">
           <h2 className="text-xl md:text-3xl  mb-4">Transform</h2>
           <p className="text-gray-700">
             Transform your business with innovative, scalable, and secure
             solutions. Learn more about how we can help you stay ahead of the
             curve.
           </p>
           <Link to="/home1">
             <button className="border border-black rounded-full px-4 py-2 hover:bg-orange-400 mt-4">
               Read Our Latest Report
             </button>
           </Link>
         </div>
       </div>
     </div>
     <section className=" bg-gray-200 container mx-auto flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 w-full">
       <div className="w-full md:w-1/3 rounded-ee-3xl rounded-se-3xl overflow-hidden">
         <img
           src="https://static.wixstatic.com/media/c837a6_5e19bd47c2dc45398993d8c780db299a~mv2.jpg/v1/fill/w_389,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_5e19bd47c2dc45398993d8c780db299a~mv2.jpg"
           alt="People in an office"
           className="w-full h-full object-cover filter grayscale"
         />
       </div>
       <div className=" font-serif w-full md:w-1/2 h-120 bg-orange-400 rounded-3xl p-4 md:p-8 text-black">
         <h2 className="text-3xl md:text-4xl mb-2">Elevate</h2>
         <p className="mb-6 text-sm md:text-base">
           Elevate your business to new heights with our comprehensive digital
           solutions. Understand our approach to helping you achieve your digital
           transformation objectives.
         </p>
         <Link to="/solution">
           <button className="border border-black rounded-full px-4 md:px-6 py-2 hover:bg-black hover:text-orange-400 transition duration-300">
             Check Our Solutions
           </button>
         </Link>
       </div>
       <div data-testid="responsive-container-content" className="w-full md:w-1/4">
         <div
           id="comp-lkkt1mpk"
           className="pl-14 comp-lkkt1mpk wixui-vector-image"
           data-motion-enter="done"
         >
           <svg
             preserveAspectRatio="none"
             data-bbox="20 20 160 160"
             viewBox="20 20 160 160"
             height={200}
             width={200}
             xmlns="http://www.w3.org/2000/svg"
             data-type="shape"
             role="presentation"
             aria-hidden="true"
             aria-label=""
           >
             <g>
               <path d="M98.322 180v-60.16c0-4.101-3.345-6.551-6.58-6.551-1.714 0-3.341.684-4.584 1.927l-42.54 42.54-2.374-2.374 42.54-42.54c1.906-1.906 2.449-4.637 1.417-7.127s-3.346-4.037-6.042-4.037H20v-3.356h60.16c2.695 0 5.01-1.547 6.042-4.037 1.031-2.49.489-5.221-1.417-7.127l-42.54-42.54 2.374-2.374 42.54 42.54c1.242 1.243 2.87 1.927 4.584 1.927 3.234 0 6.58-2.451 6.58-6.551V20h3.356v60.16c0 1.841.724 3.531 2.039 4.758a6.72 6.72 0 0 0 4.542 1.793c1.714 0 3.341-.684 4.584-1.927l42.54-42.54 2.374 2.374-42.54 42.54c-1.906 1.906-2.449 4.637-1.417 7.127 1.031 2.49 3.346 4.037 6.042 4.037H180v3.356h-60.16c-2.695 0-5.01 1.547-6.042 4.037s-.489 5.221 1.417 7.127l42.54 42.54-2.374 2.374-42.54-42.54c-1.242-1.243-2.87-1.927-4.584-1.927-3.234 0-6.58 2.451-6.58 6.551V180h-3.355zm-12.937-40.315-2.878-1.182-14.335 34.909 2.878 1.182 14.335-34.909zm46.443-113.097-2.878-1.182-14.335 34.909 2.878 1.182 14.335-34.909zM61.497 82.507 26.588 68.171l-1.182 2.878 34.909 14.335 1.182-2.877zm113.098 46.443-34.909-14.335-1.182 2.878 34.909 14.335 1.182-2.878zM61.604 117.728l-1.2-2.871-34.82 14.548 1.2 2.871 34.82-14.548zm112.813-47.132-1.2-2.871-34.821 14.548 1.2 2.871 34.821-14.548zM85.144 60.404 70.596 25.583l-2.871 1.2 14.548 34.821 2.871-1.2zm47.131 112.813-14.548-34.821-2.871 1.2 14.548 34.821 2.871-1.2z"></path>
             </g>
           </svg>
         </div>
       </div>
     </section>

     <section className="animate-hide-to-show container mx-auto px-4 py-16 w-full">
       <h2 className="text-4xl font-semibold mb-20 ml-16">The Story of Geekyness</h2>
        <div className="space-y-8">
      <div className="lg:ml-60">
         <h3 className="container text-6xl font-extralightt leading-tight">
              Isn't it time for your business to<br/>reach its apex? Your greatest<br/> success
           is just around the<br/> corner.
         </h3>
         <p className="text-lg font-serif leading-relaxed mt-10">
           Geekyness specializes in driving digital transformation for businesses.
           We are <br/> dedicated to helping your company achieve its highest potential
           through innovative,<br/> scalable, and secure solutions. Our expert team
           works closely with you to understand<br/> your unique needs and craft
           customized strategies that propel your business forward.<br/> Whether it's
           web development, mobile apps, desktop applications, or AI solutions, we<br/>
           are here to ensure your success
         </p>
         <Link to="/about">
           <button className="bg-orange-400 mt-4 font-sans text-black py-3 px-8 rounded-full hover:bg-orange-500 transition duration-300">
             Read More
           </button>
         </Link>
          </div>
          </div>
     </section>
     <section className=" font-serif px-4 py-12 bg-gray-200 w-full">
       <h1 className="text-3xl font-medium mb-14">
         Services Driving Digital Transformation
       </h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Web Development */}
          <div className="bg-gray-300 rounded-3xl p-6 relative">
            <div className='m-2 text-3xl'>
              <LiaBroadcastTowerSolid />
            </div>
           <h3 className="text-2xl font-semibold mb-3">Web Development</h3>
           <p className="mb-8">
             Create engaging websites, e-commerce platforms, and custom web
             applications that captivate your audience and boost business growth.
           </p>
           <Link to="/home1">
             <button className="absolute bottom-4 right-4 bg-orange-400 text-white p-2 rounded-lg">
               <svg
                 className="w-6 h-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M9 5l7 7-7 7"
                 />
               </svg>
             </button>
           </Link>
         </div>
         {/* Desktop Applications */}
         <div className="bg-orange-400 rounded-3xl p-6 relative">
          <div className='m-2 text-3xl'>
              <BsFillGridFill />
            </div>
           <h3 className="text-2xl font-semibold mb-3">Desktop Applications</h3>
           <p className="mb-8">
             Build custom software for Windows, macOS, and Linux to boost
             productivity and meet your unique business needs.
           </p>
           <Link to="/desktop">
             <button className="absolute bottom-4 right-4 bg-gray-200 text-orange-400 p-2 rounded-lg">
               <svg
                 className="w-6 h-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M9 5l7 7-7 7"
                 />
               </svg>
             </button>
           </Link>
         </div>
         {/* Mobile App Development */}
         <div className="bg-gray-300 rounded-3xl p-6 relative">
            <div className='m-2 text-3xl'>
              <TbDeviceMobileBolt />
           </div>
           <h3 className="text-2xl font-semibold mb-3">Mobile App <br/>Development</h3>
           <p className="mb-8">
             Develop user-friendly iOS, Android, and cross-platform apps that
             enhance engagement and streamline operations.
           </p>
           <Link to="/MobileApp">
             <button className="absolute bottom-4 right-4 bg-orange-400 text-white p-2 rounded-lg">
               <svg
                 className="w-6 h-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M9 5l7 7-7 7"
                 />
               </svg>
             </button>
           </Link>
         </div>
         {/* AI Solutions */}
         <div className="bg-gray-300 rounded-3xl p-6 relative">
            <div className='m-2 text-3xl'>
              <AiFillBug />
           </div>
           <h3 className="text-2xl font-semibold mb-3">AI Solutions</h3>
           <p className="mb-8">
             Leverage AI with machine learning, data analytics, and automation
             tools to drive innovation and optimize processes.
           </p>
           <Link to="/aisolution">
             <button className="absolute bottom-4 right-4 bg-orange-400 text-white p-2 rounded-lg">
               <svg
                 className="w-6 h-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M9 5l7 7-7 7"
                 />
               </svg>
             </button>
           </Link>
         </div>
         {/* Digital Marketing Excellence */}
         <div className="bg-orange-400 rounded-3xl p-6 relative">
            <div className='m-2 text-3xl'>
              <LiaAtomSolid />
           </div>
           <h3 className="text-2xl font-semibold mb-3">
             Digital Marketing <br/>Excellence
           </h3>
           <p className="mb-8">
             Boost your online presence with tailored SEO, SEM, social media,
             content marketing, and email campaigns to drive traffic and achieve
             results.
           </p>
           <button className="absolute bottom-4 right-4 bg-gray-200 text-orange-400 p-2 rounded-lg">
             <Link to="/DigitalMarketting">
               <svg
                 className="w-6 h-6"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M9 5l7 7-7 7"
                 />
               </svg>
             </Link>
           </button>
           {/* <Link to="/DigitalMarketting"></Link> */}
         </div>
       </div>
     </section>
     <div className="hidden md:inline-flex flex-col md:flex-row bg-slate-200 w-full">
       {/* Left Section (Our Solutions) */}
       <section className="w-full md:w-1/2 bg-orange-400 flex flex-col justify-center items-start p-12 md:m-14 md:mr-0 md:mt-0 md:mb-0">
         <h1 className=" font-serif text-2xl md:text-4xl font-normal text-black mb-4 md:pl-36">
           Our Solutions
         </h1>
       </section>
       {/* Right Section (Image) */}
       <section className="w-full md:w-1/2 md:m-14 md:ml-0 md:mt-0 md:mb-0">
         <img
           src="https://static.wixstatic.com/media/c837a6_84362f37497046e881dba2e96bbb9d76~mv2.jpg/v1/fill/w_621,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_84362f37497046e881dba2e96bbb9d76~mv2.jpg"
           alt="Aerial view of a dense city"
           className="object-cover w-full h-full grayscale"
         />
       </section>
     </div>
     <section className="font-serif mt-16 p-6 md:p-10 lg:p-2 flex flex-col md:flex-row mx-auto bg-white h-auto pt-12 pb-12">
       {/* First Column */}
       <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 bg-slate-200 rounded-3xl mb-8 md:mb-0 flex flex-col items-center">
         <svg
           className="w-12 h-12 lg:w-16 lg:h-16 text-gray-800 mb-4"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M12 2L14.2 9.4L22 9.8L16 14.2L18 22L12 17.6L6 22L8 14.2L2 9.8L9.8 9.4L12 2Z"
             stroke="currentColor"
             strokeWidth={2}
             strokeLinecap="round"
             strokeLinejoin="round"
           />
         </svg>
         <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  text-center mb-4">
           Digital Strategy<br/> Pioneers
         </h2>
         <p className="text-sm md:text-base lg:text-lg text-center text-gray-700 leading-relaxed px-4 lg:px-8">
           We craft innovative digital strategies tailored to your business goals. Our experts analyze your industry landscape to develop comprehensive roadmaps integrating cutting-edge technologies seamlessly into your processes for transformative growth. Services span web, mobile, AI/ML, data, UX, and omnichannel marketing strategies, guiding you to make data-driven decisions and stay ahead.
         </p>
       </div>
       {/* Second Column */}
       <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 bg-white rounded-3xl flex flex-col items-center">
         <svg
           className="w-12 h-12 lg:w-16 lg:h-16 text-gray-800 mb-4"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93"
             stroke="currentColor"
             strokeWidth={2}
             strokeLinecap="round"
             strokeLinejoin="round"
           />
         </svg>
         <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl  text-center mb-4">
           Flawless Tech<br/> Execution
         </h2>
         <p className="text-sm md:text-base lg:text-lg text-center text-gray-700 leading-relaxed px-4 lg:px-8">
           While strategy lays the foundation, we excel in execution through meticulous planning, skilled development, and rigorous testing. Our execution prowess covers the full lifecycle leveraging agile methodologies and best practices. From responsive websites and mobile apps to AI/ML models, system integration, and automation, we deliver exceptional quality solutions driving efficiency, engagement, and remarkable user experiences.
         </p>
       </div>
     </section>
     <section className="p-6 md:p-16 flex flex-col md:flex-row h-auto md:h-screen">
       {/* Image Section */}
       <div className="rounded-3xl bg-black w-full md:w-1/2 h-1/2 md:h-full relative">
         <img
           src="https://static.wixstatic.com/media/c837a6_6c7ced7e924441dc8380245f1a0e9d4b~mv2.jpg/v1/fill/w_621,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_6c7ced7e924441dc8380245f1a0e9d4b~mv2.jpg"
           alt="Office interior with people"
           className="w-full h-full object-cover filter grayscale"
         />
         <div className="absolute inset-0 bg-black bg-opacity-20" />
       </div>
       {/* Content Section */}
       <div className="font-serif w-full md:w-1/2 bg-orange-400 p-6 md:p-8 flex flex-col justify-center items-center h-1/2 md:h-full">
         <div className="max-w-md text-center ">
            <div className='m-2 text-5xl w-8 h-8 mx-auto mb-8'>
              <AiFillBug />
           </div>
           <h1 className="text-2xl md:text-3xl mb-4 text-black">
             AI and Data Mastery
           </h1>
           <p className="mb-6 text-black text-base leading-relaxed px-4">
             Unlock your data's potential with our AI and data mastery. Our experts
             provide end-to-end support, from data strategy and governance to
             advanced analytics, machine learning, and AI-powered automation. We
             transform data into actionable insights, enabling smarter
             decision-making, process optimization, and innovative product
             development. Stay ahead with our AI and data solutions driving
             innovation and growth.
           </p>
           <Link to="/solution">
             <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-opacity-0 transition duration-300">
               Check Our Solutions
             </button>
           </Link>
         </div>
       </div>
     </section>

     {/* First Section with Testimonials */}
     <section className="font-serif hidden-animate rounded-3xl bg-gray-100 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto text-center md:text-left">
         <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900">
           It's all about a<br/> dialogue
         </h2>
         <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
           A few words from our clients.
           <br />
           See client stories for more.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
           {/* Testimonial 1 */}
           <div className="bg-white p-6 rounded-3xl shadow-md h-auto w-11/12 sm:w-80 flex flex-col">
             <p className="text-gray-800 mb-4 text-sm sm:text-base">
               Geekyness has been an invaluable partner in our digital
               transformation journey. Their strategic guidance and flawless
               execution have helped us deliver innovative solutions that truly
               resonate with our customers.
             </p>
             <p className="font-semibold text-gray-700 mt-auto">
               Sarah Thompson, CTO
             </p>
             <p className="text-gray-600">TechVentures Inc.</p>
           </div>
           {/* Testimonial 2 */}
           <div className="bg-orange-400 p-6 rounded-3xl shadow-md h-auto w-11/12 sm:w-80 flex flex-col">
             <p className="text-black mb-4 text-sm sm:text-base">
               The AI and data solutions provided by Geekyness have been
               game-changers for our business. Their expertise in leveraging
               cutting-edge technologies has enabled us to gain valuable insights
               and make data-driven decisions that drive growth.
             </p>
             <p className="font-semibold text-black mt-auto  ">Ethan Wilson, CEO</p>
             <p className="text-black">DataMatics Corp.</p>
           </div>
           {/* Testimonial 3 */}
           <div className="bg-white p-6 rounded-3xl shadow-md h-auto w-11/12 sm:w-80 flex flex-col">
             <p className="text-gray-800 mb-4 text-sm sm:text-base">
               Geekyness truly understands the importance of a seamless user
               experience. Their intuitive web and mobile app development services
               have helped us elevate our digital offerings and delight our
               customers.
             </p>
             <p className="font-semibold text-gray-700 mt-auto">
               Sophia Lee, Head of Digital
             </p>
             <p className="text-gray-600">TechTrend Solutions</p>
           </div>
         </div>
       </div>
     </section>
     {/* Second Section with Clients */}
     <section className="font-serif hidden-animate bg-white py-16 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <h2 className="text-4xl font-bold mb-12 text-center">Our Clients</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="bg-black rounded-3xl flex items-center justify-center h-28 px-6">
             <span className="text-white text-xl font-bold">energator</span>
           </div>
           <div className="bg-black rounded-3xl flex items-center justify-center h-28 px-6">
             <span className="text-white text-xl font-bold">LADERATE</span>
           </div>
           <div className="bg-black rounded-3xl flex items-center justify-center h-28 px-6">
             <span className="text-white text-xl font-bold">3TERNET</span>
           </div>
           <div className="bg-black rounded-3xl flex items-center justify-center h-28 px-6">
             <span className="text-white text-xl font-bold">JUGONLINE</span>
           </div>
         </div>
       </div>
     </section>
     <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
           <h2 className="text-5xl font-light mb-6 md:mb-0 leading-tight">
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
               className="size-1/3"
               src="https://static.wixstatic.com/media/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png/v1/fill/w_602,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png"
               alt=""
             />
           </div>
         </div>
       </div>
     </section>

   </>

  )
}

export default Homeee
