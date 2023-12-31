/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_URL: process.env.REACT_APP_URL,
  }
}

module.exports = nextConfig
