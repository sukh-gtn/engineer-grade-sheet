import type { Skill } from "../data/skills";

type Props = {
  skills: Skill[];
  ratings: Record<string, number>;
  onChange: (id: string, value: number) => void;
};

function SectionHeader({ label }: { label: string }) {
  return (
    <tr className="bg-gray-400">
      <th
        className="text-left px-5 py-3 font-bold text-slate-800 text-sm "
        colSpan={5}>
        {label}
      </th>
    </tr>
  );
}

export default function SkillTable({ skills, ratings, onChange }: Props) {
  const hard = skills.filter((s) => s.category === "hard");
  const soft = skills.filter((s) => s.category === "soft");

  const Row = ({ s }: { s: Skill }) => {
    const score = ratings[s.id] ?? 0;
    const weighted = s.weight * score;
    return (
      <tr className="border-b border-slate-200 hover:bg-slate-50 transition">
        <td className="px-5 py-3 text-sm font-medium text-slate-800">
          {s.name}
        </td>
        <td className="px-5 py-3 text-sm text-indigo-600 font-semibold">
          {s.weight}
        </td>
        <td className="px-5 py-3">
          <input
            type="number"
            min={0}
            max={10}
            step={1}
            className="w-20 rounded-lg border border-slate-300 px-2 py-1 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
            value={score}
            onChange={(e) => onChange(s.id, Number(e.target.value || 0))}
          />
        </td>
        <td className="px-5 py-3">
          <span className="text-emerald-600 font-semibold">
            {weighted.toFixed(1)}
          </span>
        </td>
        <td className="px-5 py-3 text-xs text-slate-600">{s.note}</td>
      </tr>
    );
  };

  return (
    <div className="card overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-700">
          <tr>
            <th className="text-left px-5 py-3 w-[30%] text-white text-xs font-bold">
              スキル項目
            </th>
            <th className="text-left px-5 py-3 text-white text-xs font-bold ">
              重み係数
            </th>
            <th className="text-left px-5 py-3 text-white text-xs font-bold ">
              評価 (0-10)
            </th>
            <th className="text-left px-5 py-3 text-white text-xs font-bold">
              重み付きスコア
            </th>
            <th className="text-left px-5 py-3 w-[45%] text-white text-xs font-bold ">
              必要レベル目安
            </th>
          </tr>
        </thead>
        <tbody>
          <SectionHeader label="ハードスキル（職種別専門技術）" />
          {hard.map((s) => (
            <Row key={s.id} s={s} />
          ))}
          <SectionHeader label="ソフトスキル（共通/基礎スキル）" />
          {soft.map((s) => (
            <Row key={s.id} s={s} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
