// app.js
const { App } = require('@slack/bolt');
require('dotenv').config();

// Initialize the app
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: false, // We'll use HTTP endpoints for commands and events
});

// -------------------------------------------------------------------
// 1. Slash command: /hello
// -------------------------------------------------------------------
app.command('/hello', async ({ command, ack, respond }) => {
  // Acknowledge immediately (required within 3 seconds)
  await ack();

  // Respond to the user (visible only to them)
  await respond({
    text: `Hello <@${command.user_id}>! How can I help you today?`,
    response_type: 'ephemeral',
  });
});

// -------------------------------------------------------------------
// 2. Respond to @mentions
// -------------------------------------------------------------------
app.event('app_mention', async ({ event, say }) => {
  try {
    await say({
      text: `Hi <@${event.user}>, thanks for mentioning me! Try \`/hello\` to get a greeting.`,
      thread_ts: event.ts, // Reply in thread to keep channels clean
    });
  } catch (error) {
    console.error('Error responding to mention:', error);
  }
});

// -------------------------------------------------------------------
// 3. Welcome message when joining a channel
// -------------------------------------------------------------------
app.event('member_joined_channel', async ({ event, client }) => {
  // Only act if the bot itself joined
  if (event.user === client.botUserId) {
    try {
      await client.chat.postMessage({
        channel: event.channel,
        text: `Thanks for inviting me! 👋 I'm here to help. Try \`/hello\`!`,
      });
    } catch (error) {
      console.error('Error posting welcome message:', error);
    }
  }
});

// -------------------------------------------------------------------
// Error handling
// -------------------------------------------------------------------
app.error(async (error) => {
  console.error('Global error:', error);
});

// -------------------------------------------------------------------
// Start the app
// -------------------------------------------------------------------
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log('⚡️ Slack bot is running!');
})();
