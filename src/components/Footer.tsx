"use client";

import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  const fetchVisitorCount = async () => {
    const response = await fetch('/api/visitor');
    const data = await response.json();
    setVisitorCount(data.count);
  };

  useEffect(() => {
    fetchVisitorCount();
  }, []);

  useEffect(() => {
    fetch('/api/visitor', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        console.log('Manual POST request, visitor count:', data.count);
        fetchVisitorCount(); 
      });
  }, []);

  return (
    <footer className="bg-black text-white p-4 text-center w-full mt-auto">
      <p>Visitors: {visitorCount}</p>
    </footer>
  );
};

export default Footer;
