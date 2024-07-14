/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'SD',
    description: 'My personal testing store containing specific dev image',
    icon: '/img/logo.svg',
    listUrl: 'https://stijndhondt.github.io/kasm-registry',
    contactUrl: 'https://stijndhondt.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
