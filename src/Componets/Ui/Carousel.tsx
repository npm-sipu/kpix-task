import React, { useState, useEffect } from "react";

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const items: { src: string }[] = [
    {
      src: "/Group 1.svg",
    },
    {
      src: "/Group 2.svg",
    },
    {
      src: "/Group 3.svg",
    },
    {
      src: "/Group 4.svg",
    },
    {
      src: "/Group 5.svg",
    },
    {
      src: "/Group 6.svg",
    },
    {
      src: "/Group 7.svg",
    },
    {
      src: "/Group 8.svg",
    },
    {
      src: "/Group 9.svg",
    },
  ];
  const itemsPerView: number = 9;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const orderedItems = [
    ...items.slice(currentIndex, items.length),
    ...items.slice(0, currentIndex),
  ].slice(0, itemsPerView);

  return (
    <div className='relative w-full items-center flex gap-2'>
      <button
        id='prev-button'
        className='flex items-center justify-center h-full cursor-pointer group focus:outline-none'
        onClick={prevSlide}
      >
        <img src='/previous.svg' alt='previous' />
      </button>
      <div className='carousel-track flex justify-center transition-transform duration-700 ease-in-out'>
        {orderedItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item w-max flex flex-col items-center`}
            style={{ transition: "background-color 0.7s ease-in-out" }}
          >
            <img src={item.src} className='block' alt={item.src} />
            {/* <span>{item.name}</span> */}
          </div>
        ))}
      </div>

      <button
        id='next-button'
        className=' flex items-center justify-center h-full cursor-pointer group focus:outline-none'
        onClick={nextSlide}
      >
        <img src='/next.svg' alt='next' />
      </button>
    </div>
  );
};

export default Carousel;
