// src/components/RoleForm.tsx
"use client";

export default function RoleForm({
  role,
  name,
  onChangeRole,
  onChangeName,
  onReset,
}: {
  role: string;
  name: string;
  onChangeRole: (v: string) => void;
  onChangeName: (v: string) => void;
  onReset: () => void;
}) {
  return (
    <div className="card p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium mb-2">職種選択</label>
          <select
            className="w-full rounded-lg"
            value={role}
            onChange={(e) => onChangeRole(e.target.value)}>
            <option>フロントエンドエンジニア</option>
            <option>バックエンドエンジニア</option>
            <option>モバイルアプリエンジニア</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">評価対象者名</label>
          <input
            className="w-full rounded-lg"
            placeholder="氏名を入力"
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <button
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-5 py-3 font-medium hover:bg-indigo-500 transition w-full md:w-auto"
            // 計算は自動なのでスクロールだけ
            onClick={() => {
              document
                .getElementById("score-area")
                ?.scrollIntoView({ behavior: "smooth" });
            }}>
            スコア計算
          </button>
          <button
            className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium border border-slate-200 hover:bg-slate-50 transition w-full md:w-auto"
            onClick={onReset}>
            リセット
          </button>
        </div>
      </div>
    </div>
  );
}
