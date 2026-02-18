import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://swansonemergencyservices.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
