# LPM Lensa Media - Landing Page

Landing page modern dan responsif untuk LPM Lensa Media, organisasi media informasi mahasiswa.

## 🚀 Fitur

- **Design Modern**: Menggunakan gradient dan glassmorphism effect
- **Responsif**: Optimal di desktop, tablet, dan mobile
- **Interaktif**: Animasi dan efek hover yang menarik
- **6 Layanan Utama**: Website berita, majalah, struktur organisasi, media partner, join organisasi, dan support organisasi
- **Social Media Integration**: Email, Instagram, WhatsApp, YouTube, dan Facebook
- **Bootstrap 5**: Framework CSS modern untuk layout yang konsisten

## 📁 Struktur Folder

```
landing-page-lensa-media-4/
├── index.html                 # File HTML utama
├── assets/                    # Folder aset
│   ├── css/
│   │   └── style.css         # File CSS custom
│   ├── js/
│   │   └── script.js         # File JavaScript
│   └── images/
│       └── logo.png          # Logo organisasi (perlu ditambahkan)
├── README.md                 # Dokumentasi ini
└── .gitignore               # File yang diabaikan Git
```

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur halaman web
- **CSS3**: Styling dengan animasi dan efek modern
- **JavaScript (ES6+)**: Interaktivitas dan animasi
- **Bootstrap 5**: Framework CSS untuk layout responsif
- **Font Awesome**: Ikon-ikon yang digunakan

## 🚀 Cara Deploy ke Publik

### 1. GitHub Pages (Gratis)

```bash
# 1. Buat repository di GitHub
# 2. Upload semua file ke repository
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/repository-name.git
git push -u origin main

# 3. Aktifkan GitHub Pages di Settings > Pages
# 4. Website akan tersedia di: https://username.github.io/repository-name
```

### 2. Netlify (Gratis)

```bash
# 1. Upload folder ke Netlify
# 2. Drag & drop folder ke netlify.com
# 3. Website akan tersedia di: https://random-name.netlify.app
# 4. Bisa custom domain jika diperlukan
```

### 3. Vercel (Gratis)

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy dari folder
vercel

# 3. Ikuti instruksi di terminal
# 4. Website akan tersedia di: https://project-name.vercel.app
```

### 4. Firebase Hosting (Gratis)

```bash
# 1. Install Firebase CLI
npm install -g firebase-tools

# 2. Login ke Firebase
firebase login

# 3. Inisialisasi project
firebase init hosting

# 4. Deploy
firebase deploy
```

### 5. Shared Hosting (Berbayar)

1. Upload semua file ke folder `public_html` atau `www`
2. Pastikan `index.html` ada di root folder
3. Website akan tersedia di domain yang dibeli

## 📱 Responsivitas

Website sudah dioptimalkan untuk berbagai ukuran layar:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎨 Customization

### Mengubah Logo
1. Ganti file `assets/images/logo.png` dengan logo organisasi
2. Pastikan ukuran minimal 120x120px
3. Format PNG dengan background transparan

### Mengubah Warna
Edit file `assets/css/style.css`:
```css
/* Warna utama */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Warna sekunder */
color: #2c3e50;
```

### Mengubah Link Social Media
Edit file `index.html`:
```html
<!-- Instagram -->
<a href="https://instagram.com/username-anda" class="social-link" title="Instagram" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

## 🔧 Pengembangan Lokal

1. **Clone repository**:
```bash
git clone https://github.com/username/repository-name.git
cd repository-name
```

2. **Buka di browser**:
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx serve .

# Menggunakan PHP
php -S localhost:8000
```

3. **Akses di browser**: `http://localhost:8000`

## 📋 Checklist Deployment

- [ ] Logo organisasi sudah ditambahkan
- [ ] Link social media sudah diupdate
- [ ] Email dan WhatsApp sudah diupdate
- [ ] Testing di berbagai browser
- [ ] Testing di mobile device
- [ ] SEO meta tags sudah dioptimasi
- [ ] Performance sudah dioptimasi

## 🎯 SEO Optimization

Website sudah dioptimasi untuk SEO dengan:

- Meta tags yang lengkap
- Semantic HTML structure
- Alt text untuk gambar
- Responsive design
- Fast loading time

## 🔒 Keamanan

- HTTPS recommended untuk production
- Validasi input user
- Sanitasi data
- Regular security updates

## 📞 Support

Untuk pertanyaan atau bantuan:
- Email: info@lensamedia.com
- WhatsApp: +62 812-3456-7890
- Instagram: @lensamedia

## 📄 License

© 2024 LPM Lensa Media. All rights reserved.

---

**Dibuat dengan ❤️ untuk LPM Lensa Media**
