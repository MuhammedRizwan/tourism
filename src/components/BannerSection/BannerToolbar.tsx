'use client'
import { TextQuote } from "lucide-react";
import { useState } from "react";
import MenuModal from "../modal/menu";

export default function BannerToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="absolute top-24 left-0 z-30 w-full px-4 md:px-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 text-left">
            <TextQuote className="text-2xl md:text-4xl" onClick={()=>setIsOpen(true)} />
          </div>

          <div className="flex-1 flex justify-center">
            <img src="/images/logo.png" alt="Logo" className="h-12 md:h-20 object-contain" />
          </div>

          <div className="flex-1 flex justify-end">
            <button className="text-white font-semibold px-4 py-2 bg-white/40 rounded-3xl text-xs md:text-base">
              Book your Stay
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <MenuModal setIsOpen={setIsOpen}/>
      )}
      </>
  );
}
