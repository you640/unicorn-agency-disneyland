# Unicorn Agency – Disneyland pre dospelých

Live: [https://unicorn-agency-disneyland.vercel.app](https://unicorn-agency-disneyland.vercel.app)

## Stack

- Vite + React + TypeScript
- Firebase (Auth, Firestore, Storage, Analytics)
- Hosting: Vercel

## Setup

1. Skopíruj `.env.example` do `.env` a doplň svoje Firebase údaje.
2. Nainštaluj závislosti:
   ```bash
   npm install
   ```
3. Spusti lokálne:
   ```bash
   npm run dev
   ```
4. Build:
   ```bash
   npm run build
   ```
5. Deploy na Vercel (alebo Firebase Hosting).

## Firebase config

Všetky potrebné premenné sú v `.env.example`. Nikdy nezverejňuj `.env` ani žiadne secrets!

## Pravidlá Firestore

Pre verejné čítanie:

```
rules_version = '2';
service cloud.firestore {
   match /databases/{database}/documents {
      match /{document=**} {
         allow read;
         allow write: if false;
      }
   }
}
```

## Autentifikácia

Používaj React context `AuthProvider` a hook `useAuth` pre správu prihlásenia.

## Typovanie Firestore kolekcií

Príklad v `src/types/service.ts`:

```typescript
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}
```

## Storage

Nahrávanie súborov je povolené len pre prihlásených užívateľov.

## Monitoring

Analytics je inicializovaný cez `initAnalytics()` v `src/firebase.ts`.

## Deployment

Projekt je automaticky buildený a deployovaný na Vercel z GitHubu.

---

### .gitignore – pridaj secrets

Do `.gitignore` pridaj:

```
.env
.env.local
.env.*
```

Tým pádom sa žiadne secrets nedostanú do repozitára.

---

### Čo ďalej?

- Nastav Firestore/Storage pravidlá podľa produkčných potrieb.
- Pridaj monitoring (napr. Sentry, logovanie chýb).
- Pridaj testy (unit, integration).
- Pravidelne aktualizuj závislosti.
- Pridaj CI/CD workflow (napr. GitHub Actions pre lint/test/build).
- Pridaj detailnú dokumentáciu k API a komponentom.
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/11Fr3q5iYBD24HZElFLCwYWUU4hyoPbW4

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
