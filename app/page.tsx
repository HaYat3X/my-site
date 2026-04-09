import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
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
                Available for new projects
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="block">公共・製造DXを、</span>
              <span className="block mt-2 relative inline-block">
                自走で主導する。
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-foreground/20 via-foreground/60 to-foreground/20 rounded-full" />
              </span>
            </h1>

            {/* Sub copy */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mt-8 mb-12">
              要件定義から設計・開発・納品まで一人で主導できるエンジニア。
              <br />
              「プロジェクトを前に進める」を最優先の価値として動きます。
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 max-w-md border border-foreground/10 rounded-lg overflow-hidden mb-12">
              <div className="px-6 py-5">
                <p className="text-2xl font-bold tracking-tight">10+</p>
                <p className="text-xs text-muted-foreground mt-1">支援案件数</p>
              </div>
              <div className="relative px-6 py-5">
                <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
                <p className="text-2xl font-bold tracking-tight">5+</p>
                <p className="text-xs text-muted-foreground mt-1">対応領域</p>
              </div>
              <div className="relative px-6 py-5">
                <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
                <p className="text-sm font-semibold leading-tight mt-1">
                  要件定義
                  <br />
                  〜運用
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  対応フェーズ
                </p>
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
                About
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
