# Course Access Protection - MVP Setup

## Overview

Simple password protection for course.sugarsaint.bio that accepts any password starting with "SUGAR".

## How It Works

1. **Login Page:** `/course/login`
2. **Password Check:** Any password starting with "SUGAR" (case-insensitive) grants access
3. **Session:** 30-day HTTP-only cookie
4. **Protected Routes:** All `/course/*` routes except `/course/login`

## Usage

### For Your Customers

Tell them their password is one of:
- `SUGAR`
- `SUGAR123`
- `SUGARsaint`
- `SUGAR` + anything

You can give each customer a unique suffix (e.g., `SUGAR001`, `SUGAR002`) to track who's using what, even though any variation works.

### Testing Locally

```bash
npm run dev
```

Then visit:
1. http://localhost:3000/course/dashboard (redirects to login)
2. http://localhost:3000/course/login (enter any password starting with SUGAR)
3. Successfully logged in → redirected to dashboard

### File Structure

```
app/
├── course/
│   ├── login/page.tsx          # Login form
│   └── dashboard/page.tsx      # Protected course content
├── api/
│   └── course/
│       ├── auth/route.ts       # Password validation
│       └── logout/route.ts     # Logout handler
middleware.ts                    # Route protection
```

## Security Features

✅ HTTP-only cookies (can't be stolen by JavaScript)
✅ 30-day session expiration
✅ Case-insensitive password check
✅ Secure flag in production
✅ SameSite cookie protection

## Limitations (MVP Trade-offs)

⚠️ All customers share the same password prefix
⚠️ No individual user tracking (yet)
⚠️ Password will likely be shared online
⚠️ Can't revoke access without changing the password system

**Perfect for MVP validation. Upgrade after ~10 sales.**

## Upgrade Path (After 10 Sales)

1. **Phase 2:** License key system (unique codes per customer)
2. **Phase 3:** Full authentication with Supabase (individual accounts)

## For Deployment

When deploying to course.sugarsaint.bio:

1. Deploy this Next.js app to Vercel/Netlify
2. Point subdomain `course.sugarsaint.bio` to deployment
3. Ensure `NODE_ENV=production` is set
4. Test the flow in production

## What Customers See

1. Purchase on `sugarsaint.bio`
2. Receive email: "Your course password is: SUGAR"
3. Visit `course.sugarsaint.bio` → auto-redirect to login
4. Enter password → access granted for 30 days

---

**Built:** 2025-10-27
**Status:** MVP Ready
**Next Step:** Add actual course content to dashboard
