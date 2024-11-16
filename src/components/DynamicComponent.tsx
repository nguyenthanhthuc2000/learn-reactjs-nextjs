"use client";
import React from 'react';

const DynamicComponent: React.FC = () => {
  const images = Array.from({ length: 30 }, (_, index) => {
    return `https://picsum.photos/300/200?random=${index}`;
  });

  return (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
    {images.map((imageUrl, index) => (
      <div
        key={index}
        className="relative overflow-hidden rounded-lg shadow-lg bg-gray-400"
        style={{ width: '320px', height: '200px' }} // Kích thước cố định
      >
        <img
          src={imageUrl}
          alt={`Random Image ${index + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          loading="lazy" // Lazy loading để cải thiện hiệu suất
        />
      </div>
    ))}
  </div>
  );
};

export default DynamicComponent;
