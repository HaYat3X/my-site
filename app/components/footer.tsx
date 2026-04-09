import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          © 2025 Hayate Takeda
        </span>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            プライバシーポリシー
          </Link>
          <span className="text-xs text-muted-foreground">
            Built with Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
