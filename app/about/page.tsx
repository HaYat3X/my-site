import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Header } from "../components/header";

const sns = [
  {
    label: "GitHub",
    href: "https://github.com/hayate-takeda",
    icon: ExternalLink,
    handle: "@hayate-takeda",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/hayate_takeda",
    icon: ExternalLink,
    handle: "@hayate_takeda",
  },
  {
    label: "Zenn",
    href: "https://zenn.dev/hayate_takeda",
    icon: ExternalLink,
    handle: "hayate_takeda",
  },
];

const values = [
  {
    label: "01",
    title: "プロジェクトを「前に進める」を最優先にする",
    body: "技術的な完璧さより、プロジェクトが一歩前進することを優先します。要件が曖昧なまま止まるより、仮説を立てて動き、フィードバックから学ぶ。エンジニアとしての価値は、コードの行数でも使った技術の新しさでもなく、ビジネス課題を解決したかどうかだと思っています。",
  },
  {
    label: "02",
    title: "「わからない」を放置しない",
    body: "仕様の曖昧さ、業務知識のギャップ、技術的な不確かさ——すべて早めに潰します。不明点を抱えたまま実装を進めると、後工程で何倍もの手戻りになる。だから質問を恥とは思わず、むしろ「早く潰せた」と前向きに捉えます。",
  },
  {
    label: "03",
    title: "ドメインを理解してから設計する",
    body: "航空・電力・製造といった現場を持つ業界では、業務フローへの理解なしに良いシステムは作れません。ユーザーの言葉を聞き、現場の制約を把握し、その上で技術的な答えを出す。コードを書く前に、業務を書けるようになることを意識しています。",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  { category: "Backend", items: ["Node.js", "Python", "REST API", "SQL"] },
  {
    category: "Process",
    items: ["要件定義", "基本設計", "詳細設計", "ユーザーテスト"],
  },
  { category: "Domain", items: ["航空", "電力", "製造", "公共DX"] },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Page header */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            About
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            エンジニアリングへの想い
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-24">
            要件定義から運用まで一人で主導できるエンジニアを目指しています。
            技術は手段であり、目的は常に「現場の課題を解決すること」です。
          </p>

          {/* Values */}
          <div className="mb-24">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
              Values
            </p>
            <div className="space-y-4">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="flex border border-foreground/5 rounded-lg shadow-sm overflow-hidden"
                >
                  {/* Number sidebar */}
                  <div className="flex items-start justify-center w-16 flex-shrink-0 bg-foreground/[0.02] border-r border-foreground/5 pt-6 text-sm font-medium text-muted-foreground select-none">
                    {v.label}
                  </div>
                  {/* Content */}
                  <div className="flex-1 px-6 py-5">
                    <h2 className="text-lg font-semibold mb-2">{v.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile + Skills — 2 column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            {/* Profile */}
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
                Profile
              </p>

              {/* Avatar + name */}
              <div className="flex items-center gap-4 mb-6">
                {/* Avatar placeholder — replace src with actual photo */}
                <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center flex-shrink-0 text-xl font-bold select-none">
                  H
                </div>
                <div>
                  <p className="text-base font-semibold">Hayate Takeda</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    24歳 / フリーランスエンジニア
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
                <p>
                  独立系SIerにてキャリアをスタート。航空・電力・製造業界を中心に、
                  業務システムの要件定義から設計・開発・運用保守まで一貫して担当。
                </p>
                <p>
                  上流工程では業務ヒアリングや要件整理を主導し、下流工程では
                  フロントエンド〜バックエンドを横断して実装。
                  「なんでもできる一人目」の動き方を得意とします。
                </p>
                <p>
                  現在はフリーランスとして活動中。DXの文脈でスクラッチ開発から
                  既存システムのリプレイスまで、幅広い案件に対応しています。
                </p>
              </div>

              {/* SNS links */}
              <div className="flex flex-col gap-2">
                {sns.map(({ label, href, icon: Icon, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group w-fit"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="font-medium">{label}</span>
                    <span className="text-xs text-muted-foreground/60 group-hover:text-muted-foreground transition-colors duration-300">
                      {handle}
                    </span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
                Skills
              </p>
              <div className="space-y-6">
                {skills.map((s) => (
                  <div key={s.category}>
                    <p className="text-xs text-muted-foreground mb-2">
                      {s.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {s.items.map((item) => (
                        <span
                          key={item}
                          className="inline-block text-xs font-medium bg-foreground/5 border border-foreground/5 rounded-full px-3 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-foreground/5 pt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-lg font-semibold mb-1">一緒に働きませんか</p>
              <p className="text-sm text-muted-foreground">
                現在、新規案件のご相談を受け付けています。
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity duration-300"
              >
                お問い合わせ
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                実績を見る
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            © 2025 Hayate Takeda
          </span>
          <span className="text-xs text-muted-foreground">
            Built with Next.js
          </span>
        </div>
      </footer>
    </>
  );
}
