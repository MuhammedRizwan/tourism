export default function TripGallery() {
    const trips = [
        '/images/gallery/trip-1.jpg',
        '/images/gallery/trip-2.jpeg',
        '/images/gallery/trip-3.jpeg',
        '/images/gallery/trip-4.jpg',
        // '/images/gallery/trip-5.jpg',
        '/images/gallery/trip-6.jpg',
        '/images/gallery/trip-7.jpg',
        '/images/gallery/trip-8.jpg',
    ];

    return (
        <section className="bg-[#f7f7f3] py-16 px-4 md:px-20 text-center">
            <h2 className="text-2xl md:text-4xl font-serif text-gray-900 mb-10">
                What kind of trip are you looking for?
            </h2>

            <div className="flex gap-4 overflow-x-auto px-2 md:px-1 scrollbar-hide mb-10">
                {trips.map((src, idx) => (
                    <div
                        key={idx}
                        className="group relative min-w-[150px] md:w-[250px] h-36 md:h-64 rounded-xl overflow-hidden shadow-sm flex-shrink-0 transition-all duration-500  hover:min-w-[350px]"
                    >
                        <img
                            src={src}
                            alt={`Trip ${idx + 1}`}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                ))}
            </div>

            <button className="mt-4 px-6 py-2 border border-gray-600 text-gray-800 rounded-full text-sm hover:bg-gray-100 transition">
                View All Journeys
            </button>
        </section >
    );
}
