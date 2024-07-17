"use client";
import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import { Chat } from "openai/resources";
import ChatPage from "../../components/chat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faReddit, faWhatsapp, faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCopy as faCopyRegular } from "@fortawesome/free-regular-svg-icons";

const MarketRecPage = () => {
  return (
    <main className="flex h-screen">
      <div className="flex w-full">
        <div className="w-1/6">
          <LeftSidebar />
        </div>
        <div className="flex-3 p-10 overflow-auto h-full">
          <ChatPage /> 
        </div>
      </div>
    </main>
  );
};

export default MarketRecPage;