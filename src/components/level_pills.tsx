import { LEVELS, formatManYen } from "../lib/grade";

export default function LevelPills({ activeGrade }: { activeGrade: number }) {
  return (
    <div className="card p-8 bg-gray-100">
      <h3 className="mb-6 text-lg font-bold text-slate-800 border-slate-200 pb-2">
        等級・年収対応表
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {LEVELS.map((l) => {
          const isActive = activeGrade === l.grade;
          return (
            <div
              key={l.grade}
              className={`rounded-xl border px-4 py-3 text-center shadow-sm transition
                ${
                  isActive
                    ? "bg-indigo-400 text-white border-indigo-400"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }
              `}
              aria-current={isActive}>
              <div className="text-sm font-medium">等級 {l.grade}</div>
              <div
                className={`mt-1 text-sm font-semibold ${
                  isActive ? "text-white" : "text-slate-600"
                }`}>
                {formatManYen(l.salaryManYen)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
