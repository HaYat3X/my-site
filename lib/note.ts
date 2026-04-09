export type NoteArticle = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  summary: string;
};

const NOTE_RSS_URL = "https://note.com/hayatetakeda/rss";

function extractTag(xml: string, tag: string): string {
  // Escape colon for namespaced tags like media:thumbnail
  const escapedTag = tag.replace(":", "\\:");
  const match = xml.match(
    new RegExp(`<${escapedTag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escapedTag}>`),
  );
  if (!match) return "";
  return match[1].replace(/<!\[CDATA\[|\]\]>/g, "").trim();
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export async function getNoteArticles(): Promise<NoteArticle[]> {
  console.log("[note] fetching:", NOTE_RSS_URL);
  let res: Response;
  try {
    res = await fetch(NOTE_RSS_URL);
  } catch (e) {
    console.error("[note] fetch threw:", e);
    throw e;
  }
  console.log("[note] status:", res.status, res.ok);
  if (!res.ok) throw new Error(`Failed to fetch Note RSS: ${res.status}`);

  const xml = await res.text();
  console.log("[note] xml length:", xml.length);

  const items = xml.match(/<item[\s\S]*?<\/item>/g) ?? [];
  console.log("[note] items count:", items.length);

  return items.slice(0, 12).map((item) => {
    const title = extractTag(item, "title");
    const link = extractTag(item, "link") || extractTag(item, "guid");
    const pubDate = extractTag(item, "pubDate");
    const thumbnail = extractTag(item, "media:thumbnail");
    const rawDescription = extractTag(item, "description");
    const summary = stripHtml(rawDescription).replace("続きをみる", "").trim();

    return { title, link, pubDate, thumbnail, summary };
  });
}

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
