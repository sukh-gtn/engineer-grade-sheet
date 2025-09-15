// src/components/ScoreHeader.tsx
"use client";
import { formatManYen, gradeToSalaryManYen } from "../lib/grade";

export default function ScoreHeader({
  normalizedScore,
  grade,
}: {
  normalizedScore: number;
  grade: number;
}) {
  const salary = gradeToSalaryManYen(grade);
  return (
    <div className="card overflow-hidden">
      <div className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 text-white p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-sm opacity-90">総合スコア</div>
            <div className="text-4xl font-bold">
              {Math.round(normalizedScore)}
            </div>
          </div>
          <div>
            <div className="text-sm opacity-90">推奨等級</div>
            <div className="text-4xl font-bold">等級{grade}</div>
          </div>
          <div>
            <div className="text-sm opacity-90">推奨年収</div>
            <div className="text-4xl font-bold">{formatManYen(salary)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
