export default function WhyBookSection() {

    return (
        <section className="bg-[#f8f1e6] py-16 px-4 md:px-6 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                <div className="text-center py-6 rounded-lg">
                    <h2 className="text-2xl md:text-4xl font-sans text-gray-900 mb-10">Why Book with us?</h2>
                </div>
                <div className=" p-6 rounded-sm bg-white">
                    <h3 className="text-xl font-serif text-gray-800 mb-3">Hotel Partnerships</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">We collaborate with a handpicked selection of the world’s finest hotels and resorts, each chosen for its exceptional standards, distinctive character, and commitment to excellence. From chic urban hideaways to serene beachfront sanctuaries and heritage-rich estates, our portfolio reflects a diverse array of experiences tailored to suit every traveler’s desires. Our longstanding relationships with these esteemed properties allow us to offer our clients exclusive benefits—such as priority upgrades, late check-outs, complimentary amenities, and thoughtfully personalized touches.</p>

                </div>
                <div className=" p-6 rounded-sm bg-white">
                    <h3 className="text-xl font-serif text-gray-800 mb-3">365 Private Travel</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">365 is a bespoke travel company, specializing in curating exceptional, tailor-made journeys for discerning travelers. With a global network of elite partners and insider access to the world’s finest destinations, we offer seamless, personalized experiences whether it’s a secluded island retreat, an opulent cultural tour, or an unforgettable city escape. Our dedicated travel advisors craft every itinerary with care, ensuring that every detail reflects your tastes, desires, and lifestyle.</p>

                </div>
                <div className="rounded-sm bg-white">

                    <img
                        src='/images/cruises.webp'
                        alt='Small Group Journeys'
                        className="w-full h-72 object-cover"
                    />
                    <h3 className="text-xl font-serif text-gray-800 my-3 mx-6">Small Group Journeys</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mx-6">Intimate, curated travel experiences designed for those who seek connection, discovery, and comfort. Explore the world in the company of like-minded travelers.</p>
                </div>
                <div className="rounded-sm bg-white md:col-span-2">

                    <img
                        src='/images/zeebra.avif'
                        alt='Safari Experiences'
                        className="w-full h-72 object-cover"
                    />
                    <h3 className="text-xl font-serif text-gray-800 my-3 mx-6">Safari Experiences</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mx-6">Journey into the wild with bespoke safari adventures designed for the curious and the bold. From luxury tented camps to private game drives, discover untamed landscapes, majestic wildlife, and immersive moments crafted with comfort, elegance, and authenticity</p>
                </div>
            </div>


        </section>
    );
}


