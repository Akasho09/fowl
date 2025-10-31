import React, { memo, useMemo } from "react";

type Props = {
  solved: number;
  total: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  attempting: number;
};

const safeDivide = (numerator: number, denominator: number) =>
  denominator === 0 ? 0 : (numerator / denominator) * 100;

const LeetCodeStatsCombined = ({
  solved,
  total,
  easySolved,
  easyTotal,
  mediumSolved,
  mediumTotal,
  hardSolved,
  hardTotal,
  attempting,
}: Props) => {
  const solvedSegments = useMemo(
    () => [
      {
        level: "Easy",
        solved: easySolved,
        total: easyTotal,
        color: "#3b82f6", // blue
      },
      {
        level: "Medium",
        solved: mediumSolved,
        total: mediumTotal,
        color: "#eab308", // yellow
      },
      {
        level: "Hard",
        solved: hardSolved,
        total: hardTotal,
        color: "#ef4444", // red
      },
    ],
    [easySolved, easyTotal, mediumSolved, mediumTotal, hardSolved, hardTotal]
  );

  // Compute segment percentages
  const easyPercent = safeDivide(easyTotal, total);
  const mediumPercent = safeDivide(mediumTotal, total);
  const hardPercent = safeDivide(hardTotal, total);

  const easyEnd = easyPercent;
  const mediumEnd = easyEnd + mediumPercent;
  const hardEnd = mediumEnd + hardPercent;

  let currentCumulativeWidth = 0;

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col gap-6 p-5 border border-x-0 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-end border-b pb-3">
        <span className="text-md font-semibold text-gray-700">
          Problems Solved
        </span>
        <span className="text-3xl font-bold text-gray-900">
          {solved}
          <span className="text-sm font-medium text-gray-500">/{total}</span>
        </span>
      </div>

      {/* --- Rectangular Progress Bar --- */}
      <div className="relative w-full h-2 rounded-full bg-gray-200 overflow-hidden">
        {solvedSegments.map(({ level, solved: catSolved, color }) => {
          const segmentWidth = safeDivide(catSolved, total);
          const startOffset = currentCumulativeWidth;
          currentCumulativeWidth += segmentWidth;

          return (
            <div
              key={level}
              className="absolute h-full transition-all duration-500"
              style={{
                width: `${segmentWidth}%`,
                left: `${startOffset}%`,
                backgroundColor: color,
              }}
              title={`${level}: ${catSolved} solved (${segmentWidth.toFixed(
                1
              )}%)`}
            />
          );
        })}
      </div>

      {/* --- Breakdown --- */}
      <div className="flex flex-col gap-2 pt-2">
        {solvedSegments.map(({ level, solved, color }) => {
          const percent = safeDivide(solved, total).toFixed(1);
          return (
            <div
              key={level}
              className="text-sm flex justify-between items-center px-2"
            >
              <span
                className="font-semibold flex items-center gap-2"
                style={{ color }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                ></span>
                {level}
              </span>
              <span className="text-gray-700 font-medium">
                {solved}
                <span className="text-gray-400 text-xs font-normal ml-1">
                  ({percent}%)
                </span>
              </span>
            </div>
          );
        })}
      </div>

      {/* --- Circular Chart --- */}
      <div className="relative w-36 h-36 mx-auto mt-4">
        <div
          className="absolute inset-0 rounded-full shadow-inner"
          style={{
            background: `conic-gradient(
              ${solvedSegments[0].color} 0% ${easyEnd}%,
              ${solvedSegments[1].color} ${easyEnd}% ${mediumEnd}%,
              ${solvedSegments[2].color} ${mediumEnd}% ${hardEnd}%
            )`,
          }}
        ></div>
        <div className="absolute inset-[6px] bg-[#f9fafb] rounded-full flex flex-col justify-center items-center shadow-md">
          <span className="text-lg font-bold">
            {solved}
            <span className="text-sm text-gray-500">/{total}</span>
          </span>
          <span className="text-xs text-gray-500">Solved</span>
          <span className="text-[10px] text-gray-400">
            {attempting} Attempting
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(LeetCodeStatsCombined);
