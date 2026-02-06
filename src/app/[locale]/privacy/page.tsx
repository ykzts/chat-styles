import React from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from 'i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })

  return {
    title: t('title')
  }
}

export default async function Privacy({ params }: Props) {
  const { locale } = await params

  if (locale === 'ja') {
    return (
      <div className="py-4 max-w-4xl">
        <article className="prose prose-slate max-w-none">
          <h1>プライバシーポリシー</h1>

          <h2>はじめに</h2>
          <p>
            Chat Styles（以下、「当サービス」）は、YouTube
            Liveのチャットスタイルを生成するWebアプリケーションです。本プライバシーポリシーは、当サービスが利用者の情報をどのように収集、使用、保護するかについて説明します。
          </p>

          <h2>収集する情報</h2>
          <p>当サービスでは、以下の情報を収集する場合があります：</p>
          <ul>
            <li>ブラウザの種類やバージョン</li>
            <li>オペレーティングシステム</li>
            <li>アクセス日時</li>
            <li>IPアドレス（匿名化された形式）</li>
            <li>参照元URL</li>
            <li>
              利用者が入力したスタイル設定（ブラウザのローカルストレージに保存）
            </li>
          </ul>

          <h2>情報の利用目的</h2>
          <p>収集した情報は、以下の目的で利用されます：</p>
          <ul>
            <li>サービスの提供と改善</li>
            <li>利用状況の分析</li>
            <li>技術的な問題の診断と修正</li>
          </ul>

          <h2>第三者への情報提供</h2>
          <p>
            当サービスは、法令に基づく場合を除き、利用者の同意なく第三者に個人情報を提供することはありません。
          </p>

          <h2>アクセス解析ツール</h2>
          <p>
            当サービスでは、Google
            Analyticsを使用してアクセス解析を行っています。Google
            Analyticsは、Cookieを使用して利用者の情報を収集します。この情報は匿名で収集され、個人を特定するものではありません。
          </p>
          <p>
            Google
            Analyticsの利用規約およびプライバシーポリシーについては、Googleのウェブサイトをご確認ください。
          </p>

          <h2>Cookie（クッキー）</h2>
          <p>
            当サービスは、利用者の利便性向上のためにCookieを使用しています。Cookieを無効にすることも可能ですが、その場合、一部の機能が正常に動作しない可能性があります。
          </p>

          <h2>プライバシーポリシーの変更</h2>
          <p>
            当サービスは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サービス上に掲載された時点で効力を生じるものとします。
          </p>

          <h2>お問い合わせ</h2>
          <p>
            本プライバシーポリシーに関するお問い合わせは、以下の方法でお願いします：
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/ykzts/chat-styles/issues"
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                GitHubのIssue
              </a>
            </li>
          </ul>

          <hr />
          <p>制定日：2026年2月5日</p>
        </article>
      </div>
    )
  }

  return (
    <div className="py-4 max-w-4xl">
      <article className="prose prose-slate max-w-none">
        <h1>Privacy Policy</h1>

        <h2>Introduction</h2>
        <p>
          Chat Styles ("the Service") is a web application that generates styles
          for YouTube Live chat. This Privacy Policy explains how the Service
          collects, uses, and protects user information.
        </p>

        <h2>Information We Collect</h2>
        <p>The Service may collect the following information:</p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Access date and time</li>
          <li>IP address (in anonymized form)</li>
          <li>Referrer URL</li>
          <li>
            User-entered style settings (stored in browser's local storage)
          </li>
        </ul>

        <h2>Purpose of Information Use</h2>
        <p>The collected information is used for the following purposes:</p>
        <ul>
          <li>Providing and improving the Service</li>
          <li>Analyzing usage patterns</li>
          <li>Diagnosing and fixing technical issues</li>
        </ul>

        <h2>Third-Party Information Sharing</h2>
        <p>
          The Service does not share personal information with third parties
          without user consent, except as required by law.
        </p>

        <h2>Access Analysis Tools</h2>
        <p>
          The Service uses Google Analytics for access analysis. Google
          Analytics collects user information using cookies. This information is
          collected anonymously and does not identify individuals.
        </p>
        <p>
          Please refer to Google's website for Google Analytics terms of service
          and privacy policy.
        </p>

        <h2>Cookies</h2>
        <p>
          The Service uses cookies to improve user experience. You can disable
          cookies, but some features may not work properly.
        </p>

        <h2>Privacy Policy Changes</h2>
        <p>
          The Service may update this Privacy Policy as necessary. Changes
          become effective when posted on the Service.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this Privacy Policy, please contact us through:
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/ykzts/chat-styles/issues"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              GitHub Issues
            </a>
          </li>
        </ul>

        <hr />
        <p>Effective Date: February 5, 2026</p>
      </article>
    </div>
  )
}
