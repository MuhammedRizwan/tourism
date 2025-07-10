export default function BannerHeader() {
  return (
    <div className="absolute top-80 z-30 max-w-3xl mx-5 md:mx-20">
      <h1 className="text-4xl md:text-6xl font-serif leading-tight font-light mb-4">
        <span className="block">Step Into a</span>
        <span className="block">World of Discovery</span>
      </h1>
      <p className="hidden md:block mt-4 text-sm md:text-base text-gray-200 font-light mb-10">
        Since our inception in 2013, we have kept one vision at the heart of our proposition,
        to make the booking process smooth and seamless for our esteemed partners,
        to sell to their clients at an impressive gain. As a forward-thinking destination
        management company, we pride ourselves on simplifying the lives of our partners.
        Your needs come first, always. This is why we work effortlessly, so you can focus on
        what matters — being the best in your region.
      </p>
    </div>
  );
}
