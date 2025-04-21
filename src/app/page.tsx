'use client';

import { useCallback } from 'react';
import SignInButton from '../components/signinButton';
export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-black via-zinc-900 to-black text-white font-sans scroll-smooth overflow-x-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] bg-purple-500 opacity-30 blur-[140px] rounded-full top-[20%] left-[10%] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[100px] rounded-full bottom-[15%] right-[10%] animate-ping" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full top-[60%] left-[60%] animate-pulse" />
      </div>

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl shadow-md w-[95%] max-w-5xl flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-400">WayWise.ai</h1>
        <div className="space-x-6 text-sm sm:text-base">
          <button onClick={() => scrollTo('hero')} className="hover:text-purple-300">Home</button>
          <button onClick={() => scrollTo('signin')} className="hover:text-purple-300">Sign In</button>
          <button onClick={() => scrollTo('about')} className="hover:text-purple-300">About Me</button>
          <a href="https://github.com/AayushGokhale2005" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">GitHub</a>
          <a href="https://www.linkedin.com/in/aayush-gokhale-738049283/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">LinkedIn</a>
        </div>
      </nav>

      <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center px-4 pt-20 scroll-mt-20">
        <div className="absolute w-[700px] h-[700px] bg-purple-700 blur-[180px] opacity-25 rounded-full -z-10 top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <h1 className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
          WayWise.ai
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-xl">
          Your AI-powered road trip planner
        </p>
        <button onClick={() => scrollTo('signin')} className="mt-16 text-4xl text-purple-400 animate-bounce hover:text-pink-500" aria-label="Scroll to Sign In">↓</button>
      </section>

      <section id="signin" className="min-h-screen scroll-mt-20 flex flex-col items-center px-4 py-20 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-500 to-blue-400 drop-shadow-lg mb-6">
           Sign In to Start Planning
        </h2>

        <div className="bg-zinc-900/60 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/10 mb-10 w-full max-w-md">
          <p className="text-sm text-gray-400 mb-2">Get started with WayWise.ai</p>
          <SignInButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          <div className="rounded-xl p-6 bg-zinc-800/50 backdrop-blur-md border border-white/10 shadow-md hover:shadow-xl hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">🧠 AI Trip Planning</h3>
            <p className="text-gray-400 text-sm">
              Our smart itinerary builder uses AI to analyze your preferences, location, and travel goals to generate customized plans — from scenic pit stops to foodie favorites.
            </p>
          </div>
          <div className="rounded-xl p-6 bg-zinc-800/50 backdrop-blur-md border border-white/10 shadow-md hover:shadow-xl hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold text-pink-300 mb-2">🛰️ Live Route & Weather</h3>
            <p className="text-gray-400 text-sm">
              Stay ahead of traffic and bad weather. Get real-time routing, weather alerts, and updates synced to your trip so you're always in control of your journey.
            </p>
          </div>
          <div className="rounded-xl p-6 bg-zinc-800/50 backdrop-blur-md border border-white/10 shadow-md hover:shadow-xl hover:scale-105 transition transform">
            <h3 className="text-xl font-semibold text-blue-300 mb-2">📄 PDF Exports</h3>
            <p className="text-gray-400 text-sm">
              Share your full itinerary as a sleek PDF file with friends or family — perfect for planning together or taking it offline when cell service is spotty.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen scroll-mt-20 flex flex-col justify-center items-center px-4 text-center py-20">
        <h2 className="text-4xl font-bold text-purple-400 mb-8">About Me</h2>
        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 shadow-xl ring-4 ring-purple-500 animate-pulse">
          <img
            src="https://i.ibb.co/Kc0brbp/pfp.jpeg"
            alt="Aayush Gokhale"
            className="object-cover w-full h-full rounded-full"
          />
          <div className="absolute inset-0 rounded-full bg-purple-500 blur-[60px] opacity-20 z-[-1]" />
        </div>
        <p className="max-w-2xl text-gray-300 leading-relaxed">
          Hey! I’m Aayush Gokhale — a second-year Computer Science student at Rutgers University passionate about building real-world software that combines AI with user-centric design. I've worked on projects like real-time chat apps, AI chatbots using LangChain and Ollama, and Chrome extensions for finance tracking. Currently, I’m a research assistant working on computer vision models to improve image labeling systems. I love working on full-stack applications and deploying intelligent systems with cloud platforms like Azure.
        </p>
      </section>
    </main>
  );
}
