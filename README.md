# Code Agency Website

Premium korporativ vebsayt - **Code Agency** üçün AI və avtomatlaşdırma həlləri şirkəti.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/codeagency)

[📖 Deployment Guide](DEPLOYMENT.md) | [🌐 Live Demo](#)

## 🚀 Texnologiyalar

- **Next.js 14** - App Router
- **TypeScript** - Tip təhlükəsizliyi
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animasiyalar
- **Lucide Icons** - İkonlar
- **shadcn/ui** - UI komponentləri

## 📋 Xüsusiyyətlər

- ✅ Tam responsive dizayn (mobil-öncə)
- ✅ SEO optimallaşdırılmış (sitemap, robots.txt, metadata)
- ✅ Aksesibillik (ARIA, semantic HTML, keyboard navigation)
- ✅ Premium dark theme dizayn
- ✅ İki dilli dəstək (AZ/EN - placeholder)
- ✅ Framer Motion animasiyaları
- ✅ Performans optimallaşdırılmış
- ✅ TypeScript tip təhlükəsizliyi

## 📁 Struktur

```
codeagency/
├── app/                    # Next.js app directory
│   ├── about/             # Haqqımızda səhifəsi
│   ├── blog/              # Blog səhifəsi
│   ├── contact/           # Əlaqə səhifəsi
│   ├── privacy/           # Məxfilik siyasəti
│   ├── process/           # Proses səhifəsi
│   ├── projects/          # Layihələr səhifəsi
│   ├── quote/             # Təklif al səhifəsi
│   ├── services/          # Xidmətlər səhifəsi
│   ├── terms/             # İstifadə şərtləri
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Ana səhifə
│   ├── not-found.tsx      # 404 səhifəsi
│   ├── sitemap.ts         # Sitemap
│   ├── robots.ts          # Robots.txt
│   └── globals.css        # Global stillər
├── components/
│   ├── ui/                # shadcn/ui komponentləri
│   ├── layout/            # Header, Footer
│   ├── sections/          # Səhifə bölmələri
│   └── forms/             # Form komponentləri
├── lib/
│   └── utils.ts           # Utility funksiyalar
└── public/                # Statik fayllar

```

## 🛠️ Quraşdırma

### 1. Dependencies quraşdırın

```bash
npm install
# və ya
yarn install
```

### 2. Development server-i başladın

```bash
npm run dev
# və ya
yarn dev
```

Brauzerinizdə [http://localhost:3000](http://localhost:3000) açın.

### 3. Build

```bash
npm run build
npm run start
```

## 🎨 Dizayn Sistemi

### Rəng Paleti

- **Carbon (Əsas fon)**: `#0B0E11`
- **Carbon Light**: `#12161B`
- **Carbon Border**: `#1F252D`
- **Gold (Aksent)**: `#C6A15B`
- **Stone Light (Mətn)**: `#E7E9EE`
- **Stone (Sekundar mətn)**: `#9AA4B2`

### Şriftlər

- **Serif (Başlıqlar)**: Playfair Display
- **Sans-serif (Mətn)**: Inter

## 📄 Səhifələr

### Əsas Səhifələr

- `/` - Ana səhifə (Hero, Xidmətlər, Dəyərlər, Proses, FAQ, CTA)
- `/services` - Xidmətlər (6 kateqoriya)
- `/projects` - Layihələr portfoliosu
- `/process` - İş prosesi metodologiyası
- `/about` - Haqqımızda
- `/blog` - Blog yazıları
- `/quote` - Təklif al formu
- `/contact` - Əlaqə formu

### Hüquqi

- `/privacy` - Məxfilik Siyasəti
- `/terms` - İstifadə Şərtləri

## 🔍 SEO

- **Sitemap**: `/sitemap.xml`
- **Robots**: `/robots.txt`
- **Metadata**: Hər səhifədə optimal title/description
- **Open Graph**: Social media paylaşım üçün
- **Schema.org**: Strukturlaşdırılmış data (gələcək təkmilləşdirmə)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performans

- **Code Splitting**: Route-level automatic
- **Image Optimization**: Next/Image
- **Font Optimization**: Google Fonts display=swap
- **CSS**: Tailwind JIT compiler

## 🔒 Təhlükəsizlik

- TypeScript tip yoxlaması
- Form validasiyası (client-side)
- Honeypot bot qoruması (placeholder)
- Secure headers (production üçün konfiqurasiya lazımdır)

## 🚧 Gələcək Təkmilləşdirmələr

- [ ] Admin panel (content management)
- [ ] Backend API və form handler
- [ ] Dil keçidi funksionallaşdırma
- [ ] Blog Markdown CMS inteqrasiyası
- [ ] Analitika (Google Analytics və ya alternativ)
- [ ] Newsletter abunəliyi
- [ ] Live chat/chatbot inteqrasiyası

## 📝 Məzmun Redaktəsi

Məzmunu dəyişmək üçün:

1. **Səhifə məzmunu**: `app/[page]/page.tsx` fayllarında birbaşa redaktə
2. **Komponent məzmunu**: `components/sections/` fayllarında
3. **Konfiqurasiya**: `lib/` və `app/layout.tsx`

## 🤝 Töhfə

Layihəyə töhfə vermək üçün:

1. Fork edin
2. Feature branch yaradın (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisenziya

© 2024 Code Agency. Bütün hüquqlar qorunur.

## 📞 Əlaqə

- **Website**: [codeagency.az](https://codeagency.az)
- **Email**: info@codeagency.az
- **Phone**: +994 (50) 123-45-67

---

**Premium həllər və innovasiya ilə hazırlanmışdır** ✨
