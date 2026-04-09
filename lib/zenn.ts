import { unstable_cache } from "next/cache";

export type ZennArticle = {
  title: string;
  link: string;
  pubDate: string;
  emoji: string;
  summary: string;
};

const ZENN_RSS_URL = "https://zenn.dev/hayatetakeda/feed";

function extractTag(xml: string, tag: string): string {
  const match = xml.match(
    new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`),
  );
  if (!match) return "";
  return match[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim();
}

function extractAttr(xml: string, tag: string, attr: string): string {
  const match = xml.match(
    new RegExp(`<${tag}[^>]*\\s${attr}="([^"]*)"[^>]*\\/?>`),
  );
  return match ? match[1] : "";
}

// Emoji detection without Unicode property escapes for broader compatibility
function extractEmoji(text: string): string {
  // Match common emoji ranges
  const match = text.match(
    /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]|[\u{1F000}-\u{1F02F}]/u,
  );
  return match ? match[0] : "📝";
}

function stripEmoji(text: string): string {
  return text
    .replace(
      /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]|[\u{1F000}-\u{1F02F}]/gu,
      "",
    )
    .trim();
}

async function fetchZennArticles(): Promise<ZennArticle[]> {
  console.log("[zenn] fetching:", ZENN_RSS_URL);
  let res: Response;
  try {
    res = await fetch(ZENN_RSS_URL);
  } catch (e) {
    console.error("[zenn] fetch threw:", e);
    throw e;
  }
  console.log("[zenn] status:", res.status, res.ok);
  if (!res.ok) {
    throw new Error(`Failed to fetch Zenn RSS: ${res.status}`);
  }

  const xml = await res.text();
  console.log("[zenn] xml length:", xml.length);
  console.log("[zenn] xml preview:", xml.slice(0, 200));

  const isAtom = xml.includes("<feed");
  console.log("[zenn] isAtom:", isAtom);

  if (isAtom) {
    const entries = xml.match(/<entry[\s\S]*?<\/entry>/g) ?? [];
    console.log("[zenn] entries count:", entries.length);
    return entries.map((entry) => {
      const rawTitle = extractTag(entry, "title");
      const link =
        extractAttr(entry, "link", "href") || extractTag(entry, "link");
      const pubDate =
        extractTag(entry, "published") || extractTag(entry, "updated");
      const summary =
        extractTag(entry, "summary") || extractTag(entry, "content");
      return {
        title: stripEmoji(rawTitle),
        link,
        pubDate,
        emoji: extractEmoji(rawTitle),
        summary,
      };
    });
  } else {
    const items = xml.match(/<item[\s\S]*?<\/item>/g) ?? [];
    console.log("[zenn] items count:", items.length);
    if (items.length > 0) {
      const first: any = items[0];
      console.log("[zenn] first item title:", extractTag(first, "title"));
      console.log("[zenn] first item link:", extractTag(first, "link"));
    }
    return items.map((item) => {
      const rawTitle = extractTag(item, "title");
      const link = extractTag(item, "link") || extractTag(item, "guid");
      const pubDate = extractTag(item, "pubDate");
      const summary = extractTag(item, "description");
      return {
        title: stripEmoji(rawTitle),
        link,
        pubDate,
        emoji: extractEmoji(rawTitle),
        summary,
      };
    });
  }
}

// DEBUG: bypass cache to always run fetchZennArticles
export const getZennArticles = fetchZennArticles;

export function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  } catch {
    return dateStr;
  }
}
