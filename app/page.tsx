/**
 * インポート
 */
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { getAllWorks } from "@/lib/works";
import { getNoteArticles, formatDate } from "@/lib/note";

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

export const revalidate = 3600;

export default async function Home() {
  const works = getAllWorks().slice(0, 3);
  const articles = await getNoteArticles().catch(() => []);
  const recentArticles = articles.slice(0, 3);

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
          {/* Blur decorations — Hero only */}
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-neutral-200/40 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-neutral-300/30 to-transparent rounded-full blur-3xl -z-10" />

          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 rounded-full px-4 py-2 mb-10">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">
                現在、新規案件を受け付けています
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="block">技術を手段に、</span>
              <span className="block mt-2 relative inline-block">
                プロジェクトを動かす。
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-foreground/20 via-foreground/60 to-foreground/20 rounded-full" />
              </span>
            </h1>

            {/* Sub copy */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mt-8 mb-12">
              電力・公共インフラ領域で、要件定義から実装まで一貫して担当。
              <br />
              「技術で課題を解く」ことを軸に動く、22歳のエンジニアです。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 max-w-lg border border-foreground/10 rounded-lg overflow-hidden mb-12">
              <div className="relative px-8 py-6">
                <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
                <p className="text-2xl font-bold tracking-tight">3 +</p>
                <p className="text-xs text-muted-foreground mt-1">
                  業界経験年数
                </p>
              </div>
              <div className="px-8 py-6">
                <p className="text-2xl font-bold tracking-tight">10 +</p>
                <p className="text-xs text-muted-foreground mt-1">支援案件数</p>
              </div>
              <div className="relative px-8 py-6">
                <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
                <p className="text-2xl font-bold tracking-tight">5 +</p>
                <p className="text-xs text-muted-foreground mt-1">対応領域</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6">
              <Link
                href="/works"
                className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity duration-300"
              >
                実績を見る
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                About me
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Works ── */}
        <section className="py-24 lg:py-32 border-t border-foreground/5">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Works
              </p>
              <Link
                href="/works"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                すべての実績
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>

            <div className="space-y-4">
              {works.map((work, index) => (
                <Link
                  key={work.slug}
                  href={`/works/${work.slug}`}
                  className="group flex border border-foreground/5 hover:border-foreground/10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Number sidebar */}
                  <div className="flex items-center justify-center w-16 flex-shrink-0 bg-foreground/[0.02] border-r border-foreground/5 text-sm font-medium text-muted-foreground select-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}
                  <div className="flex-1 px-6 py-5 flex items-center justify-between gap-6 min-w-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs text-muted-foreground">
                          {work.area}
                        </span>
                        <span className="w-px h-3 bg-foreground/10 shrink-0" />
                        <span className="text-xs text-muted-foreground">
                          {work.phase}
                        </span>
                        <span className="w-px h-3 bg-foreground/10 shrink-0" />
                        <span className="text-xs text-muted-foreground">
                          {work.period}
                        </span>
                      </div>
                      <h2 className="text-lg lg:text-xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
                        {work.title}
                      </h2>
                      {work.summary && (
                        <p className="text-sm text-muted-foreground leading-relaxed mt-1.5 line-clamp-2">
                          {work.summary}
                        </p>
                      )}
                    </div>

                    <div className="flex-shrink-0 w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-background transition-colors duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Blog ── */}
        <section className="py-24 lg:py-32 border-t border-foreground/5">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Blog
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                すべての記事
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>

            {recentArticles.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                記事を取得できませんでした。
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentArticles.map((article) => (
                  <a
                    key={article.link}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col border border-foreground/5 hover:border-foreground/10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/9] bg-foreground/[0.02] border-b border-foreground/5 overflow-hidden">
                      {article.thumbnail ? (
                        <Image
                          src={article.thumbnail}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="absolute inset-0 opacity-40"
                            style={{
                              backgroundImage:
                                "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                              backgroundSize: "24px 24px",
                            }}
                          />
                          <span className="relative text-4xl select-none">
                            📝
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 px-5 py-4 gap-3">
                      <h2 className="text-base font-semibold leading-snug line-clamp-2 group-hover:translate-x-0.5 transition-transform duration-300">
                        {article.title}
                      </h2>
                      {article.summary && (
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                          {article.summary}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-auto pt-1">
                        <span className="text-xs text-muted-foreground">
                          {formatDate(article.pubDate)}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-foreground/5 rounded-full px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          note
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Profile ── */}
        <section className="py-24 lg:py-32 border-t border-foreground/5">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Profile
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                詳細プロフィール
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Link>
            </div>

            <div>
              {/* Avatar + name + SNS icons */}
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/me.png"
                  alt="Hayate Takeda"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="text-base font-semibold">Hayate Takeda</p>
                    <div className="flex items-center gap-2">
                      {sns.map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                          title={label}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    22歳 / GISエンジニア・バックエンドエンジニア
                  </p>
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
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 border-t border-foreground/5">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
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
        </section>
      </main>
      <Footer />
    </>
  );
}
