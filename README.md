# Chat Styles

Chat Styles is a generator of style sheet for the YouTube Live Chat.

## What is Chat Styles?

Chat Styles is a web-based tool that generates custom CSS for YouTube Live Chat. The generated CSS can be used in OBS Studio's browser source to customize the appearance of your live chat overlay, making it perfect for streamers who want to match their chat styling to their brand or stream aesthetic.

## How to Use

### 1. Generate Your Custom CSS

Visit [https://chat-styles.app/](https://chat-styles.app/) and use the form to customize your chat appearance:

- **Text Styles**: Adjust font size, color, and outline for author names, messages, timestamps, and more
- **Avatar Settings**: Configure avatar visibility and size
- **Role Styles**: Customize appearance for channel owners, moderators, and members
- **Badge Settings**: Control visibility and size of moderator and member badges
- **Background Options**: Toggle backgrounds for Super Chats and new member messages

The preview panel will show you how your changes will look in real-time.

### 2. Copy the Generated CSS

Once you're satisfied with your customization, click the "コピーする" (Copy) button below the CSS code display to copy the generated stylesheet to your clipboard.

### 3. Apply to OBS Studio

To use your custom CSS in OBS Studio:

1. In OBS Studio, add a new **Browser** source or edit an existing one
2. Set the URL to your YouTube Live Chat URL (pop out the chat from your live stream page):
   - Example: `https://www.youtube.com/live_chat?v=YOUR_VIDEO_ID`
   - Or use the full popout URL from YouTube's chat pop-out feature
3. Paste your copied CSS into the **Custom CSS** field
4. Adjust the width and height as needed (recommended: 400x600 or similar)
5. Click OK to apply

Your YouTube Live Chat will now display with your custom styling!

### 4. Tips for Best Results

- Test your styling before going live to ensure readability
- Consider your stream's background color when choosing text colors and outlines
- Save your CSS in a text file if you want to reuse or modify it later
- The preview in Chat Styles gives a good approximation, but always test in OBS Studio for final verification

## Development

To run Chat Styles locally:

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

The application will be available at `http://localhost:3000`.

## License

[MIT](LICENSE)

## Thanks

Inspired by [Chat v2.0 Style Generator](https://chatv2.septapus.com/).
