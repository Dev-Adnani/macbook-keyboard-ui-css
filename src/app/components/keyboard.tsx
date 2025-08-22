import React from "react";
import Key from "./key";

const keyStyles = new Map<string, string>([
  ["cmd", "flex-[1.2] shadow-red-600 text-white transform: translateY(-2px)"],
  ["V", "shadow-red-600 transform: translateY(-2px)"],
  [" ", "flex-[8] w-32"], // Spacebar - 5x wider
  ["tab", "flex-[1.5] items-end justify-start p-1"], // 1.5x width
  ["delete", "flex-[1.2] items-end justify-end p-1"], // 1.5x width
  ["caps lock", "flex-[2.3] items-end justify-start p-1"], // 1.8x width
  ["esc", "flex-[1.3] items-end justify-start p-1"], // 1.3x width
  ["shift", "flex-[2.5] items-end justify-start p-1"], // 2x width (left shift)
  ["shift ", "flex-[2.5] items-end justify-end p-1"], // 2.5x width (right shift)
  ["return", "flex-[2] items-end justify-start p-1"], // 2x width
  ["\\", "flex-[1.5] "], // Backslash slightly wider
  ["fn", "flex-[1.2] "], // Function key smaller
  ["control", "flex-[1.2] w-30"], // Control slightly wider
  ["option", "flex-[1.2] w-30"], // Option slightly wider
  ["cmd ", "flex-[1.2] w-30"], // Right cmd slightly wider
]);

export default function Keyboard() {
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
      "  ",
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
    ["fn", "control", "option", "cmd", " ", "cmd ", "option", "ak"],
  ];

  return (
    <div className="max-w-6xl mx-auto flex-col items-center justify-center h-full w-full">
      <div className="max-w-4xl bg-transparent h-100 rounded-md">
        {keyboard.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-2 p-2 w-full">
            {row.map((key, keyIndex) =>
              key === "ak" ? (
                //  T shape for keys
                <div
                  key={keyIndex}
                  className="flex flex-col items-start justify-center gap-1 rounded-md p-1 flex-[3]"
                >
                  {/* Top row - Up arrow positioned above middle key */}
                  <div className="flex w-full justify-center">
                    <Key label={"↑"} className="h-5 w-8 rounded-sm" />
                  </div>

                  {/* Bottom row - Left, Down, Right arrows in perfect line */}
                  <div className="flex gap-1 w-full">
                    <Key label={"←"} className="h-5 flex-1 rounded-sm" />
                    <Key label={"↓"} className="h-5 flex-1 rounded-sm" />
                    <Key label={"→"} className="h-5 flex-1 rounded-sm" />
                  </div>
                </div>
              ) : key === "" ? (
                // Empty space for function row
                <div key={keyIndex} className="flex-1 min-w-0" />
              ) : (
                <Key
                  key={keyIndex}
                  label={key}
                  className={`flex-1 min-w-0 ${keyStyles.get(key) || ""}`}
                />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
