import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '使い方'
}

export default function Usage() {
  return (
    <div className="py-4 max-w-4xl">
      <h1 className="text-3xl font-normal mb-6">使い方</h1>

      <div className="space-y-6 text-base">
        <section>
          <h2 className="text-xl font-semibold mb-3">Chat Stylesとは</h2>
          <p>
            Chat Stylesは、YouTube
            Liveのチャットの見た目を変更するCSSを生成するツールです。生成されたCSSは、OBS
            StudioのブラウザソースのカスタムCSSとして使用することができます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">基本的な使い方</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                1. スタイルをカスタマイズする
              </h3>
              <p>
                左側のフォームで、チャットの見た目を自由にカスタマイズできます：
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>
                  <strong>テキストスタイル：</strong>
                  投稿者名、メッセージ、タイムスタンプなどのフォントサイズ、色、縁取りを調整
                </li>
                <li>
                  <strong>アバター設定：</strong>
                  アバターの表示/非表示とサイズを設定
                </li>
                <li>
                  <strong>ロール別スタイル：</strong>
                  チャンネルオーナー、モデレーター、メンバーの表示をカスタマイズ
                </li>
                <li>
                  <strong>バッジ設定：</strong>
                  モデレーターバッジとメンバーバッジの表示とサイズを設定
                </li>
                <li>
                  <strong>背景オプション：</strong>
                  スーパーチャットや新規メンバーの背景の表示/非表示を切り替え
                </li>
              </ul>
              <p className="mt-2">
                右側のプレビューで、変更内容をリアルタイムで確認できます。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">2. CSSをコピーする</h3>
              <p>
                カスタマイズが完了したら、画面下部に表示されるCSSコードの「コピーする」ボタンをクリックして、生成されたスタイルシートをクリップボードにコピーします。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                3. OBS Studioで使用する
              </h3>
              <p>コピーしたCSSをOBS Studioで使用する手順：</p>
              <ol className="list-decimal list-inside mt-2 space-y-2 ml-4">
                <li>
                  OBS
                  Studioで新しい「ブラウザ」ソースを追加するか、既存のものを編集します
                </li>
                <li>
                  URLに、YouTube Live
                  ChatのURLを設定します（ライブ配信ページのチャット欄から「チャットをポップアウト」で取得できます）
                  <ul className="list-disc list-inside mt-1 ml-4 text-sm">
                    <li>
                      例：
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                        https://www.youtube.com/live_chat?v=YOUR_VIDEO_ID
                      </code>
                    </li>
                  </ul>
                </li>
                <li>「カスタムCSS」欄に、コピーしたCSSを貼り付けます</li>
                <li>幅と高さを必要に応じて調整します（推奨：400×600 など）</li>
                <li>OKをクリックして適用します</li>
              </ol>
              <p className="mt-2">
                これで、カスタマイズされたスタイルでYouTube Live
                Chatが表示されます！
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">
            より良い結果を得るためのヒント
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              配信前に必ずスタイルをテストして、テキストが読みやすいか確認しましょう
            </li>
            <li>
              配信の背景色を考慮して、テキストの色や縁取りを選択しましょう
            </li>
            <li>
              後で再利用したい場合は、生成されたCSSをテキストファイルに保存しておきましょう
            </li>
            <li>
              Chat Stylesのプレビューは参考になりますが、最終的にはOBS
              Studioで実際に確認することをお勧めします
            </li>
            <li>
              設定は自動的にブラウザに保存されるため、次回訪問時も同じ設定が復元されます
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">よくある質問</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">
                Q. 設定はどこに保存されますか？
              </h3>
              <p>
                A.
                設定はブラウザのIndexedDB（localForage）にローカルで保存されます。サーバーには送信されないため、プライバシーが保護されます。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                Q. 他のデバイスでも同じ設定を使いたい
              </h3>
              <p>
                A.
                生成されたCSSをテキストファイルとして保存し、他のデバイスのOBS
                Studioで同じCSSを貼り付けることで、同じスタイルを使用できます。
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">
                Q. プレビューと実際の表示が少し違う
              </h3>
              <p>
                A. プレビューはサンプルデータを使用しているため、実際のYouTube
                Live
                Chatと完全には一致しない場合があります。最終的な見た目は、OBS
                Studioで実際のチャットを表示して確認してください。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">お問い合わせ</h2>
          <p>
            使い方に関するご質問やフィードバックは、
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
      </div>
    </div>
  )
}
