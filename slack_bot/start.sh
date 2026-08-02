#!/usr/bin/env bash
# setup-slack-bot.sh – One-command environment setup for a Node.js Slack bot
# Usage: chmod +x setup-slack-bot.sh && ./setup-slack-bot.sh

set -e  # Exit on any error

echo "============================================"
echo "   Slack Bot Setup (Bolt for JavaScript)   "
echo "============================================"

# ---- 1. Prerequisites check ----
command -v node >/dev/null 2>&1 || { echo "❌ Node.js is required. Install it from https://nodejs.org"; exit 1; }
command -v npm  >/dev/null 2>&1 || { echo "❌ npm is required."; exit 1; }
echo "✅ Node.js and npm found."

# ---- 2. Project directory ----
read -p "Project directory name (default: slack-bot): " PROJECT_DIR
PROJECT_DIR=${PROJECT_DIR:-slack-bot}

if [ -d "$PROJECT_DIR" ]; then
  echo "⚠️  Directory '$PROJECT_DIR' already exists. Aborting."
  exit 1
fi

mkdir "$PROJECT_DIR"
cd "$PROJECT_DIR"
echo "📁 Created project folder: $PROJECT_DIR"

# ---- 3. Initialize npm & install dependencies ----
npm init -y >/dev/null 2>&1
echo "📦 Installing @slack/bolt and dotenv..."
npm install @slack/bolt dotenv

# ---- 4. Collect credentials ----
echo ""
echo "You need your Slack Bot Token and Signing Secret."
echo "Get them from https://api.slack.com/apps (your app → OAuth & Permissions / Basic Information)"
read -p "Slack Bot Token (xoxb-...): " SLACK_BOT_TOKEN
read -p "Slack Signing Secret: " SLACK_SIGNING_SECRET
read -p "Port for local server (default: 3000): " PORT
PORT=${PORT:-3000}

# ---- 5. Create .env file ----
cat > .env <<EOF
SLACK_BOT_TOKEN=$SLACK_BOT_TOKEN
SLACK_SIGNING_SECRET=$SLACK_SIGNING_SECRET
PORT=$PORT
EOF
echo "🔐 .env file written."

echo ""
echo "============================================"
echo "   ✅ Setup complete!"
echo "============================================"
echo "To start the bot (after creating app.js):"
echo "  cd $PROJECT_DIR"
echo "  node app.js"