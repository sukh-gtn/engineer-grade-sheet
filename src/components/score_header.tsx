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
      <div className="bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 text-white p-10 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-sm opacity-80">総合スコア</div>
            <div className="text-5xl font-extrabold tracking-tight">
              {Math.round(normalizedScore)}
            </div>
          </div>
          <div>
            <div className="text-sm opacity-80">推奨等級</div>
            <div className="text-5xl font-extrabold">等級 {grade}</div>
          </div>
          <div>
            <div className="text-sm opacity-80">推奨年収</div>
            <div className="text-5xl font-extrabold">
              {formatManYen(salary)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
