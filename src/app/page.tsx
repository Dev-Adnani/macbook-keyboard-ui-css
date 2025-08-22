import React from "react";
import Key from "./components/key";

const keyStyles = new Map<string, string>([
  ["cmd", "shadow-blue-600 text-white transform: translateY(-2px)"],
  ["V", "shadow-blue-600 transform: translateY(-2px)"],
  [" ", "col-span-5 "],
  ["tab", "col-span-2 items-end justify-start p-1"],
  ["delete", "col-span-2"],
  ["caps lock", "col-span-2 col-span-2 items-end justify-start p-1"],
  ["esc", "col-span-2 items-end justify-start p-1"],
  ["shift", "col-span-2 col-span-2 items-end justify-start p-1"],
  ["shift ", "col-span-3 items-end justify-end p-1"],
  ["return", "col-span-2 items-end justify-start p-1"],
]);

export default function Home() {
  const keyboard: string[][] = [
    [
      "esc",
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
      "",
    ],
    ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete"],
    ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    [
      "caps lock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ";",
      "'",
      "return",
    ],
    ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift "],
    [
      "fn",
      "control",
      "option",
      "cmd",
      " ",
      "cmd ",
      "option",
      "←",
      "↑",
      "↓",
      "→",
    ],
  ];

  return (
    <div className="max-w-6xl mx-auto flex-col items-center justify-center h-full w-full">
      <div className="max-w-4xl bg-zinc-800 h-100 border border-neutral-900 rounded-md">
        {keyboard.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-15 gap-2 p-2">
            {row.map((key, keyIndex) => (
              <Key
                key={keyIndex}
                label={key}
                className={keyStyles.get(key) || ""}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
