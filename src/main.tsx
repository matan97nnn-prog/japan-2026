import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { bootstrapInstallPromptCapture } from './lib/installBootstrap'
import { LangProvider } from './lib/i18n'
import { BookingsProvider } from './lib/bookingsStore'

// Capture Chromium's one-shot install event before React hydrates (`install.ts`).
bootstrapInstallPromptCapture()

// Service worker: installability for Chrome and offline use (see public/sw.js).
// Caches the app after the first visit so the plan opens with no signal.
function registerMinimalServiceWorker(): void {
  if (!('serviceWorker' in navigator)) return
  const swUrl = `${import.meta.env.BASE_URL}sw.js`
  window.addEventListener('load', () => {
    void navigator.serviceWorker
      .register(swUrl, { scope: import.meta.env.BASE_URL })
      .catch(() => {
        /* non-fatal */
      })
  })
}
registerMinimalServiceWorker()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <BookingsProvider>
        <App />
      </BookingsProvider>
    </LangProvider>
  </StrictMode>,
)
