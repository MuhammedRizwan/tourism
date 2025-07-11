import { Dispatch, SetStateAction } from "react";

interface ModalProps{
    setIsOpen:Dispatch<SetStateAction<boolean>>
}

export default function MenuModal({setIsOpen}:ModalProps) {
  return (
    <div className="relative inset-0 z-50 w-full h-screen flex text-gray-800 font-sans">
      
      <div className="w-3/7 bg-[#f4f1ed] p-6 flex flex-col justify-between">
        <div>
          <button className="text-2xl mb-6" onClick={()=>setIsOpen(false)}>×</button>
          <h4 className="uppercase text-sm mb-2 text-gray-500">Menu's</h4>
          <ul className="space-y-4 text-2xl font-serif">
            <li className="hover:underline">Destinations</li>
            <li>Journeys</li>
            <li>Stays</li>
            <li>Stories</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="border-t border-gray-300 my-6"></div>
          <h5 className="mb-2 font-semibold">Discover</h5>
          <ul className="space-y-1 text-gray-600">
            <li>The Exclusive Collection</li>
            <li>Idea</li>
            <li>Offers</li>
            <li>Journey Finder</li>
          </ul>
          <div className="mt-6 flex items-center space-x-2 text-yellow-500">
            <span>⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600">5.0/1,230 reviews</span>
          </div>
        </div>
      </div>

      <div className="w-2/7 bg-white p-6 overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <img src="/images/italian riviera.webp" alt="Region 1" className="rounded-md w-full h-32 object-cover" />
          <img src="/images/amalfi coast.jpg" alt="Region 2" className="rounded-md w-full h-32 object-cover" />
        </div>
        <ul className="space-y-3 text-md">
          {[
            "Africa", "Antarctica & The Arctic", "Asia", "Australasia",
            "Central America", "Europe", "Indian Ocean",
            "Middle East & North Africa", "North America", "South America", "The Caribbean"
          ].map((region) => (
            <li key={region} className="flex justify-between border-b border-gray-200 pb-2">
              {region} <span className="text-gray-400">›</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/7 bg-white">
      <img src="/images/Banner.jpeg" alt="" className="object-cover blur-xs h-80"/>
        <ul className="space-y-3 text-md text-gray-700 p-6">
          <li>France</li>
          <li>Spain</li>
          <li>Poland</li>
          <li>Italia</li>
          <li>Malta</li>
          <li>Norway</li>
        </ul>
      </div>
    </div>
  );
}
