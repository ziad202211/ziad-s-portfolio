/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // ✅ disables optimization for static export
  },
  output: "export", // ✅ keeps static export
};

export default nextConfig;
