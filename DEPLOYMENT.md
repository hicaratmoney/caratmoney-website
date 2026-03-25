# Carat Money - Quick Vercel Deployment Guide

## What You Got
A fully working gold calculator website, ready to deploy to Vercel in 10 minutes.

**NO Backend API needed**  
**NO Database needed**  
**NO API keys required**  

---

## 📋 Files Included
- `caratmoney-frontend.jsx` - Main website
- `App.jsx`, `main.jsx` - React setup
- `index.html`, `index.css` - HTML & styles
- `package.json` - Dependencies
- `vite.config.js`, `tailwind.config.js`, `postcss.config.js` - Configuration
- `.gitignore` - Git ignore

---

## 🚀 Deploy in 10 Minutes

### Step 1: Create GitHub Account (2 min)
1. Go to https://github.com/signup
2. Create account with email
3. Verify email

### Step 2: Create Repository (2 min)
1. Go to https://github.com/new
2. Name: `caratmoney-website`
3. Make it **PUBLIC** ✓
4. Click "Create"

### Step 3: Upload Files (3 min)
1. Open Command Prompt/Terminal
2. In project folder, run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
git init
git add .
git commit -m "Carat Money website"
git remote add origin https://github.com/YOUR_USERNAME/caratmoney-website.git
git branch -M main
git push -u origin main
```

3. Go to your GitHub repo - all files should be there ✓

### Step 4: Deploy to Vercel (3 min)
1. Go to https://vercel.com/signup
2. Click "Continue with GitHub"
3. Authorize Vercel
4. Click "New Project"
5. Select `caratmoney-website` repo
6. Click "Deploy"

**Wait 1-2 minutes...**

✅ **Done!** Your site is live at: `https://caratmoney.vercel.app`

---

## ✅ Test Your Website

1. Open the Vercel URL
2. Test calculator:
   - Enter weight: 10g
   - Select purity: 22K
   - Check: ₹109,840 (approximately)
   
3. Test language switcher ✓
4. Test MCX rates display ✓

---

## 🔗 Your Live URL
**https://caratmoney.vercel.app** (or your custom domain after you buy it)

Share this with your team!

---

## 💰 Cost
**100% FREE**
- Vercel hosting: FREE
- GitHub: FREE
- No database: FREE
- No API: FREE

---

## Later: Add Your Custom Domain
Once you buy a domain:
1. Go to Vercel → Settings → Domains
2. Add your domain
3. Update nameservers at registrar
4. Wait 24-48 hours

---

## Calculator Formula
```
Gross Value = Weight × Purity% × ₹13,500 (24K rate)
Deduction (3%) = Gross Value × 0.03
Final = Gross Value - Deduction
```

**Example: 10g, 22K**
- Gross = 10 × 0.916 × 13,500 = ₹123,660
- Deduction = ₹3,710
- **Final = ₹119,950** ✓

---

## Need Help?
- Check browser console (F12) for errors
- Wait if Vercel is building (shows "deploying...")
- GitHub must be PUBLIC repo
- Re-read Step 3 carefully

---

**You're all set! Deploy now!** 🚀
