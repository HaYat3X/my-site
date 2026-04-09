import { NextRequest, NextResponse } from "next/server";

const NOTION_DATABASE_ID = "33dfab19d29580298717d35df4a80cb8";

const inquiryTypeLabels: Record<string, string> = {
  "new-project": "新規案件のご相談",
  ongoing: "継続案件・長期契約",
  consulting: "技術顧問・アドバイザリー",
  other: "その他",
};

export async function POST(req: NextRequest) {
  const { name, company, email, type, message } = await req.json();

  if (!name || !email || !type || !message) {
    return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
  }

  const apiKey = process.env.NOTION_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "サーバー設定エラー" }, { status: 500 });
  }

  const body = {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      名前: {
        title: [{ text: { content: name } }],
      },
      "会社名・屋号": {
        rich_text: company ? [{ text: { content: company } }] : [],
      },
      メールアドレス: {
        email,
      },
      種別: {
        select: { name: inquiryTypeLabels[type] ?? type },
      },
      お問い合わせ内容: {
        rich_text: [{ text: { content: message } }],
      },
      受信日時: {
        date: { start: new Date().toISOString() },
      },
    },
  };

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Notion API error:", error);
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
