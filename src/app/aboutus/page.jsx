import React from 'react'
import { FaHouseChimney } from "react-icons/fa6";
import { MdCottage, MdFastfood } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { PiSecurityCameraFill, PiBuildingApartmentFill } from "react-icons/pi";


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
     <div className='py-10'>
       <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Offerings of Indus Valley</h2>
       <img className="mx-auto" src="../../images/product-overview.png" alt="Offerings of Indus Valley"/>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
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

    </div>
  )
}

export default page