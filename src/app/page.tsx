import React from "react";
import Keyboard from "./components/keyboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Mac Keyboard
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          Experience the authentic MacBook keyboard
        </p>
        <p className="text-sm text-gray-400">Built by Dev Adnani</p>
      </div>

      {/* Keyboard Section */}
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          {/* Glow effect behind keyboard */}
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl transform scale-110"></div>
          {/* Keyboard container */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700">
            <Keyboard />
          </div>
        </div>
      </div>
    </div>
  );
}
