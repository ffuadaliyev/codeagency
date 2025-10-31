# Netlify-ə Deploy Etmək

Bu qısa bələdçi Code Agency vebsaytını Netlify-ə deploy etmək üçündür.

## 🚀 Metod 1: GitHub ilə (Tövsiyə olunur)

### 1. Git Repository Yaradın

```bash
# Repo-nu initialize edin
git init

# Bütün faylları əlavə edin
git add .

# İlk commit
git commit -m "Initial commit - Code Agency website"
```

### 2. GitHub-a Push Edin

```bash
# GitHub-da yeni repo yaradın (codeagency), sonra:
git remote add origin https://github.com/USERNAME/codeagency.git
git branch -M main
git push -u origin main
```

### 3. Netlify-də Deploy

1. **Netlify-ə daxil olun**: [app.netlify.com](https://app.netlify.com)
2. **"Add new site"** → **"Import an existing project"**
3. **GitHub** seçin və repo-nu seçin (codeagency)
4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.17.0 (Environment variables-da)

5. **Environment Variables** (Settings → Environment variables):
   ```
   NODE_VERSION = 18.17.0
   NEXT_PUBLIC_SITE_URL = https://codeagency.az
   ```

6. **"Deploy site"** düyməsinə basın

### 4. Custom Domain (Əgər var)

1. Netlify dashboard → **Domain settings**
2. **"Add custom domain"**
3. `codeagency.az` daxil edin
4. DNS records-u yeniləyin:
   - A record: Netlify IP
   - CNAME record: `www` → netlify subdomain
5. SSL sertifikat avtomatik aktivləşəcək

---

## 🔧 Metod 2: Netlify CLI ilə

### 1. Netlify CLI Quraşdırın

```bash
npm install -g netlify-cli
```

### 2. Login Edin

```bash
netlify login
```

### 3. Deploy Edin

```bash
# İlk dəfə
netlify init

# Build və deploy
npm run build
netlify deploy --prod
```

---

## 📋 Build Yoxlaması

Deploy etməzdən əvvəl lokal build test edin:

```bash
npm run build
npm run start
```

Brauzerədə açın: http://localhost:3000

---

## ⚙️ Environment Variables

Netlify dashboard-da əlavə edin (lazım olduqda):

```
NODE_VERSION=18.17.0
NEXT_PUBLIC_SITE_URL=https://codeagency.az
```

Gələcəkdə əlavə ediləcək:
- `CONTACT_EMAIL`
- `SMTP_*` (e-poçt üçün)
- `NEXT_PUBLIC_GA_ID` (Analytics)

---

## 🔍 Deploy Sonrası Yoxlama

1. **SSL**: HTTPS işləyirmi?
2. **SEO**: Sitemap `/sitemap.xml` əlçatandırmı?
3. **Robots**: `/robots.txt` düzgündürmü?
4. **Səhifələr**: Bütün səhifələr açılırmı?
5. **Responsive**: Mobil cihazlarda test edin
6. **Performans**: Lighthouse test edin (95+ target)

---

## 🐛 Troubleshooting

### Build uğursuz olarsa:

1. **Node versiyası**: Environment variables-da `NODE_VERSION=18.17.0`
2. **Dependencies**: `package-lock.json` commit edilib?
3. **Build logs**: Netlify dashboard-da logları yoxlayın

### 404 xətası:

- `netlify.toml` faylı düzgün konfiqurasiya olunub?
- Redirects düzgün işləyirmi?

### Şəkillər yüklənmirsə:

- `public/images/` qovluğunda şəkillər varmı?
- Next.js Image komponent düzgün path istifadə edirmi?

---

## 📞 Əlaqə

Problemlərlə qarşılaşsanız:
- Netlify Support: [answers.netlify.com](https://answers.netlify.com)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

## ✅ Hazırsınız!

Deploy uğurlu olduqdan sonra:
- Custom domain əlavə edin
- SSL aktiv edin
- Analytics qoşun
- Form handlers konfiqurasiya edin
- Performance monitorinq qurun

🎉 Vebsaytınız live-dır!
