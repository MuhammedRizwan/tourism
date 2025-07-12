// app/components/Footer.tsx

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white text-sm">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 border-1 border-r-0 border-l-0 border-white/20 mb-0">
                    <div className="flex items-center mb-9">
                        <img src="/images/logo.png" alt="TBG Logo" className="w-24 md:w-32 object-contain" />
                        <div>
                            <p className="text-md md:text-lg font-semibold">TOURISTS TRAVEL</p>
                            <p className=" text-md md:text-lg font-semibold">BUREAU <span className="text-[7px] md:text-xs">UK LTD</span></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 md:grid-cols-3 gap-3 w-fit text-lg px-4 py-3 mb-10">
                        {[Instagram, Facebook, Linkedin, Twitter, Youtube].map((Icon, idx) => (
                            <div
                                key={idx}
                                className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center shadow hover:bg-gray-200 hover:text-black transition"
                            >
                                <Icon size={15} />
                            </div>
                        ))}
                    </div>


                    <p className="text-white md:pt-10 px-2 md:px-4">
                        Discover the world’s most captivating places, from hidden gems to popular hotspots.
                        Explore our curated selection of destinations that inspire adventure and
                        wanderlust. Start planning your next journey today!
                    </p>

                    <div className="py-3 mt-10 flex justify-center items-center md:border-t border-white/20">
                        <button className="border border-white bg-white text-black px-40 py-4 hover:bg-white hover:text-gray-400 transition">
                            Explore Destinations
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 border-1 md:border-b border-white/20">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
                        <div>
                            <h4 className="text-lg font-serif mb-2">Discover</h4>
                            <ul className="space-y-1 text-sm text-gray-400">
                                <li>About us</li>
                                <li>Stay</li>
                                <li>Tours</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-serif mb-2">Travel</h4>
                            <ul className="space-y-1 text-sm text-gray-400">
                                <li>Destinations</li>
                                <li>Hotels</li>
                                <li>Villas</li>
                                <li>Explore UK</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-serif mb-2">Languages</h4>
                            <ul className="space-y-1 text-sm text-gray-400">
                                <li>English</li>
                                <li>Arabic</li>
                                <li>French</li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-3 flex justify-center items-center border-t border-white/20  gap-2 mt-0 md:mt-70">
                        <input type="text" name="" id="" placeholder="Enter Your Email Address" className="border border-white w-1/2 h-12 placeholder:px-2" />
                        <button className=" bg-white text-black px-10 py-4 hover:bg-white hover:text-gray-400 transition">
                            subscribe
                        </button>

                    </div>
                </div>
            </div>
            <div className="py-6 mt-10 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
                <p className="mb-2 md:mb-0">
                    ©Copyright Tourists Travel Bureau UK LTD. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Cookie Policy</a>
                    <a href="#" className="hover:text-white">Imprint</a>
                </div>
            </div>
        </footer>
    );
}


// import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white text-sm">
//       <div className="flex flex-col md:flex-row">
//         {/* Left Column */}
//         <div className="md:w-1/2 border border-white/20 md:border-r-0 p-6">
//           {/* Logo and Name */}
//           <div className="flex items-center gap-4 mb-6">
//             <img src="/images/logo.png" alt="TBG Logo" className="w-24 md:w-32 object-contain" />
//             <div>
//               <p className="text-lg font-semibold">TOURISTS TRAVEL</p>
//               <p className="text-lg font-semibold">BUREAU <span className="text-xs">UK LTD</span></p>
//             </div>
//           </div>

//           {/* Social Icons */}
//           <div className="grid grid-cols-5 gap-3 w-fit mb-6">
//             {[Instagram, Facebook, Linkedin, Twitter, Youtube].map((Icon, idx) => (
//               <div
//                 key={idx}
//                 className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-gray-200 hover:text-black transition"
//               >
//                 <Icon size={16} />
//               </div>
//             ))}
//           </div>

//           {/* Description */}
//           <p className="text-white mb-8">
//             Discover the world’s most captivating places, from hidden gems to popular hotspots.
//             Explore our curated selection of destinations that inspire adventure and wanderlust.
//             Start planning your next journey today!
//           </p>

//           {/* CTA Button */}
//           <div className="pt-4 border-t border-white/20">
//             <button className="w-full md:w-auto border border-white bg-white text-black px-6 py-3 mt-4 hover:bg-gray-200 transition">
//               Explore Destinations
//             </button>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="md:w-1/2 border-t md:border-t-0 border-white/20 p-6">
//           {/* Links */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6">
//             <div>
//               <h4 className="text-lg font-serif mb-2">Discover</h4>
//               <ul className="space-y-1 text-sm text-gray-400">
//                 <li>About us</li>
//                 <li>Stay</li>
//                 <li>Tours</li>
//                 <li>Contact</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-serif mb-2">Travel</h4>
//               <ul className="space-y-1 text-sm text-gray-400">
//                 <li>Destinations</li>
//                 <li>Hotels</li>
//                 <li>Villas</li>
//                 <li>Explore UK</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-lg font-serif mb-2">Languages</h4>
//               <ul className="space-y-1 text-sm text-gray-400">
//                 <li>English</li>
//                 <li>Arabic</li>
//                 <li>French</li>
//               </ul>
//             </div>
//           </div>

//           {/* Email Subscription */}
//           <div className="flex flex-col sm:flex-row gap-3 items-center border-t border-white/20 pt-4">
//             <input
//               type="text"
//               placeholder="Enter Your Email Address"
//               className="w-full sm:w-1/2 h-12 px-3 text-black placeholder-gray-600"
//             />
//             <button className="bg-white text-black px-6 py-3 w-full sm:w-auto hover:bg-gray-200 transition">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="py-6 mt-10 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
//         <p className="mb-2 md:mb-0">
//           ©Copyright Tourists Travel Bureau UK LTD. All rights reserved.
//         </p>
//         <div className="flex space-x-4">
//           <a href="#" className="hover:text-white">Privacy Policy</a>
//           <a href="#" className="hover:text-white">Cookie Policy</a>
//           <a href="#" className="hover:text-white">Imprint</a>
//         </div>
//       </div>
//     </footer>
//   );
// }
