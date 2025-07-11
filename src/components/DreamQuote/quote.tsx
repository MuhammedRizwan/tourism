
export default function DreamQuote() {
  return (
    <>
    <div className="relative h-screen w-full">
      <img
        src="/images/dream.jpg" 
        alt="Travel Dream"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <h1 className="text-white text-xl md:text-3xl font-serif max-w-2xl leading-snug">
          We’re not just in the travel business<br />
          we’re in the business of making dreams a reality…
        </h1>
      </div>
    </div>
    <div className=" w-full min-h-20 bg-[#f8f1e6] ">

    </div>
    </>
  );
}
