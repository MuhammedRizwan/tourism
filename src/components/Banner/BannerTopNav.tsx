interface BannerTopNavProps {
  items: string[];
}

export default function BannerTopNav({ items }:BannerTopNavProps) {
  return (
    <div className="absolute top-0 left-0 z-30 my-6 w-full overflow-x-auto whitespace-nowrap bg-transparent border-b border-white/30 scrollbar-hide">
      <div className="flex space-x-8 px-6 py-3 text-white text-sm md:text-base font-light">
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 cursor-pointer hover:underline font-medium mx-6">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
