"use client";
import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import MiddleSection from "../../components/MiddleSection";
import { Chat } from "openai/resources";
import styles from "../shared/page.module.css";
import ChatPage from "../../components/chat";

const MarketRecPage = () => {
  return (
    <main className="flex h-screen">
      <div className="flex w-full">
        <div className="w-1/6">
          <LeftSidebar />
        </div>
        <div>
            <ChatPage />
        </div>
      </div>
    </main>
  );
};

export default MarketRecPage;
