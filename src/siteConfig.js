// All social + contact info is sourced from environment variables
// (Twelve-Factor App: config lives in the environment, not the code).
// See .env.example for the full list. In Netlify, set these under
// Site settings > Environment variables.

export const site = {
  name: 'S. Elankeethan',
  github: import.meta.env.VITE_GITHUB_URL || '',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || '',
  email: import.meta.env.VITE_EMAIL || '',
  phone: import.meta.env.VITE_PHONE || '',
  facebook: import.meta.env.VITE_FACEBOOK_URL || '',

  location: import.meta.env.VITE_LOCATION || '',
  cvUrl: import.meta.env.VITE_CV_URL || '#',
}
