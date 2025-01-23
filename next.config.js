const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  sassOptions: {
    prependData: `@import "./lib/_mantine.scss";`,
  },
};

module.exports = nextConfig;
