export default function UsageContentEn() {
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
