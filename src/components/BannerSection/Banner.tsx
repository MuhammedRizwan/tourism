import BannerTopNav from "./BannerTopNav";
import BannerToolbar from "./BannerToolbar";
import BannerHeader from "./BannerHeader";
import BannerServices from "./BannerService";

const navItems = [
    "Find Connections", "Find New Beginnings", "Find Pause", "Find Balance",
    "Find Bliss", "Find Joy", "Find Clarity", "Find Meaning",
    "Find Meaning", "Find Clarity", "Find Joy", "Find Bliss", "Find Pause"
];

const services = [
    { icon: "/images/All Hotels & Resorts.png", label: "All Hotels & Resorts" },
    { icon: "/images/Residences.png", label: "Residences" },
    { icon: "/images/Villa & Residence.png", label: "Villa & Residence" },
    { icon: "/images/Dining.png", label: "Dining" },
    { icon: "/images/Private Jet.png", label: "Private Jet" },
    { icon: "/images/Yachts.png", label: "Yachts" },
    { icon: "/images/Summer Travel.png", label: "Summer Travel" },
];

export default function Banner() {
    return (
        <div className="relative min-h-screen text-white">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/images/Banner.jpeg')" }}
            ></div>
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <BannerTopNav items={navItems} />
            <BannerToolbar />
            <BannerHeader />
            <BannerServices services={services} />
        </div>
    );
}
