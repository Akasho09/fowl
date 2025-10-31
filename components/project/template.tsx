"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Issue } from "@/lib/github";
import Link from "next/link";

export default function ProjectCardClient({ issues }: { issues: Issue[] | null }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-4">
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 text-sm font-semibold !text-red-900">
        Want to Contribute!
        <IoIosArrowDown
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-3">
          {!issues?.length ? (
            <p className="text-sm">No open issues found.</p>
          ) : (
            issues.slice(0, 4).map((issue, i) => (
              <Link
                key={i}
                href={issue.url}
                target="_blank"
                className="block hover:underline mt-2"
              >
                <p className="font-medium">{i + 1}. {issue.title}</p>
                <p className="text-xs !text-red-400">State: {issue.state}</p>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
