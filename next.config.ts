/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        // Apply CORS headers to all API routes
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value:
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000" // Allow localhost during development
                : "https://nirvanaeliteresearchsolutions.vercel.app/", // Allow production domain when deployed
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
