/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/tools/can-my-dog-eat", destination: "/safe-for-dogs", permanent: true },
    ];
  },
};

export default nextConfig;
