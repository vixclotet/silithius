"use client";
import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import styles from "../shared/page.module.css";
import ChatPage from "../../components/chat";

const caseStudies = () => {
  return (
    <main className="flex h-screen">
      <div className="flex w-full">
        <div className="w-1/6">
          <LeftSidebar />
        </div>
        <div className="w-5/6">
          <div className="p-4">
            <h2 className="text-3xl font-bold mb-4">Best Tech Marketing Strategies for Early-Stage Entrepreneurs</h2>
            <h2 className="text-xl font-bold mb-4">Harvard Business Review</h2>
            <div className="mb-4 p-4 border rounded-lg shadow-sm hover:bg-orange-200">
              <a href="https://hbr.org/2021/05/why-start-ups-fail" target="_blank" rel="noopener noreferrer" className="text-black">
                Harvard Business Review: "Why start-ups fail"
              </a>
            </div>
            <div className="mb-4 p-4 border rounded-lg shadow-sm hover:bg-orange-200">
              <a href="https://hbr.org/2018/05/strategy-for-start-ups" target="_blank" rel="noopener noreferrer" className="text-black">
                Harvard Business Review: Strategy for Start-ups
              </a>
            </div>
            <h2 className="text-xl font-bold mb-4">Paul Graham (YC Co-Founder) Essays</h2>
            <div className="mb-4 p-4 border rounded-lg shadow-sm hover:bg-orange-200">
              <a href="https://www.ycombinator.com/library/96-do-things-that-don-t-scale" target="_blank" rel="noopener noreferrer" className="text-black">
                Famous Essay "Do things that don't scale"
              </a>
            </div>
            <div className="mb-4 p-4 border rounded-lg shadow-sm hover:bg-orange-200">
              <a href="https://www.ycombinator.com/library/8s-startup-growth" target="_blank" rel="noopener noreferrer" className="text-black">
                "Startup = Growth"
              </a>
            </div>
            <div className="mb-4 p-4 border rounded-lg shadow-sm hover:bg-orange-200">
              <a href="https://www.ycombinator.com/library/8w-the-hardest-lessons-for-startups-to-learn" target="_blank" rel="noopener noreferrer" className="text-black">
                "The hardest lessons for startups to learn"
              </a>
            </div>
            <div className="mb-4 p-4 border rounded-lg shadow-sm hover:bg-orange-200">
              <a href="https://www.ycombinator.com/library/94-be-relentlessly-resourceful" target="_blank" rel="noopener noreferrer" className="text-black">
                "Be relentlessly resourceful"
              </a>
            </div>
            <h2 className="text-xl font-bold mb-4">Forbes</h2>
            <div className="mb-4 p-4 border rounded-lg shadow-sm hover:bg-orange-200">
              <a href="https://www.forbes.com/sites/steveandriole/2024/01/16/21-pieces-of-advice-we-never-give-out-loud-to-start-up-entrepreneurs/" target="_blank" rel="noopener noreferrer" className="text-black">
                "21 Pieces of Advice We Never Give Out Loud to Start-Up Entrepreneurs"
              </a>
            </div>
            <div className="mb-4 p-4 border rounded-lg shadow-sm hover:bg-orange-200">
              <a href="https://www.forbes.com/sites/forbestechcouncil/2023/12/18/from-struggle-to-success-tips-for-startups-ready-to-scale/" target="_blank" rel="noopener noreferrer" className="text-black">
                From Struggle to Success: Tips For Start-Ups Ready to Scale
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default caseStudies;
