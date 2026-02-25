import Link from "next/link";
import React, { memo } from "react";

interface InfoTableProps {
  title?: string;
  headers: string[];
  rows: (string | number)[][];
  footer?: [string, string | number];
  showBar?: boolean;
}

interface EducationCardProps {
  index: string;
  title: string;
  subtitle: string;
  duration: string;
  driveLink: string;
  children: React.ReactNode;
}

export function EducationCard({ index, title, subtitle, duration, driveLink, children }: EducationCardProps) {
  return (
    <div className="
      group relative flex flex-col gap-6 text-sm
      h-screen w-[92vw] md:w-[26rem] flex-shrink-0
      border-r
      px-8 py-12 overflow-y-auto
      font-playfair
      transition-colors duration-300
    ">
      {/* Top shimmer on hover */}
      <div className="
        absolute inset-x-0 top-0 h-px
        opacity-0 group-hover:opacity-100 transition-opacity duration-500
      " />

      {/* Header */}
      <div className="flex flex-col gap-2">

        {/* Index badge */}
        <span className="
          self-start px-2 py-0.5 rounded-sm
          tracking-[0.2em] uppercase
        ">
          - {index}
        </span>

        <h2 className="text-sm font-jetB !text-red-700 font-bold leading-tight mt-0.5">
          {title}
        </h2>

        {/* Subtitle + duration on one line, separated by dot */}
        <div className="flex items-center gap-2 flex-wrap">
          <p className="tracking-[0.1em] uppercase ">
            {subtitle}
          </p>
          <span className="w-1 h-1 rounded-full flex-shrink-0" />
          <p className="opacity-40">
            {duration}
          </p>
        </div>

        <Link
          href={driveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-1.5 w-fit mt-1
            tracking-[0.1em] uppercase border 
            rounded-sm px-3 py-1.5
            transition-all duration-200 text-xs
          "
        >
          <span>↗</span> View Documents
        </Link>
      </div>

      {/* Divider */}
      <div className="w-8 h-px " />

      {/* Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}

// ─── InfoTable ────────────────────────────────────────────────────────────────

export const InfoTable = memo(function InfoTable({ title, headers, rows, footer, showBar }: InfoTableProps) {
  const maxVal = showBar
    ? Math.max(...rows.map((r) => parseFloat(String(r[1]))))
    : 0;

  return (
    <div className="w-full text-xs font-jetB">
      {title && (
        <p className="!text-red-700 italic text-sm mb-3 tracking-wide">
          {title}
        </p>
      )}

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            {headers.map((h, i) => (
              <th
                key={h}
                className={`pb-2.5 font-normal uppercase opacity-40 ${
                  i === headers.length - 1 ? "text-right" : "text-left"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="group/row hover:bg-gold/[0.04] transition-colors duration-150"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-2 px-1 tracking-wide ${
                    j === row.length - 1
                      ? "text-right tabular-nums"
                      : "text-left opacity-70"
                  }`}
                >
                  {/* Value chip on last column */}
                  {j === row.length - 1 ? (
                    <span className="
                      inline-flex items-center justify-end gap-2 w-full
                    ">
                      {showBar && (
                        <span
                          className="inline-block h-[2px] rounded-full bg-gold opacity-30 group-hover/row:opacity-70 transition-opacity duration-200"
                          style={{ width: `${(parseFloat(String(cell)) / maxVal) * 32}px` }}
                        />
                      )}
                      <span className="
                        font-medium tabular-nums
                        border rounded-sm
                        px-2 py-0.5 
                      ">
                        {cell}
                      </span>
                    </span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

        {footer && (
          <tfoot>
            <tr className="border-t ">
              <td className="pt-3.5 tracking-[0.15em] uppercase opacity-40">
                {footer[0]}
              </td>
              <td className="pt-3.5 text-right">
                {/* Highlighted footer value */}
                <span className="
                  font-bold text-sm tabular-nums border rounded-sm px-2.5 py-0.5
                ">
                  {footer[1]}
                </span>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
});