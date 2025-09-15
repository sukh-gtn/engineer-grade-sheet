// src/data/skills.ts
export type Skill = {
  id: string;
  category: "hard" | "soft";
  name: string;
  weight: number;
  note: string; // 必要レベル目安
};

export const skills: Skill[] = [
  // --- ハードスキル（職種別専門技術）---
  {
    id: "html",
    category: "hard",
    name: "HTML/CSS基礎",
    weight: 0.5,
    note: "等級1-3: 基本マークアップ, 等級4-6: セマンティック, 等級7-10: 最適化",
  },
  {
    id: "js-basic",
    category: "hard",
    name: "JavaScript基礎",
    weight: 0.6,
    note: "等級1-3: ES6基本, 等級4-6: 非同期処理, 等級7-10: 高度な設計",
  },
  {
    id: "git",
    category: "hard",
    name: "Git基本操作",
    weight: 0.4,
    note: "等級1-3: 基本コマンド, 等級4-6: ブランチ戦略, 等級7-10: 監査/運用",
  },
  {
    id: "responsive",
    category: "hard",
    name: "レスポンシブデザイン",
    weight: 0.7,
    note: "等級1-3: 基本実装, 等級4-6: 複雑レイアウト, 等級7-10: 最適化",
  },
  {
    id: "devtools",
    category: "hard",
    name: "ブラウザ開発ツール",
    weight: 0.5,
    note: "等級1-3: 基本使用, 等級4-6: デバッグ, 等級7-10: パフォーマンス分析",
  },
  {
    id: "preprocess",
    category: "hard",
    name: "CSS前処理（Sass/Less）",
    weight: 0.6,
    note: "等級3-5: 基本使用, 等級6-8: 高度な機能, 等級9-10: 設計パターン",
  },
  {
    id: "npm",
    category: "hard",
    name: "npmライブラリ管理",
    weight: 0.5,
    note: "等級3-5: 基本管理, 等級6-8: 依存関係整理, 等級9-10: 最適化",
  },
  {
    id: "json",
    category: "hard",
    name: "JSONデータ処理",
    weight: 0.4,
    note: "等級1-3: 基本解析, 等級4-6: 変換/検証, 等級7-10: 連携",
  },
  {
    id: "dom",
    category: "hard",
    name: "DOM操作",
    weight: 0.6,
    note: "等級1-3: 基本操作, 等級4-6: 効率的操作, 等級7-10: 仮想DOM理解",
  },
  {
    id: "event",
    category: "hard",
    name: "イベント処理",
    weight: 0.5,
    note: "等級1-3: 基本実装, 等級4-6: 複雑な処理, 等級7-10: 最適化",
  },
  {
    id: "framework",
    category: "hard",
    name: "React/Vue/Angular",
    weight: 1.2,
    note: "等級2-4: 基本実装, 等級5-7: 応用, 等級8-10: アーキテクチャ",
  },
  {
    id: "state",
    category: "hard",
    name: "状態管理（Redux/Vuex）",
    weight: 1.0,
    note: "等級3-5: 基本状態, 等級6-8: 複雑状態, 等級9-10: 最適化",
  },
  {
    id: "ts",
    category: "hard",
    name: "TypeScript",
    weight: 1.1,
    note: "等級2-4: 基本, 等級5-7: 高度型, 等級8-10: 型設計",
  },
  {
    id: "bundler",
    category: "hard",
    name: "Webpack/Vite",
    weight: 0.9,
    note: "等級2-4: 基本設定, 等級5-7: カスタマイズ, 等級8-10: 最適化",
  },

  // --- ソフトスキル（共通/基礎スキル）---
  {
    id: "comm",
    category: "soft",
    name: "コミュニケーション能力",
    weight: 1.2,
    note: "等級1-3: 基本対話, 等級4-6: チーム調整, 等級7-10: ステークホルダー",
  },
  {
    id: "team",
    category: "soft",
    name: "チームワーク",
    weight: 1.1,
    note: "等級3-5: 協力・分担, 等級6-8: 積極的貢献, 等級9-10: チーム構築",
  },
  {
    id: "problem",
    category: "soft",
    name: "問題解決能力",
    weight: 1.3,
    note: "等級3-5: 基本解決, 等級6-8: 複雑課題, 等級9-10: 戦略的解決",
  },
  {
    id: "time",
    category: "soft",
    name: "時間管理",
    weight: 0.9,
    note: "等級3-5: 個人管理, 等級6-8: マルチタスク, 等級9-10: チーム最適化",
  },
  {
    id: "doc",
    category: "soft",
    name: "ドキュメント作成",
    weight: 1.0,
    note: "等級3-5: 基本文書, 等級6-8: 技術文書, 等級9-10: 戦略文書",
  },
  {
    id: "presen",
    category: "soft",
    name: "プレゼンテーション",
    weight: 1.1,
    note: "等級3-5: 社内発表, 等級6-8: 顧客向け, 等級9-10: 経営層向け",
  },
  {
    id: "feedback",
    category: "soft",
    name: "フィードバック能力",
    weight: 1.0,
    note: "等級3-5: 受発信, 等級6-8: 建設的FB, 等級9-10: コーチング",
  },
  {
    id: "negotiation",
    category: "soft",
    name: "交渉力",
    weight: 1.2,
    note: "等級3-5: 基本交渉, 等級6-8: 複雑な交渉, 等級9-10: 戦略交渉",
  },
  {
    id: "lead",
    category: "soft",
    name: "リーダーシップ",
    weight: 1.5,
    note: "等級4-6: タスクリード, 等級7-9: チームリード, 等級10: 組織リード",
  },
  {
    id: "mentoring",
    category: "soft",
    name: "メンタリング",
    weight: 1.3,
    note: "等級6-7: ジュニア指導, 等級8-9: 中堅指導, 等級10: 組織育成",
  },
  {
    id: "pm",
    category: "soft",
    name: "プロジェクト管理",
    weight: 1.4,
    note: "等級3-5: タスク管理, 等級6-8: 小規模PM, 等級9-10: 大規模PM",
  },
  {
    id: "customer",
    category: "soft",
    name: "顧客対応",
    weight: 1.2,
    note: "等級4-6: 基本対応, 等級6-8: 要件調整, 等級8-10: 関係構築",
  },
  {
    id: "english",
    category: "soft",
    name: "英語力",
    weight: 1.1,
    note: "等級4-6: 読み書き, 等級6-7: 会話, 等級8-10: ビジネス交渉",
  },
  {
    id: "facilitation",
    category: "soft",
    name: "ファシリテーション",
    weight: 1.2,
    note: "等級4-6: 会議進行, 等級7-9: 効率的進行, 等級10: 戦略活用",
  },
  {
    id: "conflict",
    category: "soft",
    name: "コンフリクト解決",
    weight: 1.3,
    note: "等級6-7: 対立解消, 等級8-9: 予防的対策, 等級10: 戦略的",
  },
  {
    id: "stakeholder",
    category: "soft",
    name: "ステークホルダー管理",
    weight: 1.4,
    note: "等級5-7: 対応, 等級8-9: 複雑利害, 等級10: 戦略管理",
  },
  {
    id: "expectation",
    category: "soft",
    name: "期待値調整",
    weight: 1.2,
    note: "等級6-7: 基本調整, 等級8-9: 予防的管理, 等級10: 戦略的管理",
  },
];

export const totalWeight = skills.reduce((sum, s) => sum + s.weight, 0);
export const maxTotalScore = totalWeight * 10; // (各項目 0-10 点 × 重み)
