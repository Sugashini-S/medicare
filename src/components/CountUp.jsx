import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const CountUp = ({ to, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * to));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default CountUp;
