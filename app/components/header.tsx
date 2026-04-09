import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity duration-300"
          >
            <div className="w-8 h-8 bg-foreground text-background rounded-lg flex items-center justify-center text-sm font-bold select-none">
              H
            </div>
            <span className="font-medium text-sm">Hayate Takeda</span>
          </Link>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            <Link
              href="/works"
              className="px-4 py-2 text-sm text-muted-foreground rounded-full hover:bg-foreground/5 transition-colors duration-300"
            >
              Works
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-muted-foreground rounded-full hover:bg-foreground/5 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 text-sm bg-foreground text-background rounded-full hover:opacity-90 transition-opacity duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
