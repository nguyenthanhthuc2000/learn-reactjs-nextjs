import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = withBundleAnalyzer({
  enabled: true,
})({
  reactStrictMode: true, // Các cấu hình khác của bạn
});

export default nextConfig;