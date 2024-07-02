"use client";
import React, { useState } from "react";
import LeftSidebar from "../../components/LeftSidebar";
import MiddleSection from "../../components/MiddleSection";
import RightSidebar from "../../components/RightSidebar";

const MarketRecPage = () => {
  const [recommendations, setRecommendations] = useState([]);

  // Assuming you have a function to handle form submission and get recommendations
  const handleFormSubmit = (formData) => {
    // Logic to get recommendations
    const newRecommendations = []; // replace with actual recommendations
    setRecommendations(newRecommendations);
  };

  return (
    <main className="flex h-screen">
      <div className="flex w-full">
        <div className="w-1/6">
          <LeftSidebar />
        </div>
        <div className="w-1/3">
          <MiddleSection onSubmit={handleFormSubmit} />
        </div>
        <div className="w-1/3">
          <RightSidebar recommendations={recommendations} />
        </div>
      </div>
    </main>
  );
};

export default MarketRecPage;
