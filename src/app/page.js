"use client";
import { useState } from "react";
import Link from "next/link";
import Counter from "@/components/ui/microcomponents/counter.js";

export default function Home() {
  const [user, setUser] = useState({
    name: "",
    phone: "" 
  })

  const handleChange = (e) => {
     const {name, value} = e.target;
     setUser(prev => {
      return {
        ...prev,
        [name]:value
      }
     }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.name == "" || user.phone == ""){
      alert("Please enter name and phone number !");
      return;
    } 

    console.log(user);
    setUser({name: "", phone: ""})
  }



  return (
    <div className="bg-green-50">
      <main className="flex justify-center items-center relative mt-18 sm:mt-0">
        <video
        width={2000}
        height={1200}
         autoPlay
         loop
         muted
         playsInline 
         src="../../video/banner_video.mp4" />
         <div className="hidden lg:flex justify-center items-center absolute z-30 bottom-21 mx-auto bg-[#f8fffc90] border border-gray-400 px-4 py-2 rounded-md">
           <Link href={"/contact-us"}><h3 className="text-3xl font-[sans] font-black">Connect with us</h3></Link>
         </div>
      </main>
      <div className="py-15">
       <div className="">
        <h1 className="uppercase font-[sans] text-center text-lg md:text-xl lg:text-2xl font-bold text-green-900">Homes that breathe with nature 🌿</h1>
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Project Overview</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="product overview"/>
       </div>
       <div className="poppins max-w-7xl mx-auto px-5 text-sm md:text-lg text-justify font-base text-gray-600"><p className="mt-5">Welcome to Indus Valley Mukteshwar, a place that connects you to the majestic beauty of the Himalayas. Spanning across 10 acres of land, this private gated township in the lap of the Himalayas can be a perfect destination for you to invest in your Himalayan facing dream house. Located at a distance of 326 Km (7-hour drive) from Delhi and a 1.5-hour drive from Nainital, this property is nestled at 7,358 ft above sea level. It offers breathtaking 360-degree views of the snow-covered Nanda Devi Himalayan range, surrounded by pine and deodar trees, valleys, and fruit orchards.</p>
       <h4 className="text-center mt-5 text-green-700 text-xl md:text-2xl lg:text-4xl font-[mono] font-semibold">"A RESIDENCE OF LORD SHIVA "</h4>
       <p className="mt-5">This exclusive township is diversified to offer various accommodation options: studios and apartments, custom-built cottages, and premium semi-wooden villas. All the necessary government approvals, including the NOC from RERA, are in place. The amenities that come along with our gated community include electricity and water connections, dedicated parking spaces, a clubhouse, a restaurant, solar street lights, CCTV security, and much more. These Himalayan-facing cottages serve three purposes: vacation homes, retirement homes, and opportunities for those who want to run their homestay and seek a return on investment. Discover peace; Discover the Indus Valley.</p>
       </div>
      </div>
      <div className="py-10">
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Site Layout</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="Site Layout"/>
        <div className="mt-10 mx-auto container">
        <img className="w-full" src="../../images/new-ivm.webp" alt="site layout image" />
        </div>
      </div>
      <div className="py-10">
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Expertise</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="product overview"/>
        <div className="grid md:mt-0 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 overflow-hidden">
           <div className="p-2 md:p-6 rounded-lg flex flex-col items-center transition-transform hover:scale-105"><div className="text-2xl md:text-4xl lg:text-6xl text-green-600 poppins font-semibold counter-loaded"><Counter from={0} to={20}/></div><div className="font-semibold text-gray-700 text-sm uppercase text-center mt-4">acres of residential area developed</div></div>
           <div className="p-2 md:p-6 rounded-lg flex flex-col items-center transition-transform hover:scale-105"><div className="text-2xl md:text-4xl lg:text-6xl text-green-600 poppins font-semibold counter-loaded"><Counter from={0} to={4}/></div><div className="font-semibold text-gray-700 text-sm uppercase text-center mt-4">residential projects completed</div></div>
           <div className="p-2 md:p-6 rounded-lg flex flex-col items-center transition-transform hover:scale-105"><div className="text-2xl md:text-4xl lg:text-6xl text-green-600 poppins font-semibold counter-loaded"><Counter from={0} to={18}/></div><div className="font-semibold text-gray-700 text-sm uppercase text-center mt-4">years of expertise in hillside communities</div></div>
           <div className="p-2 md:p-6 rounded-lg flex flex-col items-center transition-transform hover:scale-105"><div className="text-2xl md:text-4xl lg:text-6xl text-green-600 poppins font-semibold counter-loaded"><Counter from={0} to={250}/></div><div className="font-semibold text-gray-700 text-sm uppercase text-center mt-4">happy residents</div></div>
        </div>
        <p className="font-bold mt-3 px-5">With 18 years of expertise, The Shubham Group is dedicated to crafting vibrant communities in Uttarakhand and Himachal Pradesh. Our focus on quality and customer satisfaction ensures every home we build is timeless and harmonious with its surroundings. We are not just selling properties; we are creating an environment around you.</p>
      </div>
      <div className="py-10">
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Route Map</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="Route Map"/>
        <div className="mt-10 flex justify-center items-center">
        <video className="" src="../../video/location_map.mp4" height={600} width={900} autoPlay loop playsInline muted/>
        </div>
      </div>
        <div className="py-10">
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Connect with Mother Nature</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="Connect with Mother Nature"/>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:gap-3 gap-8 mt-10">
          <div className="w-full lg:w-[40%]"><div className="w-auto h-[50vh]">
            <div className="contact_map row-fluid no-padd margin-lg-115t margin-sm-50t no-padd relative box-border h-full">
              <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.0490906901196!2d79.67352231457781!3d29.39811995576963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7f7740c0bc9%3A0xe9baaef9dd824df2!2sIndus%20Valley%20Sunderkhal%20Mukteshwar%20District%20Nainital!5e0!3m2!1sen!2sin!4v1636700789384!5m2!1sen!2sin" loading="lazy" className="h-[50vh] w-full"></iframe>
                </div>
                </div>
                </div>
                </div>
                <div className="hidden lg:block w-25 h-[80%] bg-gray-300">
                  </div><div className="w-full lg:w-auto flex items-center justify-center">
                    <form className="mx-auto w-full flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                      <p className="text-center text-green-700 text-xl md:text-2xl lg:text-4xl my-3 font-bold falija uppercase">Indus Valley</p>
                      <div className="flex gap-5 w-full lg:w-125 flex-col items-center">
                        <label className="flex w-full items-center lg:items-start flex-col text-xl text-gray-600 gap-2 poppins font-semibold">
                          <input id="name" name="name" className="border-b-2 border-green-700 bg-transparent text-left w-[70%] lg:w-full focus:none outline-none px-5 py-3" placeholder="Name" type="text" value={user.name} onChange={handleChange} />
                        </label>
                        <label className="flex w-full items-center lg:items-start flex-col text-xl text-gray-600 gap-2 poppins font-semibold">
                          <input id="phone" name="phone" className="border-b-2 border-green-700 bg-transparent text-left w-[70%] lg:w-full focus:none outline-none px-5 py-3" placeholder="Phone" type="tel" pattern="[0-9]{10}" maxLength="10" minLength="10" value={user.phone} onChange={handleChange} />
                        </label>
                          </div>
                        <button type="submit" className="mt-8 bg-green-700 cursor-pointer px-5 py-3 border-2 border-green-700 rounded-2xl hover:bg-transparent hover:text-green-700 text-white font-bold transition ease-in-out delay-150 duration-150">Submit</button>
                      </form>
                </div>
              </div>
          </div>
        <div className="py-10">
        <h2 className="uppercase font-[sans] text-center text-xl md:text-2xl lg:text-4xl font-bold mt-5 text-green-700">Testimonials</h2>
        <img className="mx-auto" src="../../images/product-overview.png" alt="testimonials"/>
        <div className="">
          <div className="flex gap-5 justify-center items-center mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 m-auto">
            <section className="text-center mx-auto p-6 lg:py-10 font-glacial transform transition-transform duration-500 hover:scale-110">
              <iframe src="https://www.youtube.com/embed/lxsUgVAG5DU" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" height="150" width="250" title="YouTube video player"></iframe>
            </section>
            <section className="text-center mx-auto p-6 lg:py-10 font-glacial transform transition-transform duration-500 hover:scale-110">
              <iframe src="https://www.youtube.com/embed/JJ4YaA4K2dg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" height="150" width="250" title="YouTube video player"></iframe>
            </section>
            <section className="text-center mx-auto p-6 lg:py-10 font-glacial transform transition-transform duration-500 hover:scale-110">
              <iframe src="https://www.youtube.com/embed/3VCF5F7AUx4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" height="150" width="250" title="YouTube video player"></iframe>
            </section>
            <section className="text-center mx-auto p-6 lg:py-10 font-glacial transform transition-transform duration-500 hover:scale-110">
              <iframe src="https://www.youtube.com/embed/ZPsYsz52Hms?start=2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" height="150" width="250" title="YouTube video player"></iframe>
            </section>
            </div>
           </div>
          </div>
      </div>
      <div className="rounded-md flex flex-col fixed z-40 bottom-0 right-0 gap-5 m-5"><Link href="https://www.google.com/maps/dir//Indus+Valley+Mukteshwar,Dhanachuli,State+Highway,+Nainital,+Uttarakhand+263132/@29.39809,79.5933096,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3908d7f7740c0bc9:0xe9baaef9dd824df2!2m2!1d79.675711!2d29.3981153?entry=ttu" target="_blank" rel="noreferrer"><img className="hover:scale-125 transition-all duration-100" width="48" height="48" src="https://img.icons8.com/color/96/marker--v1.png" alt="location" /></Link><Link href="tel:+918510850101"><img className="hover:scale-125 transition-all duration-100" width="48" height="48" src="https://img.icons8.com/fluency/48/phone--v1.png" alt="phone" /></Link><Link href="https://wa.me/918826278989" target="_blank" rel="noreferrer"><img className="hover:scale-125 transition-all duration-100" width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" /></Link></div>
    </div>
  );
}
