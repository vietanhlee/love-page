# 💌 08/03 Love App

Web tặng người yêu nhân ngày Quốc tế Phụ nữ, xây dựng bằng **Vite + React**.

---

## Yêu cầu

- [Node.js](https://nodejs.org/) **v18+**
- npm (đi kèm Node.js)

---

## Cài đặt & chạy

```bash
# 1. Vào thư mục dự án
cd love-app

# 2. Cài dependencies
npm install

# 3. Chạy dev server
npm run dev
```

Mở trình duyệt tại **http://localhost:5173**

> Chạy cổng khác: `npm run dev -- --port 3308`

---

## Tuỳ chỉnh nội dung

Toàn bộ nội dung (tên, lời nhắn, ảnh, footer…) nằm trong một file duy nhất:

```
src/config.js
```

| Trường             | Mô tả                                          |
| ------------------ | ---------------------------------------------- |
| `recipientName`    | Tên người được tặng                            |
| `senderName`       | Tên người tặng                                 |
| `hero.eyebrow`     | Dòng badge nhỏ trên đầu                        |
| `hero.subtitle`    | Câu phụ dưới tên                               |
| `hero.poem`        | Dòng thơ nhỏ                                   |
| `sections[]`       | Mảng các slide kỷ niệm (ảnh + ngày + lời nhắn) |
| `finalPhoto`       | Ảnh full-screen ở slide cuối                   |
| `footer.lines[]`   | Các dòng chữ trong footer                      |
| `footer.signature` | Chữ ký cuối                                    |

### Thay ảnh

Mỗi section trong `sections[]` có trường `image` — thay bằng:

- **URL ảnh online**: `"https://..."`
- **Ảnh local**: đặt file vào thư mục `public/` rồi dùng `"/ten-anh.jpg"`

---

## Build production

```bash
npm run build
```

File tĩnh xuất ra thư mục `dist/` — có thể deploy lên Vercel, Netlify, GitHub Pages…

### Deploy nhanh lên Vercel

```bash
npm i -g vercel
vercel
```

### Deploy lên GitHub Pages

```bash
# Thêm vào vite.config.js: base: '/tên-repo/'
npm run build
npx gh-pages -d dist
```

---

## Cấu trúc dự án

```
love-app/
├── public/             # Ảnh tĩnh (nếu dùng ảnh local)
├── src/
│   ├── config.js       # ← Sửa nội dung tại đây
│   ├── App.jsx         # Tất cả components
│   ├── App.css         # Toàn bộ styling
│   └── index.css       # Reset + Google Fonts
├── index.html
└── package.json
```

---

## Tính năng

- 📜 Scroll snap — mỗi lần cuộn = một trang mới
- 💫 Animation vào/ra mỗi slide (image zoom, timeline vẽ, card glow)
- 🖼️ Layout bắt chéo (ảnh & text nghiêng đối nhau)
- 💗 Cursor trail tim theo chuột
- 🌸 Cánh hoa rơi nền hero
- 🔴 Progress dots điều hướng bên phải
- 📱 Responsive mobile
