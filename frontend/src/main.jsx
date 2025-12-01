import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './styles/app.css'
import App from './App.jsx'

// Lấy từ Google Cloud Console: https://console.cloud.google.com/apis/credentials
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID_HERE"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
