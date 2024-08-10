# Welcome to week6 👋

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)

> 第六週 作業

### 🏠 [Homepage](https://ttppoo121440.github.io/week6/)

## 安裝

```sh
npm install
```

## 使用

```sh
npm start
```

## 資料夾結構

```plaintext
│  .env                # 環境變數配置文件，用於儲存專案的敏感資訊，如 API 金鑰等。
│  .env.production     # 針對生產環境的環境變數配置文件，儲存與生產環境相關的敏感資訊。
│  .gitignore          # Git 忽略文件，定義哪些文件和目錄應該被 Git 忽略，通常包括 node_modules、環境變數文件等。
│  .prettierrc         # Prettier 配置文件，用於定義代碼格式化規則。
│  eslint.config.js    # ESLint 配置文件，用於設定 JavaScript/TypeScript 的代碼檢查規則。
│  package-lock.json   # 用於鎖定專案中的依賴版本，確保每次安裝的依賴是一致的。
│  package.json        # 專案的基本配置信息和依賴列表，包含腳本、依賴、專案名稱等。
│  postcss.config.js   # PostCSS 配置文件，用於定義 Tailwind CSS 等插件的設置。
│  README.md           # 專案的自述文件，通常用來描述專案、如何使用和貢獻的指南。
│  tailwind.config.js  # Tailwind CSS 配置文件，用於自定義 Tailwind 的主題、插件和屏幕斷點等設置。
│  tsconfig.json       # TypeScript 配置文件，定義編譯器選項和專案中的 TypeScript 設置。
│  vite-env.d.ts       # 用於定義 Vite 環境變數的 TypeScript 類型聲明文件。
│  vite.config.ts      # Vite 配置文件，包含專案的構建和開發伺服器設置。
│
├─.vscode
│      settings.json   # VSCode 設置文件，用於定制此專案的特定編輯器配置，如格式化和插件設定。
│
└─src
    │  main.ts               # 專案的主入口文件，負責初始化和渲染應用程式。
    │
    ├─assets
    │  └─styles
    │          tailwind.css  # Tailwind CSS 主樣式文件，包含 Tailwind 的基礎樣式和自定義樣式。
    │
    ├─components
    │      Carousel.ts       # 輪播組件的 TypeScript 文件，包含與輪播相關的邏輯和功能。
    │      MobileMenu.ts     # 手機菜單組件的 TypeScript 文件，管理移動端菜單的開啟和關閉等功能。
    │
    ├─layout
    │      Footer.ejs        # 頁腳佈局文件，使用 EJS 模板引擎渲染靜態頁面的一部分。
    │      Navbar.ejs        # 導航欄佈局文件，使用 EJS 模板引擎渲染靜態頁面的一部分。
    │
    └─pages
            about.html               # 關於我們頁面，包含關於公司的介紹和背景信息。
            all-article.html         # 所有文章列表頁面，展示所有文章的簡介和連結。
            article-details.html     # 文章詳情頁面，顯示單篇文章的內容。
            checkout.html            # 結帳頁面，處理用戶的購物車結算流程。
            index.html               # 主頁，通常是專案的首頁或著陸頁。
            login.html               # 登錄頁面，用於用戶登入系統。
            payment-info.html        # 支付信息頁面，讓用戶輸入或查看支付詳情。
            register.html            # 註冊頁面，用於新用戶創建帳戶。
            subscription.html        # 訂閱頁面，展示訂閱計劃並處理訂閱事宜。
```

## Author

👤 **兔子**

- Github: [@ttppoo121440](https://github.com/ttppoo121440)
