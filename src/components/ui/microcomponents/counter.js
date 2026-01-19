"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  from = 0,
  to = 50,
  duration = 2000,
}) {
  const [value, setValue] = useState(from);
  const ref = useRef(null);
  const started = useRef(false);
  const startTime = useRef(null);
  const frame = useRef(null);

  // Ease-out function (similar to motion.js)
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          frame.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  function animate(timestamp) {
    if (!startTime.current) startTime.current = timestamp;

    const progress = Math.min(
      (timestamp - startTime.current) / duration,
      1
    );

    const eased = easeOut(progress);
    const current = from + (to - from) * eased;

    setValue(Math.round(current));

    if (progress < 1) {
      frame.current = requestAnimationFrame(animate);
    }
  }

  return (
    <span
      ref={ref}
      style={{ fontSize: "48px", fontWeight: "bold" }}
    >
      {value}
    </span>
  );
}
