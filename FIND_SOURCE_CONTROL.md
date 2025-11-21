# How to Find Source Control in Cursor

## Method 1: Left Sidebar (Primary Location)

1. **Look at the LEFT SIDEBAR** of Cursor
2. You'll see several icons stacked vertically:
   - 📁 Explorer (file icon)
   - 🔍 Search (magnifying glass)
   - **🌿 Source Control** (branch/fork icon) ← THIS ONE
   - 🐛 Run and Debug
   - 📦 Extensions
3. **Click the branch/fork icon** (3rd or 4th icon down)
4. This opens the Source Control panel

## Method 2: Command Palette (Keyboard Shortcut)

1. Press **`Cmd+Shift+P`** (Mac) or **`Ctrl+Shift+P`** (Windows/Linux)
2. Type: `Git: Initialize Repository`
3. Press Enter
4. This will initialize git in your project folder

## Method 3: View Menu

1. Click **"View"** in the top menu bar
2. Look for **"Source Control"** or **"SCM"**
3. Click it

## Method 4: Keyboard Shortcut

- Press **`Ctrl+Shift+G`** (Windows/Linux) or **`Cmd+Shift+G`** (Mac)
- This directly opens Source Control

---

## Visual Guide:

```
Cursor Window:
┌─────────────────────────────────────┐
│ File Edit View ...                   │
├──┬───────────────────────────────────┤
│📁│                                   │
│🔍│     Main Editor Area              │
│🌿│                                   │  ← Click this branch icon!
│🐛│                                   │
│📦│                                   │
└──┴───────────────────────────────────┘
```

The **🌿 branch icon** is the Source Control panel!

---

## If You Still Can't Find It:

Try the Command Palette method (Method 2) - it's the fastest:
1. **`Cmd+Shift+P`**
2. Type: `Git: Initialize Repository`
3. Press Enter

This will initialize git, then you can use the Source Control panel to commit and push.


