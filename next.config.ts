/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dn55mzlnu/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
