/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO check it
    domains: ["images.ctfassets.net"],
  },
};

webpack: (config) => {
  config.experiments = {
    topLevelAwait: true,
  };
  return config;
};

module.exports = nextConfig;
