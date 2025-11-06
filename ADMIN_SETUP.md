# Admin Panel Setup Guide

## ⚠️ Important: Database Configuration

The admin panel currently uses **SQLite** which works for local development but **will NOT work on Vercel** (serverless environment).

For production deployment, you need to configure a cloud database.

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 3. Run Database Migrations
```bash
npx prisma migrate dev
```

### 4. Seed Default Admin User
```bash
npx tsx prisma/seed.ts
```

### 5. Start Development Server
```bash
npm run dev
```

### 6. Access Admin Panel
- URL: `http://localhost:3000/admin/login`
- Username: `admin`
- Password: `admin123`

**⚠️ Change the default password after first login!**

## Production Deployment (Vercel)

### Option 1: Vercel Postgres (Recommended)

1. **Create Vercel Postgres Database**
   - Go to your Vercel project
   - Navigate to "Storage" tab
   - Click "Create Database"
   - Select "Postgres"

2. **Update Environment Variables**
   Add to your Vercel project settings:
   ```
   DATABASE_URL="postgresql://..."  (from Vercel Postgres)
   JWT_SECRET="your-secure-random-string"
   ```

3. **Update Prisma Schema**
   In `prisma/schema.prisma`, change:
   ```prisma
   datasource db {
     provider = "postgresql"  // Changed from "sqlite"
     url      = env("DATABASE_URL")
   }
   ```

4. **Create New Migration**
   ```bash
   npx prisma migrate dev --name switch_to_postgres
   ```

5. **Deploy to Vercel**
   ```bash
   git add .
   git commit -m "Switch to PostgreSQL for production"
   git push
   ```

6. **Run Migrations on Vercel**
   After deployment, run in Vercel terminal or locally:
   ```bash
   npx prisma migrate deploy
   ```

7. **Seed Admin User**
   ```bash
   npx tsx prisma/seed.ts
   ```

### Option 2: Supabase (Alternative)

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create new project
   - Get connection string

2. **Update Environment Variables**
   ```
   DATABASE_URL="postgresql://postgres:[PASSWORD]@[PROJECT].supabase.co:5432/postgres"
   JWT_SECRET="your-secure-random-string"
   ```

3. Follow steps 3-7 from Option 1

## Admin Panel Features

### ✅ Completed
- **Services Management**: Full CRUD interface
  - Create, read, update, delete services
  - Multilingual support (AZ/EN/RU)
  - Features management
  - Ordering and categorization

### 🚧 Placeholder Pages (Need Implementation)
- Projects Management
- Blog Posts Management
- Process Steps Management
- About & Team Management
- FAQs Management
- Company Values Management
- Form Submissions Viewer
- Page Content Editor

Each placeholder page shows what features will be available. Implementation needed for full CRUD functionality.

## Security Notes

1. **Change Default Password**: The default admin password is `admin123` - change it immediately!

2. **JWT Secret**: Use a strong, random string for `JWT_SECRET` in production

3. **HTTPS Only**: Admin panel should only be accessed via HTTPS in production

4. **Database Security**: Ensure your production database has proper access controls

## Troubleshooting

### Build Error on Vercel
If you see Prisma Client errors:
- Ensure `postinstall` script is in package.json
- Check DATABASE_URL is set in Vercel environment variables
- Verify database provider matches in schema.prisma

### Cannot Login
- Check JWT_SECRET is set
- Verify database is accessible
- Ensure admin user was seeded

### Database Not Found
- Run migrations: `npx prisma migrate deploy`
- Run seed script: `npx tsx prisma/seed.ts`

## Next Steps

To implement full admin functionality for other sections:
1. Follow the Services implementation pattern
2. Create API routes in `app/api/admin/[section]`
3. Create admin pages in `app/admin/dashboard/[section]`
4. Implement forms and list views

Each section needs:
- `route.ts` - GET (list) and POST (create)
- `[id]/route.ts` - GET (single), PUT (update), DELETE
- `page.tsx` - List view
- `new/page.tsx` - Create form
- `[id]/page.tsx` - Edit form
