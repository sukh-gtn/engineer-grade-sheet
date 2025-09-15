// src/app/page.tsx
"use client";

import { useMemo, useState } from "react";
import LevelPills from "../components/level_pills";
import RoleForm from "../components/role_form";
import ScoreHeader from "../components/score_header";
import SkillTable from "../components/skill_table";
import { skills, maxTotalScore } from "../data/skills";
import { normalizedToGrade } from "../lib/grade";

export default function Page() {
  // UI入力の状態
  const [role, setRole] = useState("フロントエンドエンジニア");
  const [name, setName] = useState("");
  const [ratings, setRatings] = useState<Record<string, number>>(
    Object.fromEntries(skills.map((s) => [s.id, 0]))
  );

  const { totalWeighted, normalized, grade } = useMemo(() => {
    const total = skills.reduce(
      (sum, s) => sum + (ratings[s.id] ?? 0) * s.weight,
      0
    );
    const normalized = (total / maxTotalScore) * 100; // 0..100 に正規化
    const grade = normalizedToGrade(normalized);
    return { totalWeighted: total, normalized, grade };
  }, [ratings]);

  const handleChange = (id: string, value: number) => {
    if (Number.isNaN(value)) value = 0;
    const clamped = Math.max(0, Math.min(10, value));
    setRatings((prev) => ({ ...prev, [id]: clamped }));
  };

  const handleReset = () => {
    setName("");
    setRatings(Object.fromEntries(skills.map((s) => [s.id, 0])));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="max-w-6xl mx-auto py-10">
      <div className="card p-8 mb-6">
        <div className="flex items-center gap-3">
          <div className="text-3xl">🎯</div>
          <div>
            <h1 className="text-2xl font-bold">エンジニア評価基準シート</h1>
            <p className="text-slate-600">職種別・等級別スキル評価システム</p>
          </div>
        </div>
      </div>
      <section className="mb-6">
        <LevelPills activeGrade={grade} />
      </section>
      <section className="mb-6">
        <RoleForm
          role={role}
          name={name}
          onChangeRole={setRole}
          onChangeName={setName}
          onReset={handleReset}
        />
      </section>
      <section id="score-area" className="mb-6">
        <ScoreHeader normalizedScore={normalized} grade={grade} />
      </section>
      <section>
        <SkillTable skills={skills} ratings={ratings} onChange={handleChange} />
      </section>
    </main>
  );
}
