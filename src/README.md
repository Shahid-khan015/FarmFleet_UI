# AgriTrack - Agricultural Field Operations Monitor

A comprehensive mobile application UI for monitoring agricultural field operations, resolving wage disputes, tracking machines, viewing telemetry, and generating reports.

## Features

### Three User Roles

1. **Farmer** - Monitor field operations, track work, approve/dispute work
2. **Operator** - Manage jobs, control work, monitor telemetry, track earnings
3. **Owner** - Manage fleet, track machines, view reports, monitor telemetry

## Demo Credentials

### Quick Access

The application includes demo accounts for easy testing:

| Role | Mobile Number | Password | Features |
|------|--------------|----------|----------|
| **Farmer** | 9876543210 | farmer123 | Dashboard, Live Map, Alerts, Reports, Work Approval |
| **Operator** | 8765432109 | operator123 | Jobs, Work Control, Telemetry, Thresholds, Earnings |
| **Owner** | 7654321098 | owner123 | Fleet Management, Tracking, Reports, Telemetry |

## Application Structure

### Farmer Screens
- **Dashboard** - View active work and pending approvals
- **Live Map View** - Real-time tractor location with boundary visualization
- **Alerts** - Boundary crossing and overwork alerts
- **Work Reports** - History of completed operations
- **Work Approval** - Approve or dispute completed work

### Operator Screens
- **Dashboard** - Active and assigned jobs overview
- **Job Details** - View detailed job information
- **Work Control** - Start/pause/stop work operations
- **Telemetry** - Real-time machine data monitoring
- **Threshold Configuration** - Set alert thresholds
- **Earnings** - Work summary and payment tracking

### Owner Screens
- **Dashboard** - Fleet overview and active machines
- **Fleet Management** - Add/edit/delete tractors and implements
- **Machine Details** - View individual machine information
- **Live Fleet Tracking** - Real-time location of all machines
- **Telemetry Monitoring** - Real-time and historical data
- **Reports** - Field-wise, tractor-wise, and implement-wise reports

### System Features
- **Notifications** - Centralized alerts for all roles
- **Decision Support** - AI-powered tractor and implement recommendations

## Technology Stack

- **React** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Development

```bash
npm install
npm run dev
```

## Deployment

This application is configured for deployment on Vercel:

1. Connect your repository to Vercel
2. Deploy with default settings
3. The application will be live with all demo features

### Vercel Configuration

The `vercel.json` file is configured to handle client-side routing properly.

## Usage Guide

### For Testing

1. Open the application
2. Click on any of the three "Quick Login" buttons on the login screen
3. Explore role-specific features:
   - **Farmer**: See active work, track on map, manage approvals
   - **Operator**: Control work operations, monitor telemetry
   - **Owner**: Manage fleet, view comprehensive reports

### Navigation

- Each role has its own dashboard as the home screen
- Use the back button to navigate between screens
- Notifications are accessible from all dashboards
- Decision support is available for farmers

## Features Highlights

### Real-time Monitoring
- Live tractor location tracking
- Real-time telemetry data (engine status, fuel, temperature, vibration)
- Active work progress tracking

### Alerts & Notifications
- Boundary crossing detection
- Overwork alerts
- Telemetry threshold alerts
- Role-based notification system

### Reports & Analytics
- Field-wise work reports
- Tractor utilization reports
- Implement usage reports
- Fuel consumption tracking
- Historical telemetry data

### Decision Support
- AI-powered tractor recommendations
- Implement selection based on field characteristics
- Soil analysis data integration

## Mobile-First Design

The application is designed specifically for mobile devices with:
- Touch-friendly interface
- Optimized layouts for small screens
- Easy navigation with clear visual hierarchy
- Quick access to critical features

## License

This is a demo application for agricultural field operations monitoring.
