"use client";

import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/ui/avatar";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/examples/market-rec");
  };

  const categories = {
    //"Basic chat": "basic-chat",
    //"Function calling": "function-calling",
    "Click Here!": "market-rec",
  };

  return (
    <div className="flex flex-col min-h-[100dvh] items-center bg-gray-100">
      <header className="px-4 lg:px-6 h-24 flex items-center font-mono justify-center w-full bg-sky-200">
        {/* Silithius logo fixed at the top left and made larger */}
        <div className="absolute top-4 left-4">
          <img src="/silithius-logo.png" alt="Silithius Logo" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64" />
        </div>
        <nav className="flex gap-8">
          {/* Navbar item for "Features" */}
          <Link href="#features" className="relative group text-lg font-medium text-gray-900" prefetch={false}>
            {/* Bubble effect with hover animation */}
            <span className="inline-block bg-white py-4 px-8 rounded-full shadow-md transition-transform transform group-hover:scale-110 group-hover:ease-in-out">
              Features
            </span>
          </Link>
          {/* Navbar item for "Contact" */}
          <Link href="https://x.com/vixclotet" className="relative group text-lg font-medium text-gray-900" prefetch={false}>
            {/* Bubble effect with hover animation */}
            <span className="inline-block bg-white py-4 px-8 rounded-full shadow-md transition-transform transform group-hover:scale-110 group-hover:ease-in-out">
              Contact
            </span>
          </Link>
        </nav>
      </header>
      <main className="flex-1 w-full flex flex-col items-center">

        {/* Header Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock Your Marketing & Growth Potential as a Tech Entrepreneur
                  </h1>
                  <p className="text-muted-foreground md:text-xl">
                    Our AI-powered marketing recommendations tool helps you optimize your campaigns and drive better
                    results.
                  </p>
                </div>
                <button
                  className="mt-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-blue-500 hover:to-sky-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  type="button"
                  onClick={handleClick}
                >
                  Demo Here!
                </button>
                <ul className="mt-16 space-y-4">
                  <div className="flex flex-col items-center">
                    <h2 className="mt-4 text-xl font-bold">Would you like to unlock full access to Silithius?</h2>
                  </div>
                  <li className="transition ease-in-out duration-300 hover:bg-orange-200 p-2 rounded-full text-center bg-sky-200 w-64 mx-auto">
                    <Link href="https://waitforit.me/signup/df364e28" className="text-black block">
                      Join the wailist!
                    </Link>
                  </li>
                </ul>
              </div>
              <img
                className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                src="/macbook.svg"
                alt="Macbook"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-100 flex flex-col items-center" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"></div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Marketing Insights</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered marketing recommendations tool provides actionable insights to help you optimize your
                  campaigns and drive better results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/marketing-picture.jpg"
                width="550"
                height="310"
                alt="AI-Powered Recommendations"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">AI-Powered Recommendations</h3>
                      <p className="text-muted-foreground">
                        Our AI engine analyzes your data to provide personalized recommendations for your marketing
                        campaigns. 
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Campaign Optimization  (Coming Soon...)</h3>
                      <p className="text-muted-foreground">
                        Optimize your campaigns with real-time performance insights and A/B testing capabilities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Comprehensive Reporting  (Coming Soon...)</h3>
                      <p className="text-muted-foreground">
                        Get detailed reports on your marketing performance and ROI to make data-driven decisions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full py-4 bg-gray-800 text-white text-center">
          <p>&copy; 2024 Silithius | All Rights Reserved</p>
          <p>Made with <span className="text-red-500">&hearts;</span> by Victoria Clotet</p>
        </footer>
      </main>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
