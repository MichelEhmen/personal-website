/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/v2',
      destination: '/?d=brutalist',
      permanent: false
    }
  ]
}

module.exports = nextConfig
