# Folder Maintenance - LPM Lensa Media

## 📁 Struktur Folder

```
maintenance/
├── README.md              ← Dokumentasi ini
├── index.html             ← Halaman utama maintenance (overview semua layanan)
├── majalah.html           ← Halaman maintenance Majalah
├── struktur.html          ← Halaman maintenance Struktur Organisasi
├── media-partner.html     ← Halaman maintenance Media Partner
├── join.html              ← Halaman maintenance Join Organisasi
├── support.html           ← Halaman maintenance Support Organisasi
└── css/
    └── maintenance.css    ← File CSS terpisah untuk semua halaman
```

## 🎯 Keuntungan Struktur Baru

### ✅ **Di Luar Folder (Clean & Terstruktur):**
- Hanya ada 1 folder `maintenance/` yang terlihat
- Tidak ada file maintenance yang berceceran di root
- Struktur proyek terlihat rapi dan profesional
- Mudah diorganisir dan dikelola

### ✅ **Di Dalam Folder (Terstruktur & Efisien):**
- Semua file maintenance dalam 1 tempat
- CSS terpisah dan reusable
- Konsistensi design di semua halaman
- Mudah maintenance dan update

## 🚀 Fitur Halaman Maintenance

### **1. Halaman Index (`index.html`)**
- **Overview semua layanan** dalam pengembangan
- **Status pengembangan** dengan estimasi waktu
- **Grid layout** yang responsive
- **Navigasi mudah** ke setiap halaman detail

### **2. Halaman Detail (masing-masing layanan)**
- **Animasi ikon yang berbeda** untuk setiap layanan
- **Progress bar** yang menunjukkan status
- **Informasi lengkap** tentang fitur yang akan hadir
- **Kontak sementara** untuk komunikasi

### **3. CSS Terpisah (`maintenance.css`)**
- **Animasi yang konsisten** (pulse, bounce, shake, rotate, heartbeat)
- **Design system** yang unified
- **Responsive design** untuk semua ukuran layar
- **Easily customizable** untuk perubahan design

## 🎨 Animasi Ikon

| Layanan | Ikon | Animasi | Keterangan |
|---------|------|---------|------------|
| **Majalah** | 📖 | `pulse` | Efek berdetak |
| **Struktur** | 🗂️ | `bounce` | Efek melompat |
| **Media Partner** | 🤝 | `shake` | Efek bergetar |
| **Join** | 👥 | `rotate` | Efek berputar |
| **Support** | ❤️ | `heartbeat` | Efek detak jantung |

## 📱 Responsive Design

- **Mobile-first approach**
- **Grid layout** yang adaptif
- **Touch-friendly** untuk mobile
- **Optimized** untuk semua ukuran layar

## 🔗 Link Navigation

### **Dari Beranda:**
- `maintenance/majalah.html`
- `maintenance/struktur.html`
- `maintenance/media-partner.html`
- `maintenance/join.html`
- `maintenance/support.html`

### **Dari Halaman Maintenance:**
- `../index.html` (kembali ke beranda)
- `index.html` (ke halaman overview maintenance)

## 🛠️ Cara Maintenance

### **Update CSS:**
1. Edit file `css/maintenance.css`
2. Perubahan otomatis berlaku di semua halaman

### **Update Konten:**
1. Edit file HTML yang sesuai
2. Semua halaman menggunakan CSS yang sama

### **Tambah Layanan Baru:**
1. Buat file HTML baru di folder `maintenance/`
2. Tambahkan link di `maintenance/index.html`
3. Update link di `../index.html`

## 📋 Checklist Pengembangan

- [x] ✅ Folder structure dibuat
- [x] ✅ CSS terpisah dan unified
- [x] ✅ Semua halaman maintenance
- [x] ✅ Halaman index overview
- [x] ✅ Link navigation diupdate
- [x] ✅ Responsive design
- [x] ✅ Animasi yang konsisten

## 🎯 Keunggulan Sistem Ini

1. **Clean Structure** - Hanya 1 folder yang terlihat
2. **Easy Maintenance** - CSS terpisah, mudah update
3. **Consistent Design** - Semua halaman terlihat sama
4. **Professional Look** - Struktur yang rapi dan terorganisir
5. **Scalable** - Mudah tambah layanan baru

---

**Dibuat oleh**: Tim Development LPM Lensa Media  
**Tanggal**: 2024  
**Versi**: 2.0 - Struktur Folder
