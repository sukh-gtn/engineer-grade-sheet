// src/lib/grade.ts
export type Level = { grade: number; salaryManYen: number }; // 万円

export const LEVELS: Level[] = [
  { grade: 1, salaryManYen: 400 },
  { grade: 2, salaryManYen: 450 },
  { grade: 3, salaryManYen: 500 },
  { grade: 4, salaryManYen: 550 },
  { grade: 5, salaryManYen: 600 },
  { grade: 6, salaryManYen: 650 },
  { grade: 7, salaryManYen: 700 },
  { grade: 8, salaryManYen: 750 },
  { grade: 9, salaryManYen: 800 },
  { grade: 10, salaryManYen: 850 },
];

// 0..100 に正規化したスコアから等級を求める（10 点刻み）
export function normalizedToGrade(normalized: number): number {
  const g = Math.floor(normalized / 10) + 1;
  return Math.max(1, Math.min(10, g));
}

export function gradeToSalaryManYen(grade: number): number {
  return LEVELS.find((l) => l.grade === grade)?.salaryManYen ?? 400;
}

export const formatManYen = (num: number) =>
  `${num.toLocaleString("ja-JP")}万円`;
