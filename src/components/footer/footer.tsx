// app/components/Footer.tsx

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white text-sm">
            <div className="flex">
                <div className="w-1/2 border-1 border-r-0 border-l-0 border-white/20 mb-0">
                    <div className="flex items-center mb-9">
                        <img src="/images/logo.png" alt="TBG Logo" className="w-30 h-20" />
                        <div>
                            <p className="text-lg font-semibold">TOURISTS TRAVEL</p>
                            <p className="text-lg font-semibold">BUREAU <span className="text-xs">UK LTD</span></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 w-fit text-lg px-4 py-3 mb-10">
                        {[Instagram, Facebook, Linkedin, Twitter, Youtube].map((Icon, idx) => (
                            <div
                                key={idx}
                                className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center shadow hover:bg-gray-200 hover:text-black transition"
                            >
                                <Icon size={15} />
                            </div>
                        ))}
                    </div>


                    <p className="text-white pt-10 px-4">
                        Discover the world’s most captivating places, from hidden gems to popular hotspots.
                        Explore our curated selection of destinations that inspire adventure and
                        wanderlust. Start planning your next journey today!
                    </p>

                    <div className="py-3 mt-10 flex justify-center items-center border-t border-white/20">
                        <button className="border border-white bg-white text-black px-40 py-4 hover:bg-white hover:text-gray-400 transition">
                            Explore Destinations
                        </button>
                    </div>
                </div>
                <div className="w-1/2 border-1 border-b border-white/20">
                    <div className="flex flex-col md:flex-row gap-10 text-white justify-center py-10 mb-51">
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
                    <div className="py-3 flex justify-center items-center border-t border-white/20  gap-2">
                        <input type="text" name="" id="" placeholder="Enter Your Email Address" className="border border-white w-1/2 h-12 placeholder:px-2" />
                        <button className=" bg-white text-black px-10 py-4 hover:bg-white hover:text-gray-400 transition">
                            subscribe
                        </button>

                    </div>
                </div>
            </div>
            <div className=" py-6 mt-10 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
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
