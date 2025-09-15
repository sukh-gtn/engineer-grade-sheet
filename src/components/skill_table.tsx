// src/components/SkillTable.tsx
"use client";
import type { Skill } from "../data/skills";

type Props = {
  skills: Skill[];
  ratings: Record<string, number>;
  onChange: (id: string, value: number) => void;
};

function SectionHeader({ label }: { label: string }) {
  return (
    <tr className="bg-slate-50">
      <th
        className="text-left px-4 py-3 font-semibold text-slate-700"
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
      <tr className="border-b border-slate-100">
        <td className="px-4 py-3 text-sm">{s.name}</td>
        <td className="px-4 py-3 text-sm text-indigo-600 font-medium">
          {s.weight}
        </td>
        <td className="px-4 py-3">
          <input
            type="number"
            min={0}
            max={10}
            step={1}
            className="w-20 rounded-lg"
            value={score}
            onChange={(e) => onChange(s.id, Number(e.target.value || 0))}
          />
        </td>
        <td className="px-4 py-3">
          <span className="text-emerald-600 font-medium">
            {weighted.toFixed(1)}
          </span>
        </td>
        <td className="px-4 py-3 text-xs text-slate-600">{s.note}</td>
      </tr>
    );
  };

  return (
    <div className="card overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-slate-100/70">
          <tr>
            <th className="text-left px-4 py-3 w-[30%]">スキル項目</th>
            <th className="text-left px-4 py-3">重み係数</th>
            <th className="text-left px-4 py-3">評価 (0-10)</th>
            <th className="text-left px-4 py-3">重み付きスコア</th>
            <th className="text-left px-4 py-3 w-[45%]">必要レベル目安</th>
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
