import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    company: "Ennoble Technology",
    result:
      "We revamped their entire online presence with a high-converting website and optimized their Google Business Profile. The results: 50% increase in website visits and 34% growth in GBP views within just one month.",
    rating: 5,
    image: "/images/img1.webp",
  },
  {
    company: "Haybales & Chandeliers LTD",
    result:
      "We built a custom website and ran targeted Meta and Google Ad campaigns.The campaign targeted local areas & was successful.",
    rating: 5,
    image: "/images/img2.webp",
  },
  {
    company: "Terrace Works",
    result:
      "We designed a sharp, mobile-first site to showcase their services and boost local visibility—optimized for calls and quote requests.",
    rating: 5,
    image: "/images/img3.webp",
  },
  {
    company: "Home Theatre Business",
    result:
      "Built a sleek, high-end website to match their luxury brand—emphasizing product visuals, client testimonials, and seamless booking.",
    rating: 5,
    image: "/images/img4.webp",
  },
  {
    company: "Pricing Cards",
    result:
      "Developed a conversion-focused pricing section—clear structure, strong CTA, and trust-building design elements for better decision-making.",
    rating: 5,
    image: "/images/img5.webp",
  },
  {
    company: "Detailed Services",
    result:
      "Crafted detailed service pages with rich visuals, keyword-focused copy, and strong internal linking to support SEO and lead gen.",
    rating: 5,
    image: "/images/img6.webp",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8">
        <h2 className="text-4xl font-bold text-white mb-12">
          See How We've Helped Others
        </h2>

        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>

          <div
            className="flex gap-8 testimonial-scroller" // <--- Applied the new class here
            // style={{ animation: "scroll 30s linear infinite", width: "max-content" }} // <--- Removed inline style
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-5 rounded-lg overflow-hidden w-[400px] flex-shrink-0"
              >
                <div className="relative h-60 w-full">
                  <img
                    src={testimonial.image}
                    alt={testimonial.company}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#8CEAB3] fill-current"
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {testimonial.company}
                  </h3>
                  <p className="text-white text-opacity-70 leading-relaxed">
                    {testimonial.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
