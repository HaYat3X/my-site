import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー — Hayate Takeda",
  description: "Hayate Takeda ポートフォリオサイトにおける個人情報の取り扱いについて説明します。",
};

const sections = [
  {
    title: "1. 取得する情報",
    body: "お問い合わせフォームをご利用の際に、以下の情報を取得します。\n\n・お名前\n・会社名・屋号（任意）\n・メールアドレス\n・お問い合わせ種別\n・お問い合わせ内容",
  },
  {
    title: "2. 利用目的",
    body: "取得した個人情報は、以下の目的のみに使用します。\n\n・お問い合わせへの返信および対応\n・案件の検討・見積もりに関するご連絡",
  },
  {
    title: "3. 第三者への提供",
    body: "取得した個人情報は、以下の場合を除き第三者に提供しません。\n\n・ご本人の同意がある場合\n・法令に基づき開示が必要な場合",
  },
  {
    title: "4. 委託",
    body: "お問い合わせ内容の管理に際し、Notion（Notion Labs, Inc.）を利用しています。同サービスのプライバシーポリシーに基づき適切に管理されます。",
  },
  {
    title: "5. 保管・管理",
    body: "取得した個人情報は、お問い合わせへの対応が完了した後、不要と判断した時点で速やかに削除します。情報の漏洩・紛失・改ざん防止のため、適切なアクセス管理を行います。",
  },
  {
    title: "6. 開示・訂正・削除",
    body: "ご自身の個人情報の開示・訂正・削除をご希望の場合は、お問い合わせフォームよりご連絡ください。ご本人確認のうえ、合理的な範囲で速やかに対応いたします。",
  },
  {
    title: "7. Cookie・アクセス解析",
    body: "当サイトでは現在、Cookie やアクセス解析ツールは使用していません。今後導入する場合は、本ポリシーを更新してお知らせします。",
  },
  {
    title: "8. ポリシーの変更",
    body: "本ポリシーは、法令改正や運用上の必要に応じて予告なく変更することがあります。最新の内容は常に本ページをご確認ください。",
  },
  {
    title: "9. お問い合わせ",
    body: "個人情報の取り扱いに関するご質問・ご要望は、サイト内のお問い合わせフォームよりご連絡ください。",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Page header */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Legal
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-sm text-muted-foreground mb-16">
            最終更新日：2025年4月9日
          </p>

          <div className="max-w-2xl space-y-10">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hayate Takeda（以下「当方」）は、本ウェブサイトにおける個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
            </p>

            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-sm font-semibold mb-3">{section.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-300" />
              トップページへ戻る
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
