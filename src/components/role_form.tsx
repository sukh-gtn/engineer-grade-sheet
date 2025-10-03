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
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">
            職種選択
          </label>
          <select
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm focus:ring-2 focus:ring-indigo-500"
            value={role}
            onChange={(e) => onChangeRole(e.target.value)}>
            <option>フロントエンドエンジニア</option>
            <option>バックエンドエンジニア</option>
            <option>モバイルアプリエンジニア</option>
          </select>
        </div>

        {/* 名前入力 */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700">
            評価対象者名
          </label>
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm placeholder-slate-400 focus:ring-2 focus:ring-indigo-500"
            placeholder="氏名を入力"
            value={name}
            onChange={(e) => onChangeName(e.target.value)}
          />
        </div>

        {/* ボタンエリア */}
        <div className="flex gap-4">
          <button
            className="flex-1 md:flex-none inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold shadow hover:bg-indigo-500 transition"
            onClick={() => {
              document
                .getElementById("score-area")
                ?.scrollIntoView({ behavior: "smooth" });
            }}>
            スコア計算
          </button>
          <button
            className="flex-1 md:flex-none inline-flex items-center justify-center rounded-xl bg-slate-100 text-slate-700 px-6 py-3 font-semibold border border-slate-300 hover:bg-slate-200 transition"
            onClick={onReset}>
            リセット
          </button>
        </div>
      </div>
    </div>
  );
}
