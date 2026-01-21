import React from 'react'
import { FaHouseChimney } from "react-icons/fa6";
import { MdCottage, MdFastfood } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { PiSecurityCameraFill, PiBuildingApartmentFill } from "react-icons/pi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const page = () => {
  return (
    <div className='bg-green-50'>
     <div className='h-30'></div>
     <div className=''>
      <iframe class="mx-auto w-full md:w-[70%] aspect-video" src="https://www.youtube.com/embed/jTDBljQ8e_8?si=MI3sTQGlF1KSAAlL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
     </div>
     <div className="pt-10">
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Indus valley Mukteshwar</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="Indus valley Mukteshwar"/>
        <p className='mt-5 px-5 text-sm md:text-lg text-justify text-gray-600'>Welcome to Indus Valley Mukteshwar, a place where peace resides. This is a 10-acre private gated township in the lap of the Himalayas. We are not selling cottages; we are selling the environment that we create around you. This project is at the height of 8000 ft from sea level, which is why it also witnesses snowfall around winter. Around the year, the weather in Mukteshwar has been cool and pleasant, and to date, we haven’t felt the need to install fans in our cottages. Places like Nainital, Shimla, Mussoorie, Dehradun are overcrowded and hustle and bustle now; these places haven’t even recorded any snowfall in the last 6-7 years due to global warming. Enjoy the terrific panoramic view of Nanda Devi Himalayan glaciers from every property. We have built these cottages in an organized way that every cottage faces the Himalayas. There are 70 villas in the project, out of which we have delivered 43. Around 15 families have already permanently moved to Indus Valley.</p>
     </div>
     <div className='pt-10'>
       <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Offerings of Indus Valley</h2>
       <img className="mx-auto" src="../../images/product-overview.png" alt="Offerings of Indus Valley"/>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
         <div className="ms-10">
           <h4 className='text-md md:text-lg lg:text-2xl flex items-center gap-3 font-semibold'><FaHouseChimney className='inline-block'/>Independent cottages</h4>
           <p className='text-sm md:text-md text-gray-600'>Simplex and duplex options available</p>
         </div>
         <div className="ms-10">
           <h4 className='text-md md:text-lg lg:text-2xl flex items-center gap-3 font-semibold'><MdCottage className='inline-block'/>Customized cottages</h4>
           <p className='text-sm md:text-md text-gray-600'>Tailored-made as per customer design</p>
         </div>
         <div className="ms-10">
           <h4 className='text-md md:text-lg lg:text-2xl flex items-center gap-3 font-semibold'><FaRegBuilding className='inline-block'/>Apartments</h4>
           <p className='text-sm md:text-md text-gray-600'>1-2 BHK and Studio apartments</p>
         </div>
         <div className="ms-10">
           <h4 className='text-md md:text-lg lg:text-2xl flex items-center gap-3 font-semibold'><PiSecurityCameraFill className='inline-block'/>Security</h4>
           <p className='text-sm md:text-md text-gray-600'>CCTV surveillance with 24/7 security guards</p>
         </div>
         <div className="ms-10">
           <h4 className='text-md md:text-lg lg:text-2xl flex items-center gap-3 font-semibold'><MdFastfood className='inline-block'/>Amenities</h4>
           <p className='text-sm md:text-md text-gray-600'>Hillcrest Cafe, Clubhouse, and Trekking trails</p>
         </div>
         <div className="ms-10">
           <h4 className='text-md md:text-lg lg:text-2xl flex items-center gap-3 font-semibold'><PiBuildingApartmentFill className='inline-block'/>Infrastructure</h4>
           <p className='text-sm md:text-md text-gray-600'>Private project road and streetlights</p>
         </div>
       </div>
     </div>
   <div className='pt-10'>
       <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Unique points of Indus Valley</h2>
       <img className="mx-auto" src="../../images/product-overview.png" alt="Unique points of Indus Valley"/>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
         <div className="ms-10">
          <div className=''><FaHouseChimney className='inline-block text-2xl'/><span className='ms-3 text-md md:text-lg lg:text-xl font-semibold text-gray-700'>Secured gated community</span></div>
           {/* <p className='text-sm md:text-md text-gray-600'>Simplex and duplex options available</p> */}
         </div>
         <div className="ms-10">
          <div className=''><MdCottage className='inline-block text-2xl'/><span className='ms-3 text-md md:text-lg lg:text-xl font-semibold text-gray-700'>At the altitude of 8000 feet from sea level</span></div>
           {/* <p className='text-sm md:text-md text-gray-600'>Tailored-made as per customer design</p> */}
         </div>
         <div className="ms-10">
          <div className=''><FaRegBuilding className='inline-block text-2xl'/><span className='ms-3 text-md md:text-lg lg:text-xl font-semibold text-gray-700'>360-degree panoramic views of Nanda Devi Glaciers</span></div>
           {/* <p className='text-sm md:text-md text-gray-600'>1-2 BHK and Studio apartments</p> */}
         </div>
         <div className="ms-10">
          <div className=''><PiSecurityCameraFill className='inline-block text-2xl'/><span className='ms-3 text-md md:text-lg lg:text-xl font-semibold text-gray-700'>Private road access to every property</span></div>
           {/* <p className='text-sm md:text-md text-gray-600'>CCTV surveillance with 24/7 security guards</p> */}
         </div>
         <div className="ms-10">
          <div className=''><MdFastfood className='inline-block text-2xl'/><span className='ms-3 text-md md:text-lg lg:text-xl font-semibold text-gray-700'>Elite crowd and premium amenities</span></div>
           {/* <p className='text-sm md:text-md text-gray-600'>Hillcrest Cafe, Clubhouse, and Trekking trails</p> */}
         </div>
         <div className="ms-10">
          <div className=''><PiBuildingApartmentFill className='inline-block text-2xl'/><span className='ms-3 text-md md:text-lg lg:text-xl font-semibold text-gray-700'>Snowfall Region</span></div>
           {/* <p className='text-sm md:text-md text-gray-600'>Private project road and streetlights</p> */}
         </div>
       </div>
     </div>
     <div className="pt-10">
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Location</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="Location"/>
        <p className='mt-5 px-5 text-sm md:text-lg text-justify text-gray-600'>It is a 7-hour drive from Delhi and a 1-hour drive from Nainital, a perfect destination to invest in your dream house. The project is in Sundarkhal, which is in the main Mukteshwar region. This project is 5 minutes from the Dhanachuli market, where the residents can get all their daily essentials.</p>
     </div>
          <div className="pt-10">
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Why Second Homes are the Future ?</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="Location"/>
        <p className='mt-5 px-5 text-sm md:text-lg text-justify text-gray-600'>Living in an urbanized colony around a concrete jungle, there must have been a time when most of the individuals residing in these cities wished to have a small place on hills where they could relax from their fast-paced lifestyle and enjoy the natural beauty of the Himalayas. A place beyond daily tensions, where they can rethink, redevelop new thoughts, and reinvent themselves.</p>
     </div>
      <div className="pt-10">
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">What is a second home or a vacation home ?</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="Location"/>
        <p className='mt-5 px-5 text-sm md:text-lg text-justify text-gray-600'>There was a time when these second homes were seen as a statement of luxury, but now they are the need of the hour for the people living in political cities. These aesthetic cottages on hills are worth every penny you are paying for as there is a high appreciation recorded on these properties, especially post-COVID, as people have started realizing the value of a peaceful environment.</p>
     </div>
      <div className="pt-10 flex flex-col justify-center items-center">
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Investment Benefits: Indus Valley Mukteshwar</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="Location"/>
        <p className='mt-5 px-5 text-sm md:text-lg text-center text-gray-600'>Property Appreciation: Post covid, there was a sudden change in the market trend and customer taste. They realized the need for a place to be secluded with their loved ones. That’s why properties on hill stations have witnessed a great hike in their market value. If we talk about the Indus Valley in particular, there was a 40% increase in the value of the land in just the last three years. <br /> <br />Personal paradise for your loved ones: Who doesn’t want to spend time with their family? A warm, small cottage in the lap of the Himalayas is the perfect way to express your feelings for your family. Create a Legacy and Family Asset for generations. Potential for Rental Income: Return on investment is one of the key things that many individuals are concerned about, and for that, after purchasing a property at Indus Valley, you can rent out your cottage with Indus Valley homestay, or you can rent it out by yourself on various hotel booking platforms like Airbnb, booking.com, MakeMyTrip. <br /><br /> Relief from hot and humid weather: Places like Delhi NCR are overcrowded and have become a concrete jungle of buildings and roads. The temperatures are going beyond expectations; heat waves are one of the most crucial phases that people have to deal with, and that’s why a place in the mountains is essential for residents from plain areas.</p>
        <div className='mt-5'>
         <h4 className='text-md md:text-lg lg:text-2xl text-center font-bold uppercase font-mono'>Discover Peace, Discover Indus Valley</h4>
      </div>
        <button className='mx-auto rounded-md cursor-pointer bg-emerald-600 hover:bg-emerald-700 py-3 px-5 mt-5 text-white font-semibold'>Download Brochure &nbsp;<HiOutlineDocumentArrowDown className='text-2xl inline-block'/></button>
        <button className='mx-auto rounded-md cursor-pointer py-2 px-5 mt-5 text-white bg-green-800 hover:bg-green-700'>Read More &nbsp;<IoIosArrowDown className='text-2xl inline-block'/></button>
        <a className='my-10 font-semibold hover:underline' href='#'>Learn more about the Shubham Group</a>
     </div>
    </div>
  )
}

export default page