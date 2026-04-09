import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { getAllWorks, getWork } from "@/lib/works";

export async function generateStaticParams() {
  const works = getAllWorks();
  return works.map((w) => ({ slug: w.slug }));
}

const mdxComponents: MDXRemoteProps["components"] = {
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold mt-12 mb-4 first:mt-0">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="text-sm text-muted-foreground space-y-2 mb-4 list-disc pl-5">
      {children}
    </ul>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
};

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let work;
  try {
    work = getWork(slug);
  } catch {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/works"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-12 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
            Works一覧に戻る
          </Link>

          {/* Meta */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-xs text-muted-foreground">{work.area}</span>
              <span className="w-px h-3 bg-foreground/10 shrink-0" />
              <span className="text-xs text-muted-foreground">
                {work.phase}
              </span>
              <span className="w-px h-3 bg-foreground/10 shrink-0" />
              <span className="text-xs text-muted-foreground">
                {work.period}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
              {work.title}
            </h1>
            {work.summary && (
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                {work.summary}
              </p>
            )}
          </div>

          <hr className="border-foreground/5 mb-12" />

          {/* MDX content */}
          <MDXRemote source={work.content} components={mdxComponents} />
        </div>
      </main>

      <Footer />
    </>
  );
}
