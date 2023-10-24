import React, { useRef, useEffect } from 'react';

const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;

    const scroll = () => {
      if (container) {
        container.scrollLeft += 1; // Adjust the scroll speed as needed
        if (container.scrollLeft >= scrollWidth) {
          container.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 10); // Adjust the interval for smoother or faster scrolling

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='pt-20 pb-12'>
      {/* Náhled + tips for creating README */}
      <div className='w-[100%] h-[50%] gap-8 bg-captionColor shadow-xl flex flex-row justify-center items-center pt-12 pb-24'>
        <div className='w-full overflow-hidden'>
          <div className='flex animation-container' ref={containerRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
