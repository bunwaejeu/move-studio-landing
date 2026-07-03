# Move Studio — Landing Page

Landing page một trang (one-page) cho **Move Studio** — boutique studio với huấn luyện riêng 1:1 và lớp nhóm giới hạn tại Tây Hồ, Hà Nội.

Xây bằng **HTML / CSS / JavaScript thuần** — không framework, không build step. Deploy được lên bất kỳ static host nào (Netlify, Vercel, GitHub Pages).

## Cấu trúc

```
move-studio-landing/
├── index.html          # Toàn bộ one-page
├── css/styles.css      # Design tokens + styles
├── js/main.js          # Nav, mobile menu, scroll-reveal, form UX, price→form
├── assets/             # Logo + ảnh (tái sử dụng từ design_handoff_move_studio)
├── netlify.toml        # Cấu hình deploy Netlify (publish dir, cache headers)
├── .gitignore
└── README.md
```

## Các section

Header/Nav · Hero · Giới thiệu · Bảng giá / Gói tập · Lịch tập mẫu · Form đặt lịch / Liên hệ · Footer

Responsive breakpoints chính: **900px** (nav → hamburger, các grid 2 cột → 1 cột), **760px** (footer 4→2 cột, hiện gợi ý vuốt ngang cho bảng lịch), **600px** (nút hero xếp dọc), **520/480px** (footer 1 cột, giảm padding thẻ giá/form).

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

Form đặt lịch (`#bookingForm` trong `index.html`) hiện chỉ có giao diện — submit chỉ hiện màn "đã gửi thành công" giả lập bằng JS, chưa gửi đi đâu cả. Để bật gửi thật sau khi deploy, làm theo đúng khối comment ngay phía trên thẻ `<form>` trong `index.html`:

1. Thêm `data-netlify="true"` và `netlify-honeypot="bot-field"` vào thẻ `<form>`.
2. Bỏ comment 2 dòng input ẩn ngay bên dưới (`form-name` + trường chống bot `bot-field`).
3. Trong `js/main.js`, tìm handler `submit` của `#bookingForm` và bỏ dòng `e.preventDefault();` (hoặc thay bằng `fetch` tới `/` nếu muốn giữ trải nghiệm không reload trang).
4. Redeploy — Netlify tự nhận diện form lúc build, submissions xem trong Netlify dashboard → **Forms**, có thể bật email notification tại đó.

## Palette

| Token | Màu |
|-------|-----|
| gold (accent) | `#D4B795` |
| ink | `#1E1E1E` |
| paper (bg) | `#F3EEE6` |
| white | `#FFFFFF` |

Font: **Be Vietnam Pro** (Google Fonts).

## Trước khi public

- **Social links trong Footer** (Instagram/Facebook/TikTok) đang là link `#` placeholder — thay bằng URL thật trong `index.html` trước khi deploy.
- Thông tin liên hệ (hotline `038 982 3089`, email `contact@movestudio.vn`, địa chỉ 110 phố Yên Phụ, Tây Hồ) và tên huấn luyện viên là dữ liệu thật lấy từ bộ nhận diện Move Studio sẵn có — kiểm tra lại còn đúng trước khi lên production.
- Lịch tập trong section **Lịch tập mẫu** là dữ liệu mẫu minh hoạ, không phải lịch thật.
- Xem mục "Bật form gửi email" ở trên trước khi coi form đặt lịch là hoàn chỉnh.
