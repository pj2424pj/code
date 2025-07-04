"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if splash has been shown in this session
    const splashShown = sessionStorage.getItem('splashShown');
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('splashShown', 'true');
  };

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}
        >
          {/* Starfield background */}
          <div className="starfield">
            {[...Array(200)].map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          {/* Nebula effect */}
          <div className="nebula" />

          {/* Floating particles */}
          <div className="particles">
            {[...Array(30)].map((_, i) => (
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

          {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

          <div className="relative z-10">
            <ConvexClientProvider>
              {children}
            </ConvexClientProvider>
            <Footer />
            <Toaster 
              toastOptions={{
                style: {
                  background: 'rgba(0, 0, 0, 0.8)',
                  color: '#fff',
                  border: '1px solid rgba(0, 212, 255, 0.3)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(20px)',
                },
              }}
            />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}