# 🚀 Panduan Deployment LPM Lensa Media

Panduan lengkap untuk mendeploy website LPM Lensa Media ke berbagai platform hosting.

## 📋 Persiapan Sebelum Deploy

1. **Siapkan Logo**
   - Tambahkan file `logo.png` ke folder `assets/images/`
   - Pastikan ukuran minimal 120x120px
   - Format PNG dengan background transparan

2. **Update Informasi Kontak**
   - Edit file `index.html`
   - Update email, WhatsApp, dan social media links
   - Sesuaikan dengan informasi organisasi

3. **Test Lokal**
   ```bash
   # Buka terminal di folder project
   python -m http.server 8000
   # atau
   npx serve . -p 8000
   ```

## 🌐 Platform Deployment

### 1. GitHub Pages (Gratis & Mudah)

**Langkah-langkah:**
1. Buat repository baru di GitHub
2. Upload semua file ke repository
3. Aktifkan GitHub Pages di Settings

```bash
# Di terminal
git init
git add .
git commit -m "Initial commit - LPM Lensa Media Landing Page"
git branch -M main
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
```

**Aktivasi GitHub Pages:**
1. Buka repository di GitHub
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Save

**URL Website:** `https://username.github.io/repository-name`

### 2. Netlify (Gratis & Otomatis)

**Cara 1: Drag & Drop**
1. Buka [netlify.com](https://netlify.com)
2. Drag folder project ke area deploy
3. Website langsung online

**Cara 2: Connect GitHub**
1. Login ke Netlify
2. New site from Git
3. Connect GitHub repository
4. Deploy otomatis setiap update

**Fitur:**
- Custom domain gratis
- HTTPS otomatis
- Deploy otomatis dari Git
- Form handling

### 3. Vercel (Gratis & Cepat)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Ikuti instruksi di terminal
```

**Fitur:**
- Deploy dalam hitungan detik
- Custom domain
- Analytics
- Edge functions

### 4. Firebase Hosting (Gratis & Google)

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inisialisasi project
firebase init hosting

# Deploy
firebase deploy
```

**Fitur:**
- CDN global
- SSL otomatis
- Custom domain
- Analytics

### 5. Shared Hosting (Berbayar)

**Langkah-langkah:**
1. Beli hosting dan domain
2. Upload file via FTP/cPanel
3. Letakkan semua file di folder `public_html`
4. Pastikan `index.html` di root folder

**Provider Populer:**
- Hostinger
- Niagahoster
- IDCloudHost
- DigitalOcean

## 🔧 Konfigurasi Lanjutan

### Custom Domain

**GitHub Pages:**
1. Settings → Pages → Custom domain
2. Masukkan domain
3. Tambahkan CNAME record di DNS provider

**Netlify:**
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records

### SSL/HTTPS

- **GitHub Pages:** Otomatis
- **Netlify:** Otomatis
- **Vercel:** Otomatis
- **Firebase:** Otomatis
- **Shared Hosting:** Aktifkan di cPanel

### Performance Optimization

1. **Kompres Gambar**
   ```bash
   # Install ImageOptim atau TinyPNG
   # Kompres logo.png sebelum upload
   ```

2. **Minify CSS/JS**
   ```bash
   # Gunakan tools online atau build tools
   # CSS dan JS sudah dioptimasi
   ```

3. **Enable Gzip**
   - Aktifkan di hosting provider
   - Otomatis di platform modern

## 📱 Testing

### Browser Testing
- Chrome
- Firefox
- Safari
- Edge

### Device Testing
- Desktop (1200px+)
- Tablet (768px-1199px)
- Mobile (320px-767px)

### Performance Testing
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

## 🔍 SEO Setup

### Meta Tags (Sudah ada di index.html)
```html
<meta name="description" content="LPM Lensa Media - Media informasi mahasiswa dan berita kampus maupun luar kampus">
<meta name="keywords" content="LPM, Lensa Media, media mahasiswa, berita kampus">
<meta name="author" content="LPM Lensa Media">
```

### Google Analytics
1. Buat Google Analytics account
2. Tambahkan tracking code ke `index.html`
3. Monitor traffic dan performance

### Sitemap
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 🚨 Troubleshooting

### Website Tidak Muncul
1. Cek file `index.html` ada di root
2. Pastikan tidak ada error di console
3. Cek DNS settings
4. Tunggu propagasi DNS (24-48 jam)

### Logo Tidak Muncul
1. Pastikan file `logo.png` ada di `assets/images/`
2. Cek path file di HTML
3. Fallback akan muncul jika logo tidak ada

### Mobile Tidak Responsif
1. Cek viewport meta tag
2. Test di berbagai ukuran layar
3. Cek CSS media queries

## 📞 Support

Jika mengalami masalah:
1. Cek dokumentasi platform hosting
2. Cek console browser untuk error
3. Hubungi support hosting provider
4. Email: info@lensamedia.com

## ✅ Checklist Deployment

- [ ] Logo sudah ditambahkan
- [ ] Informasi kontak sudah diupdate
- [ ] Test di browser lokal
- [ ] Upload ke hosting
- [ ] Test di berbagai device
- [ ] Setup custom domain (opsional)
- [ ] Setup Google Analytics (opsional)
- [ ] Test performance
- [ ] Backup file

---

**Selamat! Website LPM Lensa Media sudah online! 🎉**
