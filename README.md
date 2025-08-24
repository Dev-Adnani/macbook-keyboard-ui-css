# 🍎 Mac Keyboard

An authentic MacBook keyboard replica built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎯 **Authentic Mac Layout** - Real MacBook keyboard proportions
- ⌨️ **Function Keys** - F1-F12 keys with Mac icons
- 🎨 **Interactive Design** - Hover effects and animations
- 📱 **Mobile Responsive** - Works on all screen sizes
- 🎭 **T-Shape Arrow Keys** - Authentic Mac arrow layout

## 🚀 Demo

**[Live Demo](https://mc.devadnani.com)**

## 🛠️ Setup

```bash
git clone https://github.com/Dev-Adnani/mac-kyboard.git
cd mac-kyboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔧 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **CSS Flexbox** - Layout system

## 🎨 How It Works

The keyboard uses **CSS Flexbox** for proportional sizing:

```tsx
// Spacebar is 8x wider than normal keys
[" ", "flex-[8]"][
  // Tab key is 1.5x wider
  ("tab", "flex-[1.5]")
];
```

This allows fractional ratios and authentic Mac proportions.

## 📱 Responsive Design

- **Mobile**: Horizontal scroll, compact layout
- **Tablet**: Two-column features
- **Desktop**: Full three-column layout

## 🤝 Contributing

Contributions welcome! Fork, create a feature branch, and submit a PR.

## 👤 Author

**Dev Adnani**

- GitHub: [@Dev-Adnani](https://github.com/Dev-Adnani)

---

<div align="center">
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
