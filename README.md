# CV Click Builder + Secure Owner Admin Panel

A production-ready Multi-step CV Builder with a secure management panel for recruiters/owners.

## 🚀 Features

### Candidate Experience
- **9-Step Wizard**: Sleek, mobile-first form for complete profile building.
- **Auto-Experience Calculation**: Calculates total professional experience (years/months) excluding overlapping periods.
- **File Upload**: Submit original CV (PDF/DOCX) with local storage support.
- **Secure Sharing**: Each candidate gets a private shareable link to their structured profile.

### Admin/Owner Panel
- **Secure Login**: JWT-based authentication with bcrypt password hashing.
- **Advanced Dashboard**: Filter candidates by position, status, education level, and years of experience.
- **Full Candidate Management**:
  - Update recruitment status (New, Reviewing, Contacted, etc.).
  - Add internal notes and interview feedback.
  - Download original uploaded CV files.
- **Bulk Export**: Export filtered candidate data to **XCEL (XLSX)** for offline processing.

## 🛠️ Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (Premium UI)
- **Prisma ORM** + **PostgreSQL**
- **Lucide React** (Icons)
- **SheetJS** (Excel Export)
- **Zod** (Validation)
- **JWT & bcryptjs** (Security)

## 📦 Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment**:
   Copy `.env.example` to `.env` and fill in:
   - `DATABASE_URL`: Your PostgreSQL connection string.
   - `ADMIN_EMAIL` & `ADMIN_PASSWORD`: For the initial seed.
   - `JWT_SECRET`: A random secure string.

3. **Database Setup**:
   ```bash
   npx prisma generate
   ```

4. **Run Migrations & Seed**:
   ```bash
   npx prisma db push
   npm run seed
   ```

5. **Start Development Server**:
   ```bash
   npm run dev -- -p 3001
   ```

## 📂 Project Structure
- `src/app/candidate`: Public builder and share pages.
- `src/app/admin`: Owner panel (Dashboard, Detail views).
- `src/app/api`: Backend endpoints (Auth, Candidates, Export, Files).
- `src/components/wizard`: Multi-step form logic.
- `src/lib`: Shared utilities (Auth, DB, Storage, Experience Logic).
- `uploads/`: Local directory for candidate files.

## 🛡️ Security
- Protected admin routes via Next.js Middleware.
- Rate limiting on submission endpoints.
- Input validation with Zod.
- Secure token-based access for candidate share pages.
