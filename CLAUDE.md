# business-model-canvas-generator — 商業模式圖產生器

單檔前端（`index.html`＋`data.js`＋`manual.html`），2026-09-21 建立。輸入產品／服務名稱、產業類別、目標客群、核心痛點 → 產生商業模式九宮格（Business Model Canvas）草稿，可複製全部文字、下載 .txt、列印成 PDF。

## 架構
- `data.js`：共用資料檔。產業分類用關鍵字比對（沿用 `new-product-strategy-studio` 的六桶分類：健康科技、餐飲食品、軟體服務、生活家電、教育內容、一般消費）＋九宮格規則式模板庫＋5 組內建範例。模板佔位符 `{{PRODUCT}}`、`{{TARGET}}`、`{{PAIN}}`。
- **不填金鑰也能用**：「✨ 產生九宮格草稿」走規則式模板。
- 選用 BYOK AI（「🔑 API 金鑰設定」：服務商、金鑰、模型）→「🤖 請 AI 生成完整九宮格」；金鑰只存在瀏覽器。Gemini 呼叫已套 `geminiModelFix()`。
- 與 `business-model-pattern-studio`（商業模式組合工作室，63＋15 個模式組合）是不同工具，不要混改。

## 部署
公開 repo，GitHub Actions 部署 Pages：<https://m255525.github.io/business-model-canvas-generator/>。無序號。

## 標準配備
跑馬燈（滑鼠移入暫停）、`manual.html`（完整創作者區塊，2026-10-30）、使用警語、PWA（SW 只刪自己前綴的快取）、訪客計數器。

## 驗證
無自動化測試；改 `data.js` 後實際用 5 組範例各產生一次九宮格確認佔位符都有替換，並用工具健康檢查重查。
