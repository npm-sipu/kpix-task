import React, { useState, useEffect } from "react";

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const items: { src: string; name: string }[] = [
    {
      src: "https://unsplash.com/photos/a-broken-laptop-computer-sitting-on-top-of-a-table-rMSYJWOIgMw",
      name: "Item 1",
    },
    {
      src: "https://unsplash.com/photos/a-womans-hand-holding-a-red-bow-on-a-yellow-background-aMWvo3r0yiY",
      name: "Item 2",
    },
    {
      src: "https://unsplash.com/photos/a-woman-sitting-at-a-table-using-a-cell-phone-nplkFSNschY",
      name: "Item 3",
    },
    {
      src: "https://unsplash.com/photos/a-couple-of-giraffe-standing-next-to-each-other-P9EU1-wjGc8",
      name: "Item 4",
    },
    {
      src: "https://unsplash.com/photos/a-crowd-of-people-walking-around-a-carnival-of16EsZnbtY",
      name: "Item 5",
    },
  ];
  const itemsPerView: number = 5;

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
    <div className='relative w-full overflow-hidden'>
      <div className='carousel-track flex justify-between transition-transform duration-700 ease-in-out'>
        {orderedItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item w-[100px] flex flex-col items-center ${
              index === 0 ? "bg-white" : ""
            }`}
            style={{ transition: "background-color 0.7s ease-in-out" }}
          >
            <img
              src={item.src}
              className='block  h-10 w-10 rounded-full'
              alt={item.name}
            />
            {/* <span>{item.name}</span> */}
          </div>
        ))}
      </div>
      <button
        id='prev-button'
        className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={prevSlide}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <button
        id='next-button'
        className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        onClick={nextSlide}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
