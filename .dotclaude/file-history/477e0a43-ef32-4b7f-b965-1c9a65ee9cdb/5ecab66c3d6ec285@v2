# 🎃 Halloween Candy Cart Web App 👻

A real-time, interactive web application for mobile Halloween trick-or-treating! Track a moving candy cart on a live map, see candy availability status, and navigate to get your treats!

## 🌟 Features

### For Trick-or-Treaters
- **Live Map View** - Interactive Leaflet map showing:
  - 🍬 Candy Cart location (updates in real-time)
  - 👻 Your location (tracked locally, never shared)
  - Easy navigation between both locations
- **Candy Status** - Real-time updates on candy availability:
  - ✓ Good - Plenty available
  - ⚠️ Low - Running low, hurry!
  - ✗ Out - All gone
- **Festive Message** - Customizable Halloween greeting
- **Navigation Controls**:
  - "📍 My Location" - Center map on your position
  - "🍬 Find Cart" - Navigate to the candy cart
  - "🗺️ View All" - Show both locations at once
- **Privacy-First** - Your location stays on your device only

### For Admin/Homeowner
- **Secure Admin Dashboard** - Password-protected control panel
- **Location Management**:
  - One-tap GPS location updates
  - **Auto-Refresh** - Automatic location updates at set intervals:
    - Preset intervals: 15s, 30s, 1min, 2min
    - Custom intervals: 10-300 seconds
    - Works in background while handing out candy
- **Candy Status Control** - Simple 3-button interface:
  - Plenty of Candy (Green)
  - Running Low (Yellow)
  - Out of Candy (Red)
- **Message Editor** - Update the festive greeting in real-time
- **Status Overview** - Dashboard shows all current settings at a glance

## 🎨 Design Features
- **Halloween Theme** - Orange, purple, black color scheme
- **Animated Decorations** - Bouncing pumpkins, ghosts, bats, and candy
- **Responsive Design** - Works on mobile phones, tablets, and desktops
- **Dark Theme** - Perfect for evening trick-or-treating
- **Smooth Animations** - Polished transitions and effects

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm start
```

## 🔐 Admin Access

**Login Password:** `halloween2025`

To access admin features:
1. Click "Admin Login" button at bottom of map
2. Enter password: `halloween2025`
3. Access the dashboard to control cart location, candy status, and messages

## 📱 How to Use

### For Trick-or-Treaters:
1. Open the app on your phone
2. Allow location access when prompted
3. See the candy cart location and your position on the map
4. Use navigation buttons to find the cart
5. Check candy status before heading over!

### For Cart Operators:
1. Login to admin dashboard
2. Tap "Update Location Now" to set initial position
3. Enable "Auto-Refresh" toggle
4. Select refresh interval (recommended: 30s for walking)
5. Update candy status as supplies change
6. Edit festive message if desired
7. Go trick-or-treat! Location updates automatically

## 🔧 Technical Stack

- **Framework:** Next.js 15 with React 19
- **State Management:** Zustand with persistence
- **Maps:** Leaflet with React-Leaflet
- **Styling:** Tailwind CSS 4
- **TypeScript:** Full type safety
- **Geolocation:** Browser Geolocation API
- **Real-time Updates:** Automatic state synchronization

## 🗺️ Map Features

- **Interactive Leaflet Map** - Smooth panning and zooming
- **Custom Markers**:
  - 🍬 Candy emoji for cart location
  - 👻 Ghost emoji for user location
- **Popups** - Tap markers for more info
- **OpenStreetMap** - Free, open-source map tiles
- **Live Tracking** - Both cart and user positions update automatically

## 🔄 Auto-Refresh Feature

The admin can enable automatic location updates:

- **15 seconds** - Best for walking slowly (high battery use)
- **30 seconds** - Balanced (recommended)
- **60 seconds** - For biking or slow driving
- **120 seconds** - Battery-saving mode
- **Custom** - Set any interval from 10-300 seconds

When enabled, the cart location automatically updates in the background, even when the admin isn't on the dashboard screen.

## 🎃 Perfect For:
- Mobile candy carts touring neighborhoods
- Golf cart candy distribution in communities
- Bike carts covering larger areas
- Walking routes with frequent stops
- Any mobile trick-or-treating scenario!

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Main map view (trick-or-treaters)
│   ├── admin/
│   │   ├── login/page.tsx         # Admin login
│   │   └── dashboard/page.tsx     # Admin control panel
│   ├── layout.tsx                  # Root layout
│   └── globals.css                 # Global styles + animations
├── components/
│   └── CandyMap.tsx                # Leaflet map component
└── store/
    └── candyCartStore.ts           # Zustand state management
```

## 🔒 Security Notes

- Uses simple password authentication (demo purposes)
- For production, implement proper auth (NextAuth.js, etc.)
- User locations are never sent to server
- Cart location updates require admin login
- All state persisted locally in browser storage

## 🌐 Browser Support

Works on all modern browsers that support:
- Geolocation API
- LocalStorage
- ES6+

Tested on:
- Chrome/Edge (Desktop & Mobile)
- Safari (Desktop & iOS)
- Firefox (Desktop & Mobile)

## 📝 Customization

### Change Admin Password
Edit `/src/app/admin/login/page.tsx` line 18:
```typescript
if (password === 'your-new-password') {
```

### Change Default Message
Edit `/src/store/candyCartStore.ts` line 32:
```typescript
festiveMessage: 'Your Custom Message Here!',
```

### Adjust Map Style
Edit `/src/components/CandyMap.tsx` to change map tiles, colors, or markers.

## 🎉 Happy Halloween! 🎃

Built for spreading Halloween joy and making trick-or-treating more interactive! 👻🍬

---

**Pro Tip:** Share the app URL as a QR code on your candy cart for easy access!
