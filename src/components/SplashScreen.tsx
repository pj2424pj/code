"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket, Zap, Code, Sparkles } from "lucide-react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { text: "Initializing Quantum Processors...", icon: Zap },
    { text: "Loading Cosmic Algorithms...", icon: Code },
    { text: "Calibrating Neural Networks...", icon: Sparkles },
    { text: "Launching SyntaxForge...", icon: Rocket },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const phaseTimer = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length);
    }, 1200);

    return () => clearInterval(phaseTimer);
  }, [phases.length]);

  return (
    <div className="splash-screen">
      {/* Starfield background */}
      <div className="starfield">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula effect */}
      <div className="nebula" />

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-full border border-cyan-500/30">
              <Code className="w-16 h-16 text-cyan-400" />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="splash-logo mb-4"
        >
          SyntaxForge
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="splash-subtitle mb-8"
        >
          Where Code Meets the Cosmos
        </motion.p>

        {/* Loading phase */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="space-y-6"
        >
          {/* Current phase */}
          <div className="flex items-center justify-center gap-3 text-cyan-300">
            <motion.div
              key={currentPhase}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {phases[currentPhase] && (
                <phases[currentPhase].icon className="w-5 h-5" />
              )}
            </motion.div>
            <motion.span
              key={currentPhase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm"
            >
              {phases[currentPhase]?.text}
            </motion.span>
          </div>

          {/* Progress bar */}
          <div className="w-80 mx-auto">
            <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-20" />
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full shadow-lg"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-400">
              <span>0%</span>
              <span className="text-cyan-400 font-medium">{progress}%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Cosmic loading spinner */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="loading-spinner" />
              <div className="absolute inset-0 loading-spinner animate-ping opacity-20" />
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-gray-500 text-sm">
            Powered by Quantum Computing & Neural Networks
          </p>
        </motion.div>
      </div>
    </div>
  );
}