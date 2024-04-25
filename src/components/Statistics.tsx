"use client"
import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Statistics = (): JSX.Element => {
  const [counterOn, setCounterOn] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    // Function to handle the ScrollTrigger logic
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Activate Counter if scroll position is greater than 100 pixels
      if (scrollPosition > 100) {
        setCounterOn(true);
      } else {
        setCounterOn(false);
      }
    };

    // Attach ScrollTrigger to the statsRef element
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: 'top center', // Adjust as per your requirements
      end: 'bottom center', // Adjust as per your requirements
      onEnter: () => setCounterOn(true),
      onLeaveBack: () => setCounterOn(false)
    });

    // Attach scroll event listener to handleScroll function
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  interface StatsProps {
    quantity: number;
    description: string;
  }

  const stats: StatsProps[] = [
    {
      quantity: 2000,
      description: "Users",
    },
    {
      quantity: 112,
      description: "Downloads",
    },
  ];

  return (
    <div ref={statsRef} id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
        {stats.map(({ quantity, description }: StatsProps, index) => (
          <div key={index} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">
              {counterOn && <CountUp start={0} end={quantity} duration={2} delay={0} />}
              +
            </h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
