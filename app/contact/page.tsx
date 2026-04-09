"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Header } from "../components/header";

const inquiryTypes = [
  { value: "", label: "選択してください" },
  { value: "new-project", label: "新規案件のご相談" },
  { value: "ongoing", label: "継続案件・長期契約" },
  { value: "consulting", label: "技術顧問・アドバイザリー" },
  { value: "other", label: "その他" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    type: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Notion API 経由で DB に送信する
    setSubmitted(true);
  }

  return (
    <>
      <Header />

      <main className="flex-1 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Page header */}
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            お問い合わせ
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-24">
            新規案件のご相談・技術顧問など、お気軽にご連絡ください。
            内容を確認次第、2営業日以内にご返信いたします。
          </p>

          {/* 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: info */}
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
                Info
              </p>

              {/* Available badge */}
              <div className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 rounded-full px-4 py-2 mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-medium">
                  現在、新規案件を受け付けています
                </span>
              </div>

              {/* Info items */}
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-0.5">メール</p>
                    <p className="text-sm text-muted-foreground">
                      hayate.takeda@example.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-0.5">返信目安</p>
                    <p className="text-sm text-muted-foreground">
                      2営業日以内
                    </p>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="border border-foreground/5 rounded-lg bg-foreground/[0.02] px-5 py-4 space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                  対応可能な案件
                </p>
                {[
                  "Web アプリケーション開発（スクラッチ・リプレイス）",
                  "要件定義・基本設計フェーズからの参画",
                  "フロントエンド〜バックエンドを横断した実装",
                  "技術顧問・コードレビュー",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
                Form
              </p>

              {submitted ? (
                <div className="border border-foreground/5 rounded-lg shadow-sm px-8 py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-5 h-5 text-foreground" />
                  </div>
                  <p className="text-lg font-semibold mb-2">
                    送信が完了しました
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    お問い合わせありがとうございます。
                    <br />
                    内容を確認のうえ、2営業日以内にご連絡いたします。
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
                  >
                    トップページへ戻る
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      お名前
                      <span className="text-muted-foreground font-normal ml-1 text-xs">
                        必須
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="山田 太郎"
                      className="w-full h-10 px-3 rounded-lg border border-foreground/10 bg-background text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors duration-300"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      会社名・屋号
                      <span className="text-muted-foreground font-normal ml-1 text-xs">
                        任意
                      </span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="株式会社〇〇"
                      className="w-full h-10 px-3 rounded-lg border border-foreground/10 bg-background text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      メールアドレス
                      <span className="text-muted-foreground font-normal ml-1 text-xs">
                        必須
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full h-10 px-3 rounded-lg border border-foreground/10 bg-background text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors duration-300"
                    />
                  </div>

                  {/* Inquiry type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      お問い合わせ種別
                      <span className="text-muted-foreground font-normal ml-1 text-xs">
                        必須
                      </span>
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-foreground/10 bg-background text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors duration-300 appearance-none"
                    >
                      {inquiryTypes.map((t) => (
                        <option
                          key={t.value}
                          value={t.value}
                          disabled={t.value === ""}
                        >
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      お問い合わせ内容
                      <span className="text-muted-foreground font-normal ml-1 text-xs">
                        必須
                      </span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="案件の概要、希望時期、予算感などをご記載ください。"
                      className="w-full px-3 py-2.5 rounded-lg border border-foreground/10 bg-background text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground/30 transition-colors duration-300 resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background rounded-full px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity duration-300"
                  >
                    送信する
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    送信いただいた情報はお問い合わせへの返信のみに使用します。
                  </p>
                </form>
              )}
            </div>
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
