import React, { useState, useRef, useEffect } from "react";
import BabyShowerDecoration from "../../assets/images/BabyShowerDecoration.jpg";
import BirthdayDecoration from "../../assets/images/BirthdayDecoration.jpg";
import GaneshaDecoration from "../../assets/images/GaneshaDecoration.jpg";
import WeddingDecoration from "../../assets/images/WeddingDecoration.jpg";

const CategoriesCarousel = () => {
  const slides = [
    {
      image: WeddingDecoration,
      title: "Wedding Decorations",
      description:
        "Make your special day unforgettable with our exquisite wedding decorations.",
    },
    {
      image: BirthdayDecoration,
      title: "Birthday Decorations",
      description: "Celebrate in style with our vibrant birthday decorations!",
    },
    {
      image: BabyShowerDecoration,
      title: "Baby Shower Decorations",
      description:
        "Welcome the little one with our charming baby shower decorations.",
    },
    {
      image: GaneshaDecoration,
      title: "Ganapati Decorations",
      description: "Celebrate Ganesh Chaturthi with our beautiful Ganapati decorations.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startPosition = useRef(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDragStart = (e) => {
    setIsDragging(true);
    startPosition.current =
      e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
    clearInterval(intervalRef.current);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    let endPosition;
    endPosition = e.type === "mouseup" ? e.clientX : e.changedTouches[0].clientX;

    const delta = startPosition.current - endPosition;

    if (delta > 50) {
      nextSlide();
    } else if (delta < -50) {
      prevSlide();
    }

    setIsDragging(false);
    intervalRef.current = setInterval(nextSlide, 3000);
  };

  return (
    <div
      className="flex justify-center items-center mx-auto my-10 flex-col w-full md:w-[90vw] select-none"
      style={{ fontFamily: "Playfair Display" }}
    >
      <div
        className="overflow-hidden rounded-lg"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-[50vh] md:h-[70vh] bg-center bg-cover relative">
              {/* Image container */}
              <div className="relative w-full h-full">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
                {/* Text Content inside the image container */}
                <div className="absolute inset-0 flex flex-col justify-end items-start w-full  text-white p-5 md:p-10 bg-black bg-opacity-50">
                  <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold drop-shadow-lg shadow-2xl p-2 md:p-5 rounded-xl border-2 border-white" style={{backgroundColor:'rgba(0,0,0,0.5)'}}>{slide.title}</h1>
                  <p className="mt-2 md:mt-4 max-w-md md:max-w-lg">{slide.description}</p>
                  <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 text-white border-2 border-white font-bold rounded-full bg-[#9c27b0]">
                    LET'S CELEBRATE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-red-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesCarousel;
