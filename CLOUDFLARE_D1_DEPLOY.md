# 自由TV：Cloudflare Workers + D1 部署

本倉庫已固定使用 Cloudflare Workers 與 D1，不需要 Upstash、Redis 或自建伺服器。網站名稱會在每次建置時自動設為「自由TV」。

## 一次性設定

1. 在 Cloudflare Dashboard 的 **Workers & Pages > D1** 建立資料庫，名稱必須是 `free-tv`；複製它的 **Database ID**。
2. 在 GitHub 倉庫的 **Settings > Secrets and variables > Actions** 設定下列項目。

   **Secrets**

   | 名稱 | 用途 |
   | --- | --- |
   | `CLOUDFLARE_API_TOKEN` | Cloudflare API Token。需要 Workers Scripts: Edit 與 D1: Edit 權限。 |
   | `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 帳戶 ID。 |
   | `USERNAME` | 自由TV 的管理員帳號。 |
   | `PASSWORD` | 自由TV 的管理員密碼。 |

   **Variables**

   | 名稱 | 值 |
   | --- | --- |
   | `D1_DATABASE_ID` | 第 1 步建立的 D1 Database ID。 |

   `D1_DATABASE_ID` 也可放在 Secrets；兩種方式皆可。
3. 前往 GitHub 的 **Actions > Deploy to Cloudflare > Run workflow**，選擇 `main` 並執行。

工作流程會自動建立所需資料表、建置專案並發布 Worker。首次成功後，先用 Cloudflare 顯示的 `workers.dev` 網址測試；自訂網域請自行在 Cloudflare 的 Worker 設定中綁定。

## 完成後

- 以 `USERNAME` 與 `PASSWORD` 登入管理後台。
- 專案不內建影片或直播來源；請僅加入你有權使用的來源。
- 若綁定自訂網域，可選擇在 GitHub Actions Secrets 補上 `SITE_BASE`，其值為完整 HTTPS 網址。
- `CLOUDFLARE_API_TOKEN`、帳密與任何第三方服務 Token 都只放 GitHub Secrets，絕不寫入程式碼或提交到倉庫。

## 已保留的功能限制

Cloudflare Workers 沒有可持久化的本機磁碟，因此依賴伺服器檔案系統的離線下載功能不適用；播放、帳號、收藏、播放記錄及後台設定都使用 D1。
