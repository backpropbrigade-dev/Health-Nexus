<div align="center">

# 🏥 HealthNexus
### AI-Powered 24/7 Smart Health Tracking & Patient Care Platform

![Version](https://img.shields.io/badge/version-1.0.0-6c63ff?style=flat-square)
![Status](https://img.shields.io/badge/status-live-00d4aa?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-38bdf8?style=flat-square)
![Team](https://img.shields.io/badge/team-AI%20Illuminate-ff4d6d?style=flat-square)

> Designed & Developed by **Team AI Illuminate**

</div>

---

## 📖 Overview

HealthNexus is a next-generation healthcare ecosystem that bridges the gap between patients, emergency services, and medical providers. Built with real-time connectivity, predictive AI, and a user-centric design — it delivers a seamless, life-saving experience for both patients and healthcare professionals.

---

## ✨ Key Features

### 👤 Smart Patient Portal
| Feature | Description |
|---------|-------------|
| 📊 Real-time Vitals | Track BP, Blood Sugar & Hemoglobin with live health risk scoring |
| 🤖 Nexus AI Guide | Interactive AI chatbot for symptom guidance and health insights |
| 📈 Vital Trends | 7-day historical charts for all three core metrics |
| 💊 Med Reminders | Automated alerts for consistent treatment adherence |
| 📅 Appointments | Book in-person or virtual consultations with doctors |
| 🩸 Blood Donation | Find nearby donors and register as a donor |
| 👨‍👩‍👧 Family Connect | Grant health record access to family with permission levels |
| 🪪 Patient Profile | Full identity, medical history, allergies, medications & doctor info |

### � Global Emergency SOS
| Feature | Description |
|---------|-------------|
| 🆘 One-Click SOS | Instantly trigger an emergency signal from any screen |
| 🏥 Hospital Sync | Auto-identifies the closest registered facility via GPS |
| 📞 Family Alert | Relays emergency status to contacts and virtual doctor access |

### 🏥 Hospital Command Center
| Feature | Description |
|---------|-------------|
| 📋 Patient Records | Secure access to digital medical histories and conditions |
| ➕ Registration | Register new patients with auto-generated unique IDs |
| 👨‍⚕️ Doctor Availability | Real-time status board across all departments |
| 🔔 Health Alerts | Immediate notifications for critical patient conditions |
| 📎 Report Upload | Attach and manage patient documentation |
| 🗓️ Scheduling | Manage follow-ups and consultations |

---

## �️ Tech Stack

| Layer | Technology |
|-------|-----------|
| 🌐 Core | HTML5, CSS3, JavaScript (ES6+) |
| 🎬 Animations | [GSAP](https://greensock.com/gsap/) |
| 📊 Charts | [Chart.js](https://www.chartjs.org/) |
| 🎨 Icons | [Font Awesome 6.5](https://fontawesome.com/) · [Lucide Icons](https://lucide.dev/) |
| 🔤 Typography | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| 🔥 Backend | Firebase (Auth + Firestore + Storage) |
| 💾 State | Browser `localStorage` for demo mode |
| ⚡ Build | [Vite](https://vitejs.dev/) |
| 🚀 Deploy | [Netlify](https://netlify.com/) |

---

## 📂 Project Structure

```
HealthNexus/
│
├── 🖼️  assets/                  # Images and static media
├── 🧩  components.js            # Reusable UI modules (Navbar, Footer)
├── 🏥  hospital-dashboard.html  # Hospital clinical command center
├── 🏠  index.html               # Landing page
├── 🔐  login.html               # Unified authentication portal
├── 👤  patient-dashboard.html   # Patient health tracking dashboard
├── ⚙️  script.js                # Application logic & state handling
├── 🎨  styles.css               # Global design system & styling
├── 🔑  env.js                   # Firebase config (gitignored)
├── 📄  env.example.js           # Config template
├── ⚡  vite.config.js           # Vite build config
├── 🌐  netlify.toml             # Netlify deploy config
└── 📖  README.md                # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/tejaram867/HealthNexus-.git
cd HealthNexus-
```

### 2️⃣ Install and run locally
```bash
npm install
npm run dev
```
> Open `http://localhost:8888` (or the port Vite prints)

### 3️⃣ Firebase setup *(optional)*
Copy `env.example.js` → `env.js` and fill in your Firebase project keys.
Without valid keys the app runs in **demo mode** — all data stays in `localStorage`.

### 4️⃣ Explore the portals
- 🏠 **Landing Page** — Overview of the platform and features
- 🏥 **Login as Hospital** — Access the clinical command center
- 👤 **Login as Patient** — Explore health monitoring, AI guide, appointments & more

---

## 🌐 Deploy on Netlify

1. Push to **GitHub**
2. In [Netlify](https://app.netlify.com/) → **Add new site** → **Import existing project**
3. Netlify reads `netlify.toml` automatically
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site** 🎉

### 🔑 Firebase Environment Variables

| Variable | Description |
|----------|-------------|
| `FIREBASE_API_KEY` | Your API key |
| `FIREBASE_AUTH_DOMAIN` | `your-project.firebaseapp.com` |
| `FIREBASE_PROJECT_ID` | Your project ID |
| `FIREBASE_STORAGE_BUCKET` | `your-project.firebasestorage.app` |
| `FIREBASE_MESSAGING_SENDER_ID` | Numeric sender ID |
| `FIREBASE_APP_ID` | Your app ID |
| `FIREBASE_MEASUREMENT_ID` | Optional analytics ID |

### �️ Manual deploy (CLI)
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## 🎨 Design Philosophy

| Principle | Description |
|-----------|-------------|
| 🌑 Premium Dark Theme | Deep navy palette with high-contrast accents for medical clarity |
| 🧊 Glassmorphism | Subtle transparency and backdrop blur for a focused modern feel |
| 🎲 3D Icon System | Layered gradients, inset highlights and depth shadows on all icons |
| ✨ Dynamic Interactions | Hover animations, scroll-based reveals and GSAP transitions |
| 📱 Responsive Layout | Collapsible sidebar, fluid grids and mobile-friendly breakpoints |

---

## 🛡️ Privacy & Security

> ⚠️ As a prototype, all data is stored locally in the browser and not uploaded to external servers.

HealthNexus is designed with security-first principles, built to integrate with **HIPAA** and **GDPR** compliant backends for end-to-end encryption in production.

---

## 👥 Team AI Illuminate

> Built with ❤️ for the future of healthcare.

---

<table>
<tr>
<td align="center" width="25%">

### 👨‍💻 Paidi Tejaram
**Full Stack Developer & UI/UX Designer**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tejarampaidi/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tejaram867)

</td>
<td align="center" width="25%">

### 👩‍💻 Sai Saranya Badala
**Full Stack Developer & UI/UX Designer**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sai-saranya-badala-37b92233b/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Saranyabadala)

</td>
<td align="center" width="25%">

### 👩‍💻 Tejaswini Reddy
**Full Stack Developer & UI/UX Designer**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tejaswini-reddy-785a47344)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Tejaswin308)

</td>
<td align="center" width="25%">

### 👨‍💻 D Durgarao
**Full Stack Developer & UI/UX Designer**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/derasapu-durgarao-2647973b8/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Vasco-07)

</td>
</tr>
</table>

---

<div align="center">

*© 2025 HealthNexus Platform · Built with ❤️ by Team AI Illuminate*

</div>
