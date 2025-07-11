export default function ExclusivitySection() {
  const cards = [
    {
      title: "Personalized Luxury Getaways",
      image: "/images/meet-and-assist.jpg",
    },
    {
      title: "The Luxury Stay Collection",
      image: "/images/luxury-stay.jpg",
    },
  ];

  return (
    <section className="bg-[#f8f1e6] py-16 px-4 md:px-6">
      <h2 className="text-center text-2xl md:text-4xl font-serif text-gray-800 mb-10">
        Exclusivity with Simplicity
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative h-76 md:h-[32rem] bg-cover bg-center rounded overflow-hidden shadow-sm"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="absolute bottom-0 w-full bg-black/50 px-6 py-4 text-white text-sm md:text-base font-medium">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
