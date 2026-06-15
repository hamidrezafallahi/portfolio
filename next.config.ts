import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: false,
  output: 'standalone',
  images: {
    // domains: [process.env.APP_URL || 'localhost'],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "cdn.myportfolio.com",
    //     pathname: "/projects/**"
    //   }
    // ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    unoptimized: true,
    path: './public',
  },
  experimental: {
    extensionAlias: {
      '.js': ['.js', '.ts', '.tsx'],
    },
  },
};

export default withNextIntl(nextConfig);
