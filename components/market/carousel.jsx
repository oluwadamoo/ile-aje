import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import {
  FaArrowCircleRight,
  FaCaretRight,
  FaChevronCircleLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="relative">
      <button
        onClick={handlePrevSlide}
        className="flex items-center justify-center active:bg-gray-100 bg-[#fff] rounded-full shadow-lg h-[40px] w-[40px] absolute left-2 m-auto text-2xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      >
        <FaChevronLeft />
      </button>
      <div className="w-full h-[600px] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={() => {
            console.log("SWIPED");
            handleNextSlide();
          }}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-full bg-[#fff]"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                <img
                  src={image}
                  key={index}
                  className="animate-fadeIn h-full w-full object-cover"
                />
              );
            }
          })}
        </Swipe>
      </div>
      <button
        onClick={handleNextSlide}
        className="flex items-center justify-center bg-[#fff] rounded-full shadow-lg h-[40px] w-[40px] absolute right-2 m-auto text-2xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      >
        <FaChevronRight />
        {/* <AiOutlineRight  /> */}
      </button>
      <div className="relative flex justify-center p-2">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              className={
                index === currentSlide
                  ? "h-8 w-8 blur-[2px] mx-2 mb-2 cursor-pointer"
                  : "h-8 w-8   mx-2 mb-2 cursor-pointer"
              }
              key={index}
              onClick={() => {
                setCurrentSlide(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
