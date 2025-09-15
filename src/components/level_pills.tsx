// src/components/LevelPills.tsx
"use client";
import { LEVELS, formatManYen } from "../lib/grade";

export default function LevelPills({ activeGrade }: { activeGrade: number }) {
  return (
    <div className="card p-6">
      <h3 className="mb-4 font-semibold">等級・年収対応表</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3">
        {LEVELS.map((l) => (
          <div
            key={l.grade}
            className={`chip text-center ${
              activeGrade === l.grade ? "ring-2 ring-indigo-500/60" : ""
            }`}
            aria-current={activeGrade === l.grade}>
            <div className="text-sm text-slate-600">等級{l.grade}</div>
            <div className="text-xs md:text-sm font-medium">
              {formatManYen(l.salaryManYen)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
