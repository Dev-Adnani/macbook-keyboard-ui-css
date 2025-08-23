import React from "react";
import Keyboard from "./components/keyboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12 max-w-4xl">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
          Mac Keyboard
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-2 px-4">
          Experience the authentic MacBook keyboard
        </p>
        <p className="text-xs sm:text-sm text-gray-400">Built by Dev Adnani</p>
      </div>

      {/* Keyboard Section */}
      <div className="flex flex-col items-center space-y-6 sm:space-y-8 w-full max-w-7xl">
        <div className="relative w-full max-w-4xl">
          {/* Glow effect behind keyboard */}
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl sm:blur-3xl rounded-2xl sm:rounded-3xl transform scale-105 sm:scale-110"></div>

          {/* Keyboard container */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-3 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-2xl border border-gray-700 overflow-x-auto">
            <div className="min-w-[800px] sm:min-w-0">
              <Keyboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
