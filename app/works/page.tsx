import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "../components/header";
import { getAllWorks } from "@/lib/works";

export default function WorksPage() {
  const works = getAllWorks();

  return (
    <>
      <Header />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section label */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Works
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-16">
            実績一覧
          </h1>

          {/* Works list */}
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
                    {/* Meta tags */}
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

                    {/* Title */}
                    <h2 className="text-lg lg:text-xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
                      {work.title}
                    </h2>

                    {/* Summary */}
                    {work.summary && (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-1.5 line-clamp-2">
                        {work.summary}
                      </p>
                    )}
                  </div>

                  {/* Arrow button */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-background transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            ))}
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
