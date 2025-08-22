import React from "react";
import Key from "./key";

const keyStyles = new Map<string, string>([
  ["cmd", "flex-[1.2] shadow-red-600 text-white transform: translateY(-2px)"],
  ["V", "shadow-red-600 transform: translateY(-2px)"],
  [" ", "flex-[8] w-32"],
  ["tab", "flex-[1.5] items-end justify-start p-1"],
  ["delete", "flex-[1.2] items-end justify-end p-1"],
  ["caps lock", "flex-[2.3] items-end justify-start p-1"],
  ["esc", "flex-[1.3] items-end justify-start p-1"],
  ["shift", "flex-[2.5] items-end justify-start p-1"],
  ["shift ", "flex-[2.5] items-end justify-end p-1"],
  ["return", "flex-[2] items-end justify-start p-1"],
  ["\\", "flex-[1.5] "],
  ["fn", "flex-[1.2] "],
  ["control", "flex-[1.2] w-30"],
  ["option", "flex-[1.2] w-30"],
  ["cmd ", "flex-[1.2] w-30"],
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
                <div
                  key={keyIndex}
                  className="flex flex-col items-start justify-center gap-1 rounded-md p-1 flex-[3]"
                >
                  <div className="flex w-full justify-center">
                    <Key label={"↑"} className="h-5 w-8 rounded-sm" />
                  </div>

                  <div className="flex gap-1 w-full">
                    <Key label={"←"} className="h-5 flex-1 rounded-sm" />
                    <Key label={"↓"} className="h-5 flex-1 rounded-sm" />
                    <Key label={"→"} className="h-5 flex-1 rounded-sm" />
                  </div>
                </div>
              ) : key === "" ? (
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
