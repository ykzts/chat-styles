import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー'
}

export default function Privacy() {
  return (
    <div className="py-4 max-w-4xl">
      <h1 className="text-3xl font-normal mb-6">プライバシーポリシー</h1>

      <div className="space-y-6 text-base">
        <section>
          <h2 className="text-xl font-semibold mb-3">はじめに</h2>
          <p>
            Chat Styles（以下、「当サービス」）は、YouTube
            Liveのチャットスタイルを生成するWebアプリケーションです。当サービスは、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">収集する情報</h2>
          <p>当サービスは、以下の情報を収集します：</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>ローカルストレージに保存される設定情報：</strong>
              ユーザーが設定したチャットスタイルの設定は、ブラウザのIndexedDB（localForage）にローカルで保存されます。この情報は、ユーザーのデバイス上にのみ保存され、当サービスのサーバーには送信されません。
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">情報の利用目的</h2>
          <p>
            ローカルに保存された設定情報は、ユーザーが再度当サービスを訪問した際に、以前の設定を復元するためにのみ使用されます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">第三者への情報提供</h2>
          <p>
            当サービスは、ユーザーの個人情報を第三者に提供することはありません。すべての設定データは、ユーザーのブラウザ内にのみ保存されます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">アクセス解析ツール</h2>
          <p>
            当サービスは、Google
            Analyticsなどのアクセス解析ツールを使用していません。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Cookie（クッキー）</h2>
          <p>
            当サービスは、Cookieを使用していません。設定の保存には、ブラウザのIndexedDBを使用しています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            プライバシーポリシーの変更
          </h2>
          <p>
            当サービスは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">お問い合わせ</h2>
          <p>
            本プライバシーポリシーに関するお問い合わせは、
            <a
              href="https://github.com/ykzts/chat-styles/issues"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHubのIssue
            </a>
            よりお願いいたします。
          </p>
        </section>

        <section className="pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-600">制定日：2026年2月5日</p>
        </section>
      </div>
    </div>
  )
}
