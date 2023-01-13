/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images2.imgbox.com",
      "i.imgur.com",
      "live.staticflickr.com"
    ]
  },
}

module.exports = nextConfig
