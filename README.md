# 🍜 Mì Cay Bosan - Trang Tuyển Dụng

Trang web tuyển dụng cho chuỗi nhà hàng Mì Cay Bosan, được xây dựng với React + Vite.

## ✨ Tính năng

- 🎨 Giao diện hiện đại, đẹp mắt với hiệu ứng animation
- 📱 Responsive hoàn hảo trên mọi thiết bị
- 🔥 Hiển thị các vị trí tuyển dụng với chi tiết đầy đủ
- 📝 Form ứng tuyển tích hợp
- ⚡ Tối ưu hiệu năng với Vite

## 🛠️ Công nghệ sử dụng

- **React 18** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🚀 Chạy dự án locally

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/mi-cay-bosan-recruitment.git
cd mi-cay-bosan-recruitment

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

## 📦 Deploy lên GitHub Pages

### Bước 1: Tạo Repository trên GitHub

1. Truy cập [github.com](https://github.com) và đăng nhập
2. Click nút **"New"** hoặc **"+"** → **"New repository"**
3. Đặt tên repository: `mi-cay-bosan-recruitment`
4. Chọn **Public**
5. **KHÔNG** chọn "Initialize this repository with a README"
6. Click **"Create repository"**

### Bước 2: Cài đặt Git (nếu chưa có)

Tải và cài đặt Git từ: https://git-scm.com/download/win

Sau khi cài xong, mở **Git Bash** hoặc **PowerShell** và cấu hình:

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

### Bước 3: Push code lên GitHub

Mở terminal/PowerShell tại thư mục dự án và chạy các lệnh sau:

```bash
# Khởi tạo git repository
git init

# Thêm tất cả files
git add .

# Commit đầu tiên
git commit -m "Initial commit - Mì Cay Bosan Recruitment Page"

# Thêm remote (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/mi-cay-bosan-recruitment.git

# Đổi tên branch sang main
git branch -M main

# Push lên GitHub
git push -u origin main
```

### Bước 4: Cấu hình GitHub Pages

1. Vào repository trên GitHub
2. Click **Settings** → **Pages** (menu bên trái)
3. Trong phần **"Build and deployment"**:
   - **Source**: Chọn **"GitHub Actions"**
4. Workflow sẽ tự động chạy và deploy website

### Bước 5: Truy cập website

Sau khi deploy thành công (khoảng 1-2 phút), website sẽ có địa chỉ:

```
https://YOUR_USERNAME.github.io/mi-cay-bosan-recruitment/
```

## ⚠️ Lưu ý quan trọng

### Đổi tên repository

Nếu bạn đặt tên repository khác `mi-cay-bosan-recruitment`, hãy cập nhật file `vite.config.js`:

```javascript
export default defineConfig({
    // ...
    base: '/TEN-REPOSITORY-CUA-BAN/',
    // ...
})
```

### Cập nhật thông tin liên hệ

Thông tin liên hệ hiện tại:
- **Địa chỉ**: Số 295 Tô Hiệu, Nghĩa Đô, Hà Nội
- **Hotline**: 0987 918 119

Để thay đổi, chỉnh sửa file `src/components/Footer.jsx`

## 📁 Cấu trúc dự án

```
mi-cay-bosan-recruitment/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Header với logo
│   │   ├── Hero.jsx        # Banner chính
│   │   ├── WhyJoinUs.jsx   # Tại sao gia nhập
│   │   ├── JobOpenings.jsx # Danh sách việc làm
│   │   ├── ApplicationForm.jsx  # Form ứng tuyển
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── hinh-nen.jpg        # Ảnh hero background
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 📞 Liên hệ

- **Địa chỉ**: Số 295 Tô Hiệu, Nghĩa Đô, Hà Nội
- **Hotline**: 0987 918 119

---

Made with ❤️ for Mì Cay Bosan Team
