import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { getNoteArticles, formatDate } from "@/lib/note";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog - Hayate Takeda",
  description: "note に投稿した記事の一覧です。",
};

export default async function BlogPage() {
  const articles = await getNoteArticles().catch(() => []);

  return (
    <>
      <Header />

      <main className="flex-1 pt-32 pb-6 lg:pt-40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Page header */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Blog
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            記事
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-24">
            note に投稿した記事の一覧です。
            <br />
            公共・製造DXの現場知識からキャリア・技術トピックまで幅広く書いています。
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
      </main>

      <Footer />
    </>
  );
}
