# 🎃 Deployment Checklist - Halloween Candy Cart

## Pre-Deployment Testing

### Local Testing
- [ ] Run `npm install` to ensure all dependencies installed
- [ ] Run `npm run dev` and test on http://localhost:3000
- [ ] Test main map page loads correctly
- [ ] Test admin login with password `halloween2025`
- [ ] Test admin dashboard functions
- [ ] Test location permissions work
- [ ] Test candy status updates reflect on main page
- [ ] Test message updates work
- [ ] Test auto-refresh toggle and intervals
- [ ] Test on mobile browser (Chrome/Safari)
- [ ] Test on desktop browser
- [ ] Verify all animations working
- [ ] Check console for errors

### Build Testing
- [ ] Run `npm run build` successfully
- [ ] Run `npm start` and test production build
- [ ] Verify all pages load in production mode
- [ ] Check build output for warnings

## Deployment Steps

### Option 1: Vercel (Recommended - Free)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - [ ] Link to existing project or create new
   - [ ] Confirm project settings
   - [ ] Wait for deployment
   - [ ] Get production URL

4. **Test Deployment**
   - [ ] Visit production URL
   - [ ] Test all features work
   - [ ] Test on mobile device
   - [ ] Verify geolocation works (HTTPS required)

### Option 2: Netlify (Free)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Halloween Candy Cart web app"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - [ ] Go to https://netlify.com
   - [ ] Click "New site from Git"
   - [ ] Connect GitHub repo
   - [ ] Build command: `npm run build`
   - [ ] Publish directory: `.next`
   - [ ] Click "Deploy"

3. **Test Deployment**
   - [ ] Visit Netlify URL
   - [ ] Test all features
   - [ ] Verify location works (HTTPS)

### Option 3: Cloudflare Pages (Free)

1. **Push to GitHub** (same as Netlify)

2. **Deploy on Cloudflare**
   - [ ] Go to https://pages.cloudflare.com
   - [ ] Connect GitHub repo
   - [ ] Framework: Next.js
   - [ ] Build command: `npm run build`
   - [ ] Output directory: `.next`
   - [ ] Deploy

## Post-Deployment

### Configuration
- [ ] Set custom domain (optional)
- [ ] Enable HTTPS (should be automatic)
- [ ] Test HTTPS works (required for geolocation)
- [ ] Configure environment variables if needed
- [ ] Set up analytics (optional)

### QR Code Creation
- [ ] Copy your production URL
- [ ] Go to https://qr-code-generator.com or https://qr.io
- [ ] Generate QR code with your URL
- [ ] Download high-resolution PNG
- [ ] Test QR code scans correctly
- [ ] Create backup QR code image

### QR Code Poster
- [ ] Design poster with QR code
- [ ] Add festive text: "🎃 SCAN FOR CANDY! 👻"
- [ ] Add instructions: "Track the Candy Cart!"
- [ ] Print in color (minimum 8.5x11 inches)
- [ ] Laminate for weather protection
- [ ] Attach to candy cart with tape/holder

## Day-of-Event Checklist

### Before Starting
- [ ] Fully charge phone
- [ ] Bring portable charger
- [ ] Test internet connection
- [ ] Open admin dashboard
- [ ] Login with password
- [ ] Update initial location
- [ ] Set candy status to "Plenty of Candy"
- [ ] Update festive message if desired
- [ ] Enable auto-refresh (recommended: 30s)
- [ ] Verify location updating
- [ ] Check QR code poster visible
- [ ] Test QR code scans on another device

### During Event
- [ ] Keep phone charged
- [ ] Monitor battery level
- [ ] Update candy status as needed:
  - Start: "Plenty of Candy" ✓
  - Getting low: "Running Low" ⚠️
  - All out: "Out of Candy" ✗
- [ ] Check auto-refresh indicator periodically
- [ ] Disable auto-refresh if battery low

### Troubleshooting

**Location not updating:**
- [ ] Check location permissions enabled
- [ ] Ensure HTTPS connection
- [ ] Verify auto-refresh toggle is ON
- [ ] Try manual "Update Location Now"
- [ ] Check internet connection

**Map not loading:**
- [ ] Refresh page
- [ ] Check internet connection
- [ ] Clear browser cache
- [ ] Try different browser

**Admin can't login:**
- [ ] Verify password: `halloween2025`
- [ ] Clear cookies
- [ ] Try incognito/private mode
- [ ] Check for typos

**Battery draining fast:**
- [ ] Reduce auto-refresh interval (60s or 120s)
- [ ] Disable auto-refresh when stopped
- [ ] Lower screen brightness
- [ ] Close other apps

## Customization (Optional)

### Before Deployment
- [ ] Change admin password (src/app/admin/login/page.tsx)
- [ ] Update default message (src/store/candyCartStore.ts)
- [ ] Customize colors (src/app/globals.css)
- [ ] Adjust map default location (src/components/CandyMap.tsx)

### Branding
- [ ] Add custom logo/icon
- [ ] Update favicon
- [ ] Change title in layout.tsx
- [ ] Add custom meta tags for sharing

## Success Metrics

### Test Checklist
✅ App loads on all devices
✅ Location tracking works
✅ Admin login successful
✅ Candy status updates work
✅ Auto-refresh functions
✅ QR code scans correctly
✅ Map displays properly
✅ Navigation buttons work
✅ Animations smooth
✅ No console errors

## Emergency Contacts

### Support Resources
- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Leaflet Docs: https://leafletjs.com
- Browser Location API: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

### Backup Plan
If technical issues occur:
1. Disable auto-refresh to save battery
2. Use manual location updates
3. Post location on social media as backup
4. Have physical signs as fallback
5. Enjoy Halloween anyway! 🎃

## Final Pre-Launch Check

- [ ] ✅ App deployed and accessible
- [ ] ✅ HTTPS enabled (required for location)
- [ ] ✅ Tested on multiple devices
- [ ] ✅ QR code created and tested
- [ ] ✅ Poster printed and laminated
- [ ] ✅ Phone fully charged
- [ ] ✅ Portable charger ready
- [ ] ✅ Candy stocked! 🍬
- [ ] ✅ Ready for trick-or-treaters! 👻

---

## 🎉 You're Ready!

Have an amazing Halloween with your interactive candy cart! 🎃👻🍬

**Pro Tips:**
- Test everything 1-2 days before Halloween
- Have a backup battery pack
- Take photos/videos of the setup
- Share your URL on social media
- Have fun and stay safe! 🦇

🎃 **Happy Halloween!** 🎃
