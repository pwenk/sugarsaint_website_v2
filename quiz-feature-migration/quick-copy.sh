#!/bin/bash

# SugarSaint Quiz - Quick Copy Script
# Usage: ./quick-copy.sh /path/to/sugarsaint-v2

if [ -z "$1" ]; then
    echo "❌ Error: Please provide the path to your v2 project"
    echo "Usage: ./quick-copy.sh /path/to/sugarsaint-v2"
    exit 1
fi

TARGET_DIR="$1"

if [ ! -d "$TARGET_DIR" ]; then
    echo "❌ Error: Directory $TARGET_DIR does not exist"
    exit 1
fi

echo "📦 Copying SugarSaint Quiz to $TARGET_DIR..."
echo ""

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Copy lib files
echo "📚 Copying library files..."
cp -r "$SCRIPT_DIR/lib/quiz" "$TARGET_DIR/lib/"
cp "$SCRIPT_DIR/lib/resend.ts" "$TARGET_DIR/lib/"

# Copy components
echo "🎨 Copying components..."
cp -r "$SCRIPT_DIR/components/quiz" "$TARGET_DIR/components/"

# Copy pages
echo "📄 Copying pages..."
cp -r "$SCRIPT_DIR/app/quiz" "$TARGET_DIR/app/"

# Copy API routes
echo "🔌 Copying API routes..."
mkdir -p "$TARGET_DIR/app/api"
cp -r "$SCRIPT_DIR/app/api/quiz" "$TARGET_DIR/app/api/"

# Copy tests
echo "🧪 Copying tests..."
mkdir -p "$TARGET_DIR/tests"
cp "$SCRIPT_DIR/tests/"* "$TARGET_DIR/tests/" 2>/dev/null || true

# Copy env example
echo "🔐 Copying environment template..."
cp "$SCRIPT_DIR/.env.local.example" "$TARGET_DIR/"

echo ""
echo "✅ Files copied successfully!"
echo ""
echo "📋 Next steps:"
echo "1. cd $TARGET_DIR"
echo "2. npm install resend"
echo "3. Copy .env.local.example to .env.local and add your Resend keys"
echo "4. Update sender email in app/api/quiz/submit/route.ts"
echo "5. Update homepage links to point to /quiz"
echo "6. npm run dev and test at /quiz"
echo ""
echo "📖 See MIGRATION_GUIDE.md for detailed instructions"
