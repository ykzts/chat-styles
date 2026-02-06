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
  const t = await getTranslations({ locale, namespace: 'usage' })

  return {
    title: t('title')
  }
}

export default async function Usage({ params }: Props) {
  const { locale } = await params

  if (locale === 'ja') {
    return (
      <div className="py-4 max-w-4xl">
        <article className="prose prose-slate max-w-none">
          <h1>使い方</h1>

          <h2>Chat Stylesとは</h2>
          <p>
            Chat Stylesは、YouTube
            Liveのチャットの見た目を変更するCSSを生成するツールです。OBS
            Studioのブラウザソースでカスタムスタイルを適用することで、配信画面上のチャット表示をカスタマイズできます。
          </p>

          <h2>基本的な使い方</h2>

          <h3>1. スタイルをカスタマイズする</h3>
          <p>
            左側のフォームで、チャットの見た目をカスタマイズできます。以下の項目を調整できます：
          </p>
          <p>
            <strong>アイコン</strong>
            <br />
            ユーザーアイコンの表示・非表示と大きさを設定します。
          </p>
          <p>
            <strong>フォント</strong>
            <br />
            チャット全体で使用するフォントを選択します。システムにインストールされているフォントから選択できます。
          </p>
          <p>
            <strong>名前</strong>
            <br />
            オーナー、モデレーター、メンバー、一般ユーザーそれぞれの名前の表示設定を行います。表示・非表示、大きさ、色、アウトラインを個別に設定できます。
          </p>
          <p>
            <strong>メッセージ</strong>
            <br />
            チャットメッセージのテキストサイズと色、アウトラインを設定します。
          </p>
          <p>
            <strong>ステッカー</strong>
            <br />
            スーパーチャットなどに含まれるステッカーの大きさと、テキストの表示・非表示を設定します。
          </p>
          <p>
            <strong>その他</strong>
            <br />
            入室メッセージ、スーパーチャットの背景、メンバー登録アナウンスの背景の表示設定を行います。
          </p>

          <h3>2. CSSをコピーする</h3>
          <p>
            右下の「カスタムCSS」セクションに生成されたCSSが表示されます。「コピーする」ボタンをクリックしてCSSをクリップボードにコピーします。
          </p>

          <h3>3. OBS Studioで使用する</h3>
          <p>コピーしたCSSをOBS Studioで使用します：</p>

          <h4>ブラウザソースの追加</h4>
          <ol>
            <li>OBS Studioで「ソース」の「+」ボタンをクリック</li>
            <li>「ブラウザ」を選択</li>
            <li>任意の名前を入力して「OK」をクリック</li>
          </ol>

          <h4>URLの設定</h4>
          <p>
            「URL」フィールドに、YouTube
            LiveのチャットページのポップアウトURLを入力します。URLは以下の形式です：
          </p>
          <pre>
            <code>
              https://www.youtube.com/live_chat?v=VIDEO_ID&is_popout=1
            </code>
          </pre>

          <h4>カスタムCSSの適用</h4>
          <p>
            「カスタムCSS」フィールドに、先ほどコピーしたCSSを貼り付けます。
          </p>

          <h4>その他の設定</h4>
          <ul>
            <li>「幅」と「高さ」を配信画面に合わせて調整</li>
            <li>「シャットダウン時にブラウザを更新」をチェック</li>
            <li>「OK」をクリックして設定を保存</li>
          </ul>

          <h2>より良い結果を得るためのヒント</h2>
          <ul>
            <li>
              フォントは、配信で使用するPCにインストールされている必要があります。
            </li>
            <li>
              アウトラインの太さを調整することで、テキストの視認性を向上させることができます。
            </li>
            <li>
              背景色と文字色のコントラストに注意して、読みやすさを確保してください。
            </li>
            <li>
              設定は自動的にブラウザに保存されるため、次回訪問時にも同じ設定を使用できます。
            </li>
            <li>プレビュー画面で実際の見た目を確認しながら調整できます。</li>
          </ul>

          <h2>よくある質問</h2>

          <p>
            <strong>Q: 設定はどこに保存されますか？</strong>
            <br />
            A:
            設定はブラウザのローカルストレージに保存されます。サーバーには送信されません。
          </p>

          <p>
            <strong>Q: 別のデバイスで同じ設定を使用できますか？</strong>
            <br />
            A:
            ローカルストレージに保存されるため、デバイス間での同期はされません。設定を移行したい場合は、生成されたCSSをコピーして保存しておくことをお勧めします。
          </p>

          <p>
            <strong>
              Q: プレビューと実際のYouTube
              Liveチャットの見た目が異なる場合があります。
            </strong>
            <br />
            A:
            プレビューは参考程度にご覧ください。YouTubeのチャットUIが更新されると、実際の表示が変わる可能性があります。実際の配信環境で確認することをお勧めします。
          </p>

          <h2>お問い合わせ</h2>
          <p>
            ご質問やフィードバックがある場合は、
            <a
              href="https://github.com/ykzts/chat-styles"
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              GitHubのリポジトリ
            </a>
            からIssueを作成してください。
          </p>
        </article>
      </div>
    )
  }

  return (
    <div className="py-4 max-w-4xl">
      <article className="prose prose-slate max-w-none">
        <h1>How to Use</h1>

        <h2>What is Chat Styles</h2>
        <p>
          Chat Styles is a tool for generating CSS to change the appearance of
          YouTube Live chat. You can customize the chat display on your stream
          screen by applying custom styles in OBS Studio's browser source.
        </p>

        <h2>Basic Usage</h2>

        <h3>1. Customize Styles</h3>
        <p>
          You can customize the appearance of your chat using the form on the
          left. You can adjust the following items:
        </p>
        <p>
          <strong>Avatar</strong>
          <br />
          Set the visibility and size of user avatars.
        </p>
        <p>
          <strong>Font</strong>
          <br />
          Select the font to be used throughout the chat. You can choose from
          fonts installed on your system.
        </p>
        <p>
          <strong>Name</strong>
          <br />
          Configure name display settings for owners, moderators, members, and
          regular users. You can individually set visibility, size, color, and
          outline.
        </p>
        <p>
          <strong>Message</strong>
          <br />
          Set the text size, color, and outline for chat messages.
        </p>
        <p>
          <strong>Sticker</strong>
          <br />
          Set the size of stickers included in Super Chats and the visibility of
          text.
        </p>
        <p>
          <strong>Other</strong>
          <br />
          Configure display settings for engagement messages, Super Chat
          backgrounds, and new member announcement backgrounds.
        </p>

        <h3>2. Copy CSS</h3>
        <p>
          The generated CSS is displayed in the "Custom CSS" section at the
          bottom right. Click the "Copy" button to copy the CSS to your
          clipboard.
        </p>

        <h3>3. Use in OBS Studio</h3>
        <p>Use the copied CSS in OBS Studio:</p>

        <h4>Add Browser Source</h4>
        <ol>
          <li>Click the "+" button in "Sources" in OBS Studio</li>
          <li>Select "Browser"</li>
          <li>Enter any name and click "OK"</li>
        </ol>

        <h4>Set URL</h4>
        <p>
          In the "URL" field, enter the pop-out URL of your YouTube Live chat
          page. The URL format is:
        </p>
        <pre>
          <code>https://www.youtube.com/live_chat?v=VIDEO_ID&is_popout=1</code>
        </pre>

        <h4>Apply Custom CSS</h4>
        <p>Paste the CSS you copied earlier into the "Custom CSS" field.</p>

        <h4>Other Settings</h4>
        <ul>
          <li>Adjust "Width" and "Height" to match your stream screen</li>
          <li>Check "Refresh browser when scene becomes active"</li>
          <li>Click "OK" to save settings</li>
        </ul>

        <h2>Tips for Better Results</h2>
        <ul>
          <li>Fonts must be installed on the PC used for streaming.</li>
          <li>Adjusting outline thickness can improve text visibility.</li>
          <li>
            Pay attention to the contrast between background and text colors to
            ensure readability.
          </li>
          <li>
            Settings are automatically saved in your browser, so you can use the
            same settings on your next visit.
          </li>
          <li>You can preview the actual appearance while adjusting.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <p>
          <strong>Q: Where are the settings saved?</strong>
          <br />
          A: Settings are saved in your browser's local storage. They are not
          sent to any server.
        </p>

        <p>
          <strong>Q: Can I use the same settings on different devices?</strong>
          <br />
          A: Since settings are saved in local storage, they are not synced
          between devices. If you want to transfer settings, we recommend
          copying and saving the generated CSS.
        </p>

        <p>
          <strong>
            Q: The preview may look different from the actual YouTube Live chat.
          </strong>
          <br />
          A: The preview is for reference only. When YouTube's chat UI is
          updated, the actual display may change. We recommend testing in your
          actual streaming environment.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions or feedback, please create an issue on{' '}
          <a
            href="https://github.com/ykzts/chat-styles"
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub repository
          </a>
          .
        </p>
      </article>
    </div>
  )
}
