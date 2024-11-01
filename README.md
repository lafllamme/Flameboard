<p align="center">
  <img src="https://vitejs.dev/logo.svg" width="100" alt="Vite logo"/>
  <img src="https://vuejs.org/images/logo.png" width="100" alt="Vue logo"/>
  <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width="100" alt="TypeScript logo"/>
</p>

<h1 align="center">🔥 Flameboard - Vue 3 + TypeScript + Vite</h1>

<p align="center">
A blazing fast setup to kickstart your development with Vue 3, TypeScript, and Vite!
</p>

<p align="center">
  <a href="https://github.com/lafllamme/flameboard/actions"><img src="https://github.com/lafllamme/flameboard/workflows/CI/badge.svg" alt="CI Status"></a>
  <a href="https://github.com/lafllamme/flameboard/commits/main"><img src="https://img.shields.io/github/last-commit/lafllamme/flameboard" alt="Last Commit"></a>
  <a href="https://github.com/lafllamme/flameboard/issues"><img src="https://img.shields.io/github/issues/lafllamme/flameboard" alt="Open Issues"></a>
  <a href="https://github.com/lafllamme/flameboard/pulls"><img src="https://img.shields.io/github/issues-pr/lafllamme/flameboard" alt="Open Pull Requests"></a>
  <a href="https://github.com/lafllamme/flameboard"><img src="https://img.shields.io/github/license/lafllamme/flameboard" alt="License"></a>
</p>

## 🚀 Getting Started

This template helps you dive into developing with **Vue 3** + **TypeScript** in **Vite**. Follow the steps below to get started!

### Clone the Repository

```bash
git clone https://github.com/lafllamme/flameboard.git
cd flameboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Your app should now be running at `http://localhost:3000` 🎉

## 🛠 Recommended IDE Setup

For the best experience, use:

- **[VSCode](https://code.visualstudio.com/)** + **[Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)** for Vue 3 and `<script setup>` syntax.
  
  > **Note:** If you're using `<script setup>`, ensure you have Volar enabled instead of Vetur, as `<script setup>` is in RFC stage.

### 💡 Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a syntactic sugar that streamlines component definition in Vue 3. To enable proper IDE support, use Volar and disable Vetur.

## 🔖 Type Support for `.vue` Imports in TypeScript

By default, TypeScript shims `.vue` files as generic Vue components. For full prop type support in `.vue` files, use the following setup.

### If Using Volar

1. Open the VSCode Command Palette.
2. Run `Volar: Switch TS Plugin on/off`.

### If Using Vetur

1. Install `@vuedx/typescript-plugin-vue` and add it to the `plugins` section in `tsconfig.json`.
2. Delete `src/shims-vue.d.ts`.
3. Open `src/main.ts` in VSCode.
4. Open the VSCode Command Palette and select "Select TypeScript version" -> "Use workspace version".

## 🎨 Features

- ⚡ **Vite** - Super fast, no-bundle dev server
- 🛠 **Vue 3** - The latest Vue with composition API
- 🏗 **TypeScript** - Type-safe development with intellisense and type-checking
- 🔥 **Hot Module Replacement (HMR)** - Instant updates during development

## 📂 Project Structure

```plaintext
flameboard/
├── public/              # Static files
├── src/                 # Source code
│   ├── assets/          # Assets like images and styles
│   ├── components/      # Vue components
│   ├── App.vue          # Root component
│   └── main.ts          # Entry point
├── .gitignore           # Git ignore rules
├── package.json         # Project dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## 📦 Building for Production

To build the app for production, run:

```bash
npm run build
```

The output will be in the `dist/` directory, ready for deployment.

## 📚 Learn More

- **[Vue 3 Documentation](https://v3.vuejs.org/)** - Learn more about Vue 3 features.
- **[Vite Documentation](https://vitejs.dev/)** - Explore Vite’s blazing-fast dev server.
- **[TypeScript Documentation](https://www.typescriptlang.org/)** - Discover how TypeScript helps build reliable applications.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. Please make sure to follow the [Code of Conduct](https://github.com/lafllamme/flameboard/blob/main/CODE_OF_CONDUCT.md).

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

<p align="center">Made with ❤️ by <a href="https://github.com/lafllamme">lafllamme</a></p>
