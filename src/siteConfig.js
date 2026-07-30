// All social + contact info is sourced from environment variables
// (Twelve-Factor App: config lives in the environment, not the code).
// See .env.example for the full list. In Netlify, set these under
// Site settings > Environment variables.

export const site = {
  name: 'S. Elankeethan',
  github: "https://github.com/elankeethan",
  linkedin: "https://www.linkedin.com/in/santhiratheva-elankeethan",
  email: "Santhiratheva23Elankeethan@gmail.com",
  phone: "0777475163",
  facebook: "",
  // keep other fields unchanged

  location: import.meta.env.VITE_LOCATION || '',
  cvUrl: import.meta.env.VITE_CV_URL || '#',
}
