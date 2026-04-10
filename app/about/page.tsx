import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

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
    title: "技術は手段。プロジェクトを前に進めることが仕事だと思っている",
    body: [
      "使った技術の新しさより、課題が一つ解決されたかどうかを優先する。",
      "要件が曖昧なまま止まるより、仮説を立てて動いてフィードバックから学ぶ。",
    ],
  },
  {
    label: "02",
    title: "技術は目的じゃない。課題を解くための道具として使う",
    body: [
      "「この技術を使いたいから採用する」ではなく、「この課題を解くために何が適切か」から考える。",
      "現場の業務を理解してから設計する。コードを書く前に、業務を書けるようになることを意識している。",
    ],
  },
  {
    label: "03",
    title: "指示を待たず、自分で作業を取りにいく",
    body: [
      "言われたことだけをやっていても、プロジェクトは前に進まない。",
      "必要だと思ったことは、誰かに言われる前に動く。要件定義も、技術検証も、そうやって自分のものにしてきた。",
    ],
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
            About Me
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            エンジニアリングへの想い
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-24">
            要件定義から運用まで一人で主導できるエンジニアを目指しています。
            <br />
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
                  <div className="flex items-center justify-center w-16 flex-shrink-0 bg-foreground/[0.02] border-r border-foreground/5 text-sm font-medium text-muted-foreground select-none">
                    {v.label}
                  </div>
                  {/* Content */}
                  <div className="flex-1 px-6 py-5">
                    <h2 className="text-lg font-semibold mb-2">{v.title}</h2>
                    <div>
                      {v.body.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
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

              {/* Avatar + name + SNS icons */}
              <div className="flex gap-4 mb-6">
                <Image
                  src="/me.png"
                  alt="Hayate Takeda"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <p className="text-base font-semibold mb-1">Hayate Takeda</p>
                  <p className="text-xs text-muted-foreground mb-2">
                    24歳 / フリーランスエンジニア
                  </p>
                  <div className="flex items-center gap-2">
                    {sns.map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                        aria-label={label}
                      >
                        <Icon className="w-4 h-4" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                          {label}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
                <p>
                  22歳 / 鳥取県出身のエンジニア。
                  <br />
                  専門学校でIT技術を学び、20歳でIT業界へ。
                </p>
                <p>
                  SESとして電力・公共インフラ領域の現場に携わるなかで、
                  GISシステムの開発・DX支援に従事。
                  <br />
                  要件定義から設計・開発・納品まで一貫して担当できるよう、
                  上流から下流まで自分から取りにいってきた。
                  <br />
                </p>
                <p>
                  現在は、大手測量会社にて、バックエンドエンジニアとして、
                  <br />
                  電力DX案件の要件定義を行っています。
                </p>
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
          <div className="border-t border-foreground/5 pt-28 flex flex-col sm:flex-row items-start sm:items-center gap-6">
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

      <Footer />
    </>
  );
}
