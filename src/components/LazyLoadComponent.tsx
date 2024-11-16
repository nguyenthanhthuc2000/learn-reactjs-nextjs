"use client";
import React, { useState, useEffect, useRef } from "react";

interface LazyLoadComponentProps {
  children: React.ReactNode; // Có thể là bất kỳ React Component nào
}

const LazyLoadComponent: React.FC<LazyLoadComponentProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // Đánh dấu là hiển thị
        }
      },
      { threshold: 0.1 } // Kích hoạt khi 10% phần tử vào vùng hiển thị
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect(); // Dọn dẹp observer khi unmount
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? children : <p>Đang tải.........................................................................................................</p>}
    </div>
  );
};

export default LazyLoadComponent;
