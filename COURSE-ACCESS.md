# Course Access Protection - MVP Setup

## Overview

Simple password protection for the SugarSaint course that accepts any password starting with "SUGAR".

## How It Works

1. **Login Page:** `sugarsaint.bio/course` (marketing website /course route)
2. **Password Check:** Any password starting with "SUGAR" (case-insensitive) grants access
3. **Redirect:** After successful login, users are redirected to `course.sugarsaint.bio` (Mintlify docs)
4. **Session:** 30-day HTTP-only cookie (not currently used, but available for future features)

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
1. http://localhost:3000/course (redirects to login)
2. http://localhost:3000/course/login (enter any password starting with SUGAR)
3. Successfully logged in → redirected to course.sugarsaint.bio

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

## Configuration

**Mintlify URL is already configured:**

The `lib/config.ts` file is set to redirect to `https://course.sugarsaint.bio` after login:

```typescript
export const MINTLIFY_URL = 'https://course.sugarsaint.bio'
```

## For Deployment

This app is the marketing website (sugarsaint.bio):

1. Already deployed to sugarsaint.bio
2. The `/course` route provides password protection
3. After login, redirects to course.sugarsaint.bio (Mintlify)
4. Just deploy updates to existing Vercel project
5. Test at sugarsaint.bio/course

## What Customers See

1. Purchase on `sugarsaint.bio`
2. Receive email: "Your course password is: SUGAR"
3. Visit `sugarsaint.bio/course` → see login page
4. Enter password → automatically redirected to `course.sugarsaint.bio` (Mintlify docs)
5. Can re-login anytime at `sugarsaint.bio/course` with the same password

---

**Built:** 2025-10-27
**Status:** MVP Ready
**Next Step:** Add actual course content to dashboard
