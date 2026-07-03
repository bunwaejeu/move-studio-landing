# Move Studio — Landing Page

Landing page một trang (one-page) cho **Move Studio** — boutique studio với huấn luyện riêng 1:1 và lớp nhóm giới hạn tại Tây Hồ, Hà Nội.

Xây bằng **HTML / CSS / JavaScript thuần** — không framework, không build step. Deploy được lên bất kỳ static host nào (Netlify, Vercel, GitHub Pages).

## Cấu trúc

```
move-studio-landing/
├── index.html          # Toàn bộ one-page
├── css/styles.css      # Design tokens + styles
├── js/main.js          # Nav, mobile menu, scroll-reveal, form UX
├── assets/             # Logo + ảnh
├── netlify.toml        # Cấu hình deploy Netlify
└── README.md
```

## Các section

Header/Nav · Hero · Giới thiệu · Bảng giá / Gói tập · Lịch tập mẫu · Form đặt lịch / Liên hệ · Footer

## Chạy local

Chỉ cần mở `index.html` bằng trình duyệt. Hoặc chạy static server:

```bash
# Python
python -m http.server 8000
# rồi mở http://localhost:8000
```

## Deploy lên Netlify

1. Push repo này lên GitHub.
2. Trên [Netlify](https://app.netlify.com/) → **Add new site → Import an existing project** → chọn repo.
3. Build command: *(để trống)* · Publish directory: `.`
4. Deploy.

### Bật form gửi email (Netlify Forms)

Form đặt lịch hiện chỉ có giao diện (chưa gửi email). Để bật sau khi deploy:

1. Thêm `data-netlify="true"` và `name="dat-lich"` vào thẻ `<form>` trong `index.html`.
2. Thêm 1 input ẩn: `<input type="hidden" name="form-name" value="dat-lich" />`.
3. Redeploy — Netlify tự nhận form, submissions xem trong dashboard, có thể set email notification.

## Palette

| Token | Màu |
|-------|-----|
| gold (accent) | `#D4B795` |
| ink | `#1E1E1E` |
| paper (bg) | `#F3EEE6` |
| white | `#FFFFFF` |

Font: **Be Vietnam Pro** (Google Fonts).
