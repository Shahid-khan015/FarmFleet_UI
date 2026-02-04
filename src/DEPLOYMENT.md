# AgriTrack - Vercel Deployment

This application is built with Figma Make and is ready for Vercel deployment.

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Option 1: Direct Deployment (Recommended)

Since this is a Figma Make application, it doesn't need a traditional build process:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect the settings
   - Click "Deploy"

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## Demo Credentials

The login screen shows three quick-login buttons:

| Role | Mobile | Password |
|------|--------|----------|
| Farmer | 9876543210 | farmer123 |
| Operator | 8765432109 | operator123 |
| Owner | 7654321098 | owner123 |

## Project Structure

- `/App.tsx` - Main app component with React Router
- `/routes.ts` - All route definitions
- `/components/` - All UI components organized by role
  - `auth/` - Login and registration
  - `farmer/` - Farmer role screens
  - `operator/` - Operator role screens
  - `owner/` - Owner role screens
  - `system/` - Shared system screens

## Features

### Three User Roles
1. **Farmer** - Monitor fields, approve work, view alerts
2. **Operator** - Manage jobs, control work, monitor telemetry
3. **Owner** - Manage fleet, track machines, view reports

### Key Features
- Real-time location tracking
- Live telemetry monitoring
- Boundary crossing alerts
- Work approval/dispute system
- Fleet management
- Comprehensive reporting
- AI-powered decision support

## Technology

- React with TypeScript
- React Router for navigation
- Tailwind CSS v4 for styling
- Lucide React for icons
- Figma Make build system

## Environment Variables

No environment variables are required for this demo application.

## Support

For issues or questions, please check the main README.md file.
