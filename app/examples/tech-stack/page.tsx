"use client";

import React, { useState } from "react";
import LeftSidebar from "../../components/LeftSidebar";
import Image from 'next/image';

const TechStack = () => {

  return (
    <main className="flex h-screen">
      <div className="flex w-full">
        <div className="w-1/6">
          <LeftSidebar />
        </div>
        <div className="">
          <img
            src="/tech_stack.jpg"
            width="200"
            height="250"
            alt="Tech Stacks"
            className=" overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
          />
        </div>
      </div>
    </main>
  );
};

export default TechStack;
