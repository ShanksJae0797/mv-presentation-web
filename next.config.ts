import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    BASE_URL: "https://testing-paymentapi.mineralview.com",
  },
};

export default nextConfig;
