"use client";

import React, { useEffect, useState } from 'react';

const Footer: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);

  // Function to fetch the current visitor count from the API
  const fetchVisitorCount = async () => {
    const response = await fetch('/api/visitor');
    const data = await response.json();
    setVisitorCount(data.count); // Update the visitor count state with the fetched data
  };

  useEffect(() => {
    fetchVisitorCount(); // Fetch the visitor count when the component mounts
  }, []);

  useEffect(() => {
    // Send a POST request to increment the visitor count
    fetch('/api/visitor', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        console.log('Manual POST request, visitor count:', data.count);
        fetchVisitorCount(); // Re-fetch the visitor count to update the UI
      });
  }, []);

  return (
    <footer className="bg-black text-white p-4 text-center w-full mt-auto">
      <p>Visitors: {visitorCount}</p> {/* Display the visitor count */}
    </footer>
  );
};

export default Footer;
