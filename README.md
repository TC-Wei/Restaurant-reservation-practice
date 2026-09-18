# 松風火鍋網頁預約

## Demo

https://restaurant-reservation-practice.vercel.app/

## 功能

### 店家資訊

- 營業時間、地址、電話、地圖、菜單（橫向捲動）

- 附近停車場清單，點擊開啟 Google Maps

### 訂位流程

- 選擇人數、日期、用餐時段，底部摘要列即時顯示，大人 + 小孩合計超過 6人 的選項會自動變灰、點不下去。

- 填寫聯絡資料：姓名、電話、條款必填，Email、備註選填

- 手機號碼使用（09 開頭 10 碼），錯誤會即時顯示

- 三階段：選日期時間 → 填寫聯絡資料 → 完成

### 響應式

- 桌面 / 手機版面自動切換

## 技術棧

React 19、Vite、CSS、Ant Design(antd)、dayjs

## 說明

參考 inline 訂位系統的流程實作，店家為虛構。圖片來源：Unsplash（免費授權）、Canva AI 生成

## 未實作

- 後端串接：目前資料僅存在前端，送出後不會實際建立訂位

- 手機 / Email 真偽驗證（需簡訊、信件驗證服務）

- 已訂時段的即時查詢

---

## English

### Demo

https://restaurant-reservation-practice.vercel.app/

### Features

#### Restaurant info

- Business hours, address, phone number, map, menu (horizontal scroll)
- Nearby parking list — click to open in Google Maps

#### Reservation flow

- Select the number of guests, date, and time slot. A summary bar at the bottom updates in real time. Options that would exceed 6 people (adults + children) are automatically disabled.
- Contact form: name, phone, and terms are required; email and notes are optional.
- Phone number must be 10 digits starting with 09; errors show instantly.
- Three-step flow: select date & time → contact info → done

#### Responsive layout

- Automatic switching between desktop and mobile layouts

### Tech Stack

- React 19, Vite, CSS, Ant Design (antd), dayjs

### Notes

- Flow modeled after inline's reservation system; the restaurant is fictional.

### Not Implemented

- Backend integration: Currently, the data only exists on the frontend; sending it will not actually create a reservation
- Mobile phone/email verification (requires SMS/email verification service)
- Real-time availability check
