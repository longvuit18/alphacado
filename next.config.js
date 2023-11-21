/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    config.module.unknownContextCritical = false
    return config
  }
}

module.exports = nextConfig
