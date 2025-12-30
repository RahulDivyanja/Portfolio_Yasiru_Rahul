import type { NextConfig } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig: NextConfig = {
  output: 'export', // ⭐ REQUIRED for GitHub Pages
  // When deploying to GitHub Pages under a repo (e.g. username.github.io/repo),
  // set NEXT_PUBLIC_BASE_PATH=/repo to ensure assets and routes use the correct prefix.
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,

  images: {
    unoptimized: true, // ⭐ REQUIRED for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
