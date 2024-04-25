"use client"
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

export const Statistics = (): JSX.Element => {
  const [counterOn, setCounterOn] = useState(false)

  interface statsProps {
    quantity: number;
    description: string;
  }

  const stats: statsProps[] = [
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
    
      <section id="statistics">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
          {stats.map(({ quantity, description }: statsProps) => (
            <div
              key={description}
              className="space-y-2 text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold ">{counterOn &&
                <CountUp start={0} end={quantity} duration={2} delay={0} />}

                +
              </h2>
              <p className="text-xl text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </section>
  

  );
};
