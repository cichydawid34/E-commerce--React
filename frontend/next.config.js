/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  source: "/api/(.*)",
  headers: [
    { key: "Access-Control-Allow-Origin", value: "*" }]
}

module.exports = nextConfig
