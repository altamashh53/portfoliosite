import React from 'react';

const brands = [
  { name: 'Google', url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png' },
  { name: 'Framer', url: 'https://framerusercontent.com/images/48ha9ZR9oZQGQ6gZ8YUfElP3T0.png' },
  { name: 'Figma', url: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format' },
  { name: 'Canva', url: 'https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg' },
  { name: 'Search Engine', url: 'https://cdn.worldvectorlogo.com/logos/google-g-2015.svg' },
];

const BrandCarousel: React.FC = () => {
  return (
    <div className="w-full bg-white bg-opacity-5 py-12 overflow-hidden">
      <div className="flex animate-scroll">
        <div className="flex space-x-16 items-center min-w-full">
          {brands.map((brand, index) => (
            <div key={index} className="flex-none">
              <img 
                src={brand.url} 
                alt={brand.name}
                className="h-8 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
        <div className="flex space-x-16 items-center min-w-full">
          {brands.map((brand, index) => (
            <div key={`duplicate-${index}`} className="flex-none">
              <img 
                src={brand.url} 
                alt={brand.name}
                className="h-8 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;