const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/OpenDash' : '',
  assetPrefix: isProd ? '/OpenDash/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
