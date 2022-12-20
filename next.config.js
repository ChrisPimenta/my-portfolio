/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTACT_US_SEND_EMAIL_URL: 'https://run.mocky.io/v3/79737da3-5e68-4a3c-a797-079c5d81dc39'
  }
}

module.exports = nextConfig
