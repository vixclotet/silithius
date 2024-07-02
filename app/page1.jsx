"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/ui/avatar";
import { StarHalfIcon } from "lucide-react";
import React from "react";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/main");
  };

  return (
    <div className="flex flex-col min-h-[100dvh] items-center">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center w-full">
        <div className="bg-white p-4 rounded-full shadow-lg flex items-center space-x-6">
          {/* 
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <CheckIcon className="h-6 w-6" />
            <span className="sr-only">Marketing Recommendations</span>
          </Link>
          */}
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Features
            </Link>
            {/*
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Testimonials
            </Link>
            */}
            <Link href="https://x.com/vixclotet" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
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
                  className="bg-gradient-to-r from-orange-800 to-orange-500 hover:from-blue-500 hover:to-sky-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                  type="button"
                  onClick={handleClick}
                >
                  Click Here!
                </button>
              </div>
              <img
                className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
                src="/macbook.svg"
                alt="Macbook"
              />
            </div>
          </div>
        </section>

        {/*Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex flex-col items-center" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
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
                      <h3 className="text-xl font-bold">Campaign Optimization</h3>
                      <p className="text-muted-foreground">
                        Optimize your campaigns with real-time performance insights and A/B testing capabilities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Comprehensive Reporting</h3>
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

        {/*Testimonials Section*/}
        {/* 
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center" id="testimonials">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about how our marketing recommendations tool has helped them achieve
                  their goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <blockquote className="text-muted-foreground">
                      "The AI-powered recommendations have been a game-changer\n for our marketing team. We've seen a
                      significant\n improvement in campaign performance and ROI."
                    </blockquote>
                    <div className="mt-4 flex items-center">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="text-sm font-medium leading-none">John Doe</p>
                        <p className="text-sm text-muted-foreground">Marketing Manager, Acme Inc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-sm">
                    <blockquote className="text-muted-foreground">
                      "The reporting and analytics features have been\n invaluable in helping us make data-driven
                      decisions for\n our marketing campaigns."
                    </blockquote>
                    <div className="mt-4 flex items-center">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JL</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="text-sm font-medium leading-none">Jane Lee</p>
                        <p className="text-sm text-muted-foreground">Marketing Director, Globex Corp.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Testimonials"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        */}

        {/* Pricing Section */}
        {/* 
        <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center" id="pricing">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Affordable Pricing for Every Business
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your marketing needs and budget.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-4xl font-bold">$49</p>
                  <p className="text-muted-foreground">per month</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      AI-powered recommendations
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Campaign optimization
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Basic reporting
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-4xl font-bold">$99</p>
                  <p className="text-muted-foreground">per month</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      AI-powered recommendations
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Campaign optimization
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Advanced reporting
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Dedicated support
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-4xl font-bold">Custom</p>
                  <p className="text-muted-foreground">Tailored to your needs</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      AI-powered recommendations
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Campaign optimization
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Advanced reporting
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Dedicated support
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Custom integrations
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        <footer className="w-full py-4 bg-gray-800 text-white text-center">
          <p>&copy; 2024 Silithius | All Rights Reserved</p>
          <p>Made with <span className="text-red-500">&hearts;</span> by Victoria Clotet</p>
        </footer>


      </main>
    </div>
  )
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
  )
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
  )
}
