import React from 'react'

function About() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Geekyness - Your Partner in Innovative Web Solutions</title>
  <section className="bg-gray-100">
    <style
    dangerouslySetInnerHTML={{
      __html:
        "\n          /* Text Animation */\n          .animate-text {\n            white-space: nowrap;\n            overflow: hidden;\n            width: 0;\n            animation: animate-text 5s forwards;\n          }\n        \n          @keyframes animate-text {\n            0% {\n              width: 0;\n            }\n            100% {\n              width: 100%;\n            }\n          }\n        \n          /* Slide-left Animation */\n          .slide-left {\n            opacity: 0;\n            transform: translateX(-100px);\n            animation: slideRight 1.2s forwards;\n          }\n        \n          @keyframes slideRight {\n            to {\n              opacity: 1;\n              transform: translateX(0);\n            }\n          }\n        \n          /* Responsive Heading and Paragraph for Mobile */\n          @media (max-width: 640px) {\n            .mobile-slide-left {\n              opacity: 0;\n              transform: translateX(-30px);\n              animation: slideMobile 1.2s forwards;\n            }\n        \n            @keyframes slideMobile {\n              to {\n                opacity: 1;\n                transform: translateX(0);\n              }\n            }\n        \n            /* Font-size adjustments for mobile */\n            h1 {\n              font-size: 2.5rem; /* Smaller heading size on mobile */\n            }\n        \n            p {\n              font-size: 0.875rem; /* Smaller paragraph size */\n            }\n          }\n        \n          /* Larger screen adjustments */\n          @media (min-width: 641px) {\n            h1 {\n              font-size: 3.5rem; /* Medium heading size */\n            }\n        \n            p {\n              font-size: 1rem; /* Medium paragraph size */\n            }\n          }\n        \n          @media (min-width: 1024px) {\n            h1 {\n              font-size: 4.5rem; /* Larger heading size for desktops */\n            }\n        \n            p {\n              font-size: 1.125rem; /* Larger paragraph size */\n            }\n          }\n     "
    }}
  />
    {/* Main Content */}
    <div className=" max-w-7xl mx-auto py-16 px-2">
      <h1 className="slide-left mt-12 font-serif text-7xl mb-6">Our Story</h1>
      <p className=" slide-left font-serif text-xl mb-16 max-w-3xl">
        Geekyness was born from a shared love
        for technology and an insatiable
        curiosity to
        explore the boundaries of what's
       possible in the digital realm. To us,
       the ever-evolving
        web landscape is not just a canvas
       for innovation; it's our playground,
       where we
        unleash our creativity and
        technical prowess to craft
       remarkable digital experiences.
      </p>
      <h2 className=" slide-left text-4xl font-light">Our Team</h2>
    </div>
  </section>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .animate-down-to-up {\n          animation: down-to-up 2s ease-out;\n        }\n\n        @keyframes down-to-up {\n          0% {\n            transform: translateY(100px);\n          }\n\n          100% {\n            transform: translateY(0);\n          }\n        }\n      "
    }}
  />
  <div className="max-w-6xl font-serif mx-auto py-12">
    <div className="flex animate-down-to-up flex-wrap justify-between">
      <div className="bg-black text-white p-6 w-full md:w-1/4">
        <img
          alt="Portrait of Shivam Khandelwal"
          className="w-full h-48 object-cover rounded-t-lg"
          height={300}
        src="https://media.istockphoto.com/id/1722652713/photo/middle-aged-businessman-in-glasses-with-gray-hair-crossing-his-arms-and-smiling-looking-at.jpg?s=1024x1024&w=is&k=20&c=NsAsceByKTOXSEVq146_umPtRVHJ6pYwGGFLNaQXclw="
          width={300}
        />
        <h2 className="text-xl font-bold mt-4">Shivam Khandelwal.</h2>
        <p className="text-sm font-semibold">Founder</p>
        <p className="mt-2 text-sm">
          Drives strategic direction and oversees operations, ensuring Geekyness
          stays ahead with innovative web and app development solutions.
        </p>
      </div>
      <div className="bg-black text-white p-6 w-full md:w-1/4">
        <img
          alt="Portrait of Vaibhav Goud"
          className="w-full h-48 object-cover rounded-t-lg"
          height={300}
          src="https://media.istockphoto.com/id/1694591397/photo/mature-businessman-in-stylish-clothes-posing-on-white-background.jpg?s=2048x2048&w=is&k=20&c=kM6rGfQ8CNdEKpuU2le8OYmUetcdfDsrA3lGHEMHcBs="
          width={300}
        />
        <h2 className="text-xl font-bold mt-4">Vaibhav Goud.</h2>
        <p className="text-sm font-semibold">Co-Founder</p>
        <p className="mt-2 text-sm">
          Focuses on business growth and service expansion, leveraging his
          expertise in business management and digital marketing.
        </p>
      </div>
      <div className="bg-black text-white p-6 w-full md:w-1/4">
        <img
          alt="Portrait of Shadia Khan"
          className="w-full h-48 object-cover rounded-t-lg"
          height={300}
          src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=2048x2048&w=is&k=20&c=uEaEqFvI74GpTWzcRCiDMR3qWqS2qVzKQREVBgmcxao="
          width={300}
        />
        <h2 className="text-xl font-bold mt-4">Shadia Khan.</h2>
        <p className="text-sm font-semibold">Talent Acquisition Specialist</p>
        <p className="mt-2 text-sm">
          Identifies and recruits top talent, ensuring Geekyness attracts
          skilled and passionate individuals to drive company success.
        </p>
      </div>
      <div className="bg-black text-white p-6  w-full md:w-1/4">
        <img
          alt="Portrait Amelia"
          className="w-full h-48 object-cover rounded-t-lg"
          height={300}
          src="https://media.istockphoto.com/id/2160741846/photo/happy-middle-aged-business-man-isolated-on-white-background-portrait.jpg?s=2048x2048&w=is&k=20&c=umA2v4NiwQtURpF3_rnyHiN5w-pjMwyvFdJWtiYu9g0="
          width={300}
        />
        <h2 className="text-xl font-bold mt-4">Amelia.</h2>
        <p className="text-sm font-semibold">Social Media Specialist</p>
        <p className="mt-2 text-sm">
          Manages Geekyness's social media presence, creating engaging content
          and fostering community interaction to enhance brand awareness.
        </p>
      </div>
    </div>
  </div>
  <div>
    <section className="font-serif">
      <div className="bg-orange-400 p-6 md:p-28 rounded-t-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Our Approach</h2>
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Hidden logo for mobile, visible on medium screens and above */}
          <div className="hidden md:block w-1/4">
            <img
          src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png"
          alt="City skyline at night with light trails"
          className="w-28 h-28 object-cover"
        />
          </div>
          <p className="animate-down-to-up text-base md:text-2xl w-full md:w-3/4">
            At Geekyness, our approach is rooted in understanding your unique
            needs and delivering customized digital solutions. We combine
            innovation with industry best practices to create scalable, secure,
            and impactful outcomes for your business. Our team collaborates
            closely with you, ensuring transparency and alignment with your
            goals at every step. From initial consultation to project
            completion, we focus on building lasting partnerships that drive
            continuous growth and success.
          </p>
        </div>
      </div>
      <div className="bg-gray-200 p-8 rounded-b-lg">
        <h2 className=" animate-down-to-up text-2xl font-bold mb-6">
          Us in Numbers
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-4xl font-bold">500+</p>
            <p className="text-sm text-gray-600">Completed Projects</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-4xl font-bold">10</p>
            <p className="text-sm text-gray-600">Team Members</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-4xl font-bold">20+</p>
            <p className="text-sm text-gray-600">
              Business Partners in over 5 Countries
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-4xl font-bold">5</p>
            <p className="text-sm text-gray-600">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        .animate-hide-to-show {\n          animation: hide-to-show 5s ease-out;\n        }\n\n        @keyframes hide-to-show {\n          0% {\n            opacity: 0;\n          }\n\n          100% {\n            opacity: 1;\n          }\n        }\n      "
      }}
    />
    <section className="font-serif max-w-4xl mx-auto py-12 md:py-16 px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">
        We've Been Covered
      </h2>
      <div className="bg-orange-400 rounded-full py-4 md:py-6 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-lg md:text-xl font-semibold border border-black rounded px-2">
          mtvs.news
        </div>
        <div className="text-2xl md:text-3xl font-bold">gazelt</div>
        <div className="text-lg md:text-xl font-semibold">
          prom
          <span className="relative">
            o<span className="absolute -top-1 right-0 text-xs">☀</span>
          </span>
          rning
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
        <div className="bg-orange-400 overflow-hidden h-52">
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

  </div>
</div>

  )
}

export default About
