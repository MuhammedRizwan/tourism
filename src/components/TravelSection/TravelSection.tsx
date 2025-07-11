export default function TravelSection() {
  const cards = [
    {
      image: "/images/destinations.png",
      title: "Destinations",
      desc: "We can organize remarkable travel experiences on all seven continents. Where do you want to go?",
    },
    {
      image: "/images/journeys.png",
      title: "Journeys",
      desc: "Find your dream journey whether you want to travel privately or with a group, by train, boat or plane.",
    },
    {
      image: "/images/stayss.png",
      title: "Stays",
      desc: "Our collection of inspiring places to stay includes safari lodges, super-villas, and boutique riverboats.",
    },
  ];

  return (
    <section className="bg-[#f8f1e6] py-12 px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mb-3">
          Tourists Travel Bureau <br />
          <span className="font-light">{"Journey's World"}</span>
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Tourists Travel Bureau is dedicated to providing spectacular wholesale services
          throughout the GCC and beyond. Our journey towards becoming a leading B2B
          wholesaler is rooted in foundations of reliability, professionalism, speed, and most
          importantly, trust.
        </p>
      </div>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
  {cards.map((card, index) => (
    <div
      key={index}
      className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-76 md:h-[32rem]"
      style={{ backgroundImage: `url(${card.image})` }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="absolute bottom-0 z-10 p-5 text-white">
        <h3 className="text-xl font-serif mb-2">{card.title}</h3>
        <p className="text-sm">{card.desc}</p>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
