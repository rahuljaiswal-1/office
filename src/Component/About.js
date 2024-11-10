import React from 'react'
import { BiLogoReact } from "react-icons/bi";

function About() {
  return (
    <div className='overflow-x-hidden ' >
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Geekyness - Your Partner in Innovative Web Solutions</title>
        {/* Main Content */}
        <div className="mt-16 animate-text container m-6 sm:m-8 lg:m-14">
          <h1 className="  text-7xl pt-14 font-serif mb-8 slide-left ">Our Story</h1>
          <p className=" font-serif paragraph-responsive text-xs sm:text-lg lg:text-[20px] mb-4 sm:mb-6">
            Geekyness was born from a shared love for technology and an insatiable <br />
            curiosity to explore the boundaries of what's possible in the digital <br />
            realm. To us, the ever-evolving web landscape is not just a canvas for <br />
            innovation; it's our playground, where we unleash our creativity and <br />
            technical prowess to craft remarkable digital experiences.
          </p>
          <h2 className="animate-text mt-16 text-4xl font-normal slide-left">Our Team</h2>
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n  overflow: hidden;\n  .animate-down-to-up {\n          animation: down-to-up 2s ease-out;\n        }\n\n        @keyframes down-to-up {\n          0% {\n            transform: translateY(100px);\n          }\n\n          100% {\n            transform: translateY(0);\n          }\n        }\n      " }} />
        <div className="mt-32 max-w-6xl mx-auto py-12">
          <div className="flex animate-down-to-up flex-wrap justify-between">
            <div className="bg-black text-white p-6  w-full md:w-1/4">
              <img alt="Portrait of Shivam Khandelwal" className="w-full h-48 object-cover rounded-t-lg" height={300} src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-xrlG8m5HVIX3VC9H1r0kjpBD.png?st=2024-10-01T08%3A08%3A57Z&se=2024-10-01T10%3A08%3A57Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T01%3A06%3A33Z&ske=2024-10-02T01%3A06%3A33Z&sks=b&skv=2024-08-04&sig=VZWLl5eeKct6ewNj7lfuNcuHqnfYyJkTrc2l6/QvLe0%3D" width={300} />
              <h2 className="text-xl font-bold mt-4">Shivam Khandelwal.</h2>
              <p className="text-sm font-semibold">Founder</p>
              <p className="mt-2 text-sm">Drives strategic direction and oversees operations, ensuring Geekyness stays ahead with innovative web and app development solutions.</p>
            </div>
            <div className="bg-black text-white p-6 w-full md:w-1/4">
              <img alt="Portrait of Vaibhav Goud" className="w-full h-48 object-cover rounded-t-lg" height={300} src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-XVib0ZW8sFbsBdA14dLz8ppR.png?st=2024-10-01T08%3A08%3A58Z&se=2024-10-01T10%3A08%3A58Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-30T18%3A22%3A51Z&ske=2024-10-01T18%3A22%3A51Z&sks=b&skv=2024-08-04&sig=lbimqUpuNau/WKDioP3M3p9es/swUZwz0o8L2PjDcMo%3D" width={300} />
              <h2 className="text-xl font-bold mt-4">Vaibhav Goud.</h2>
              <p className="text-sm font-semibold">Co-Founder</p>
              <p className="mt-2 text-sm">Focuses on business growth and service expansion, leveraging his expertise in business management and digital marketing.</p>
            </div>
            <div className="bg-black text-white p-6  w-full md:w-1/4">
              <img alt="Portrait of Shadia Khan" className="w-full h-48 object-cover rounded-t-lg" height={300} src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-CmyNVOGg66HBaIKesFcg5fnf.png?st=2024-10-01T08%3A08%3A56Z&se=2024-10-01T10%3A08%3A56Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=
              d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T01%3A50%3A25Z&ske=2024-10-02T01%3A50%3A25Z&sks=b&skv=2024-08-04&sig=HIwMa5vcpHg9p%2Bnio6GkiNcaY%2BU48MSPH2WMu1pkViU%3D" width={300} />
              <h2 className="text-xl font-bold mt-4">Shadia Khan.</h2>
              <p className="text-sm font-semibold">Talent Acquisition Specialist</p>
              <p className="mt-2 text-sm">Identifies and recruits top talent, ensuring Geekyness attracts skilled and passionate individuals to drive company success.</p>
            </div>
            <div className="bg-black text-white p-6 w-full md:w-1/4">
              <img alt="Portrait Amelia" className="w-full h-48 object-cover rounded-t-lg" height={300} src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-qzquv30wuo904eotkOyoPxCm.png?st=2024-10-01T08%3A08%3A55Z&se=2024-10-01T10%3A08%3A55Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-10-01T01%3A12%3A59Z&ske=2024-10-02T01%3A12%3A59Z&sks=b&skv=2024-08-04&sig=pBLlmuZKBvn5i3a26xSzamkln0eSq%2BLj2M1%2BJb%2BoupU%3D" width={300} />
              <h2 className="text-xl font-bold mt-4">Amelia.</h2>
              <p className="text-sm font-semibold">Social Media Specialist</p>
              <p className="mt-2 text-sm">Manages Geekyness's social media presence, creating engaging content and fostering community interaction to enhance brand awareness.</p>
            </div>
          </div>
        </div>
        <div>
        <section className="font-serif">
    {/* Approach Section */}
    <div className="bg-orange-400 p-4 md:p-8 lg:p-12 rounded-t-lg">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-4">Our Approach</h2>
      <section className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
        {/* Icon, visible only on larger screens */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="m-4 text-7xl lg:text-9xl">
            <BiLogoReact />
          </div>
        </div>
        {/* Text Content */}
        <div className="w-full md:w-3/4">
          <p className="animate-down-to-up text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose">
            At Geekyness, our approach is rooted in understanding your unique needs and delivering customized digital solutions. We combine innovation with industry best practices to create scalable, secure, and impactful outcomes for your business. Our team collaborates closely with you, ensuring transparency and alignment with your goals at every step. From initial consultation to project completion, we focus on building lasting partnerships that drive continuous growth and success.
          </p>
        </div>
      </section>
   
            </div>
            {/* Numbers Section */}
            <div className="bg-gray-200 p-6 sm:p-8 rounded-b-lg">
              <h2 className="animate-down-to-up text-xl sm:text-2xl font-bold mb-6">Us in Numbers</h2>
              {/* Adjust the grid layout for mobile screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Stat Card 1 */}
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-3xl sm:text-4xl font-bold">500+</p>
                  <p className="text-sm text-gray-600">Completed Projects</p>
                </div>
                {/* Stat Card 2 */}
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-3xl sm:text-4xl font-bold">10</p>
                  <p className="text-sm text-gray-600">Team Members</p>
                </div>
                {/* Stat Card 3 */}
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-3xl sm:text-4xl font-bold">20+</p>
                  <p className="text-sm text-gray-600">Business Partners in over 5 Countries</p>
                </div>
                {/* Stat Card 4 */}
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-3xl sm:text-4xl font-bold">5</p>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                </div>
              </div>
            </div>
          </section>
          <section className="max-w-4xl mx-auto py-8 sm:py-12 md:py-16 px-4">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12">
    We've Been Covered
  </h2>
  <div className="bg-orange-400 rounded-full py-4 sm:py-6 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
    <div className="text-lg sm:text-xl md:text-2xl font-semibold border border-black rounded px-2">
      mtvs.news
    </div>
    <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
      gazelt
    </div>
    <div className="text-lg sm:text-xl md:text-2xl font-semibold">
      prom<span className="relative">o<span className="absolute -top-1 right-0 text-xs">☀</span></span>rning
    </div>
  </div>
</section>

          <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <h2 className="text-5xl font-light mb-6 md:mb-0 leading-tight">
                  FOMO got<br />you puzzled?
                </h2>
                <div className="w-full md:w-1/2">
                  <p className="text-gray-600 mb-4">Subscribe to our weekly newsletter.</p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black" placeholder="Email *" />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="subscribe" name="subscribe" className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded" />
                      <label htmlFor="subscribe" className="ml-2 block text-sm text-gray-900">
                        Yes, subscribe me to your newsletter.
                      </label>
                    </div>
                    <button type="submit" className="w-full md:w-auto px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="bg-orange-400 rounded-lg overflow-hidden h-52">
                <div className="flex justify-center items-center py-12">
                  <img className="size-1/3" src="https://static.wixstatic.com/media/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png/v1/fill/w_602,h_228,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fe4a13_736aa623bfaf42aea1a898bebb96a689~mv2.png" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default About
