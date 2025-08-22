import React from "react";

export const getSVGIcon = (iconKey: string) => {
  const svgIcons: { [key: string]: React.ReactElement } = {
    "brightness-low": (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
        <path d="M12 5l0 .01M17 7l0 .01M19 12l0 .01M17 17l0 .01M12 19l0 .01M7 17l0 .01M5 12l0 .01M7 7l0 .01"></path>
      </svg>
    ),
    "brightness-high": (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
        <path d="M12 5l0 -2M17 7l1.4 -1.4M19 12l2 0M17 17l1.4 1.4M12 19l0 2M7 17l-1.4 1.4M6 12l-2 0M7 7l-1.4 -1.4"></path>
      </svg>
    ),
    "mission-control": (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z"></path>
        <path d="M3 10h18M10 3v18"></path>
      </svg>
    ),
    search: (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
      </svg>
    ),
    microphone: (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
        <path d="M5 10a7 7 0 0 0 14 0M8 21l8 0M12 17l0 4"></path>
      </svg>
    ),
    moon: (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
      </svg>
    ),
    rewind: (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 5v14l-8 -7zM10 5v14l-8 -7z"></path>
      </svg>
    ),
    "play-pause": (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 5v14l12 -7zM20 5l0 14"></path>
      </svg>
    ),
    "fast-forward": (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 5v14l8 -7zM14 5v14l8 -7z"></path>
      </svg>
    ),
    mute: (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
        <path d="M16 10l4 4m0 -4l-4 4"></path>
      </svg>
    ),
    "volume-low": (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M15 8a5 5 0 0 1 0 8"></path>
        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
      </svg>
    ),
    "volume-high": (
      <svg
        className="h-[8px] w-[8px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M15 8a5 5 0 0 1 0 8M17.7 5a9 9 0 0 1 0 14"></path>
        <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path>
      </svg>
    ),
    function: (
      <svg
        className="h-[6px] w-[6px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
        <path d="M3.6 9h16.8"></path>
        <path d="M3.6 15h16.8"></path>
        <path d="M11.5 3a17 17 0 0 0 0 18"></path>
        <path d="M12.5 3a17 17 0 0 1 0 18"></path>
      </svg>
    ),
  };

  return svgIcons[iconKey] || null;
};

export const iconMap: { [key: string]: string } = {
  F1: "brightness-low",
  F2: "brightness-high",
  F3: "mission-control",
  F4: "search",
  F5: "microphone",
  F6: "moon",
  F7: "rewind",
  F8: "play-pause",
  F9: "fast-forward",
  F10: "mute",
  F11: "volume-low",
  F12: "volume-high",
  fn: "function",
};

export const dualLabels = new Map<string, string>([
  // Number row
  ["`", "~"],
  ["1", "!"],
  ["2", "@"],
  ["3", "#"],
  ["4", "$"],
  ["5", "%"],
  ["6", "^"],
  ["7", "&"],
  ["8", "*"],
  ["9", "("],
  ["0", ")"],
  ["-", "_"],
  ["=", "+"],

  // Top row
  ["[", "{"],
  ["]", "}"],
  ["\\", "|"],

  // Home row
  [";", ":"],
  ["'", '"'],

  // Bottom row
  [",", "<"],
  [".", ">"],
  ["/", "?"],

  // Modifier keys
  ["control", "⌃"], // control symbol
  ["option", "⌥"], // option symbol
  ["cmd", "⌘"], // command symbol
  ["cmd ", "⌘"], // right command
]);
