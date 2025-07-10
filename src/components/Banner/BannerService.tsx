
interface ServiceItem {
  icon: string;
  label: string;
}

interface BannerServicesProps {
  services: ServiceItem[];
}
export default function BannerServices({ services }:BannerServicesProps) {
  return (
  <div className="absolute bottom-10 z-30 w-full bg-transparent">
  <div className="border-b border-white/30 mx-20">
    <div className="w-full flex justify-center flex-wrap gap-4 md:gap-20 px-6 py-4 text-white text-center text-sm">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center space-y-1 min-w-[80px]">
          <img
            src={service.icon}
            alt={service.label}
            className="w-5 h-5 md:w-10 md:h-10"
          />
          <span className="text-xs md:text-sm">{service.label}</span>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}
