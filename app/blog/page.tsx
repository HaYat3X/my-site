import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Header } from "../components/header";
import { getZennArticles, formatDate } from "@/lib/zenn";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Hayate Takeda",
  description: "Zenn に投稿した技術記事の一覧です。",
};

export default async function BlogPage() {
  const articles = await getZennArticles().catch(() => []);

  return (
    <>
      <Header />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Page header */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Blog
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            技術記事
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-24">
            Zenn に投稿した記事の一覧です。 公共・製造DXの現場知識から
            TypeScript・Next.js などの技術トピックまで幅広く書いています。
          </p>

          {/* Articles section label */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
            Articles
          </p>

          {articles.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              記事を取得できませんでした。しばらくしてから再度お試しください。
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
              {articles.map((article) => (
                <a
                  key={article.link}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col border border-foreground/5 hover:border-foreground/10 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/9] bg-foreground/[0.02] border-b border-foreground/5 flex items-center justify-center overflow-hidden">
                    {/* Grid pattern */}
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    {/* Emoji */}
                    <span className="relative text-5xl select-none group-hover:scale-110 transition-transform duration-300">
                      {article.emoji}
                    </span>
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
                        Zenn
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Link to Zenn */}
          <div className="border-t border-foreground/5 pt-12 flex items-center gap-3">
            <a
              href="https://zenn.dev/hayatetakeda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              Zenn ですべての記事を見る
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
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
