/** @type {import('next').NextConfig} */
const constants = require("./constants");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: { ...constants },
};

module.exports = nextConfig;
