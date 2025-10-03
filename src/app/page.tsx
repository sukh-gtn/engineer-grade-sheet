"use client";

import { useMemo, useState } from "react";
import LevelPills from "../components/level_pills";
import RoleForm from "../components/role_form";
import ScoreHeader from "../components/score_header";
import SkillTable from "../components/skill_table";
import { skills, maxTotalScore } from "../data/skills";
import { normalizedToGrade } from "../lib/grade";

export default function Page() {
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
    const normalized = (total / maxTotalScore) * 100;
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
    <main className="max-w-7xl mx-auto p-10">
      <div className=" p-10 mb-8 rounded-xl">
        <div className="items-center flex flex-col gap-2">
          <h1 className="text-3xl font-extrabold">
            🎯 エンジニア評価基準シート
          </h1>
          <p>職種別・等級別スキル評価システム</p>
        </div>
      </div>
      <section className="mb-8">
        <LevelPills activeGrade={grade} />
      </section>
      <section className="mb-8">
        <RoleForm
          role={role}
          name={name}
          onChangeRole={setRole}
          onChangeName={setName}
          onReset={handleReset}
        />
      </section>
      <section id="score-area" className="mb-8">
        <ScoreHeader normalizedScore={normalized} grade={grade} />
      </section>
      <section>
        <SkillTable skills={skills} ratings={ratings} onChange={handleChange} />
      </section>
    </main>
  );
}
