
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
  <div className="border-b border-white/30 md:mx-20">
    <div className="w-full flex justify-center flex-wrap md:gap-6 md:px-6 py-4 text-white text-center text-sm">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col items-center space-y-1 min-w-[80px]">
          <img
            src={service.icon}
            alt={service.label}
            className="w-5 h-5 md:w-8 md:h-8"
          />
          <span className="text-[8px] md:text-sm">{service.label}</span>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}
