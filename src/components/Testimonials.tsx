import { useState, useEffect } from "react";

interface Testimonial {
  name: string;
  feedback: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change testimonial every 8 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-[#F3F1F6]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#6A5B7B]">
          What Our Patients Say
        </h2>
        <div className="flex justify-center">
          <div className="p-6 bg-white rounded-lg shadow-md border border-[#F3F1F6] w-full max-w-md">
            <p className="text-gray-700 mb-4">
              "{testimonials[currentIndex].feedback}"
            </p>
            <h4 className="text-[#6A5B7B] font-semibold">
              - {testimonials[currentIndex].name}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
