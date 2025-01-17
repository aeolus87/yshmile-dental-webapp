import { useState, useEffect } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const images: CarouselImage[] = [
    {
      src: "/assets/carousel0.jpg",
      alt: "Old man smiling",
    },
    {
      src: "/assets/carousel1.jpg",
      alt: "Modern dental office with state-of-the-art equipment",
    },
    {
      src: "/assets/carousel3.jpg",
      alt: "Comfortable dental treatment room",
    },
    {
      src: "/assets/carousel4.jpg",
      alt: "Dental care for all ages",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full max-w-2xl h-[500px] mx-auto">
      {/* Main carousel container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              onLoad={handleImageLoad}
            />
          </div>
        ))}

        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-10 h-10 border-4 border-[#8B7DA7] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Navigation arrows */}
        <button
          onClick={previousSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-[#6A5B7B]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-[#6A5B7B]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#6A5B7B] w-6"
                : "bg-[#8B7DA7] opacity-50 hover:opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
