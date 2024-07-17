"use client";

import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import Chat from "../../components/savechat";

const Home = () => {
  return (
    <main className="flex h-screen">
      <div className="flex w-full">
        <div className="w-1/6">
          <LeftSidebar />
        </div>
        <div className="flex-3 w-4/6 p-10 overflow-auto h-full">
          <Chat />
        </div>
      </div>
    </main>
  );
};

export default Home;
