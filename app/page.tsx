"use client";

import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/ui/avatar";
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { BookOpen, Code, Rocket, Users } from 'lucide-react'


export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-cyan-100 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white dark:bg-gray-800 shadow-md">
        <div className="absolute top-4 left-4">
          <img src="/silithius-logo.png" alt="Silithius Logo" className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 xl:h-64 xl:w-64" />
        </div>
        <Link className="flex items-center justify-center" href="https://www.silithius.com/">
          <Rocket className="h-6 w-6 mr-2 text-cyan-600" />
          <span className="font-bold text-cyan-700 dark:text-cyan-500">Silithius</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-cyan-600 dark:hover:text-cyan-500 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-cyan-600 dark:hover:text-cyan-500 transition-colors" href="#stack">
            Tech Stack
          </Link>
          <Link className="text-sm font-medium hover:text-cyan-600 dark:hover:text-cyan-500 transition-colors" href="#testimonials">
            Testimonials
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cyan-200 dark:bg-cyan-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-cyan-900 dark:text-cyan-100">
                  Welcome to Silithius
                </h1>
                <p className="mx-auto max-w-[700px] text-cyan-700 dark:text-cyan-200 md:text-xl">
                  Empowering tech innovators with cutting-edge marketing resources and tools.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Get Started</Button>
                <Button variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-200 dark:border-cyan-500 dark:text-cyan-500 dark:hover:bg-cyan-950">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-cyan-700 dark:text-cyan-500">Silithius Resources</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-cyan-100 dark:bg-cyan-950 border-cyan-300 dark:border-cyan-800">
                <CardHeader>
                  <BookOpen className="h-8 w-8 mb-2 text-cyan-600" />
                  <CardTitle className="text-cyan-800 dark:text-cyan-200">Marketing Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-700 dark:text-cyan-300">Comprehensive guides on digital marketing strategies tailored for tech products.</p>
                </CardContent>
              </Card>
              <Card className="bg-cyan-100 dark:bg-cyan-950 border-cyan-300 dark:border-cyan-800">
                <CardHeader>
                  <Code className="h-8 w-8 mb-2 text-cyan-600" />
                  <CardTitle className="text-cyan-800 dark:text-cyan-200">Tech Stack Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-700 dark:text-cyan-300">Deep dives into the latest technologies and how to leverage them for your projects.</p>
                </CardContent>
              </Card>
              <Card className="bg-cyan-100 dark:bg-cyan-950 border-cyan-300 dark:border-cyan-800">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-cyan-600" />
                  <CardTitle className="text-cyan-800 dark:text-cyan-200">Community Forums</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-cyan-700 dark:text-cyan-300">Connect with fellow developers and entrepreneurs to share insights and experiences.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="stack" className="w-full py-12 md:py-24 lg:py-32 bg-cyan-100 dark:bg-cyan-950">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-cyan-800 dark:text-cyan-200">Silithius Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
                <div key={tech} className="flex flex-col items-center space-y-2">
                  <div className="h-20 w-20 rounded-full bg-cyan-300 dark:bg-cyan-800 flex items-center justify-center">
                    <span className="text-2xl font-bold text-cyan-800 dark:text-cyan-100">{tech[0]}</span>
                  </div>
                  <span className="font-medium text-cyan-700 dark:text-cyan-300">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-cyan-700 dark:text-cyan-500">What Silithius Users Say</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {[
                { name: "Alex Chen", role: "Indie Game Developer", quote: "Silithius resources helped me reach a wider audience for my indie game." },
                { name: "Sarah Johnson", role: "Tech Startup Founder", quote: "The marketing guides on Silithius were instrumental in shaping our go-to-market strategy." },
                { name: "Mike Davis", role: "Full Stack Developer", quote: "I've learned so much about marketing my skills through the Silithius platform." }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-cyan-100 dark:bg-cyan-950 border-cyan-300 dark:border-cyan-800">
                  <CardHeader>
                    <CardTitle className="text-cyan-800 dark:text-cyan-200">{testimonial.name}</CardTitle>
                    <CardDescription className="text-cyan-700 dark:text-cyan-300">{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-700 dark:text-cyan-300">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cyan-200 dark:bg-cyan-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-cyan-900 dark:text-cyan-100">Ready to Boost Your Tech Project?</h2>
                <p className="mx-auto max-w-[600px] text-cyan-700 dark:text-cyan-200 md:text-xl">
                  Join the Silithius community of innovators and get access to cutting-edge marketing resources.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-cyan-400 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-cyan-800 dark:bg-cyan-950 dark:ring-offset-cyan-950 dark:placeholder:text-cyan-700 dark:focus-visible:ring-cyan-900 flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700 text-white">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-cyan-300 dark:border-cyan-800 bg-white dark:bg-gray-800">
        <p className="text-xs text-cyan-600 dark:text-cyan-500">© 2024 Silithius. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-cyan-600 hover:text-cyan-800 dark:text-cyan-500 dark:hover:text-cyan-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-cyan-600 hover:text-cyan-800 dark:text-cyan-500 dark:hover:text-cyan-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
