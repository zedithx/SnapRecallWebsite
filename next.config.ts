import type { NextConfig } from "next";

const isDevelopment = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  img-src 'self' data: blob:;
  object-src 'none';
  script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  font-src 'self' data:;
  connect-src 'self';
  manifest-src 'self';
  worker-src 'self' blob:;
${isDevelopment ? "" : "  upgrade-insecure-requests;"}
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), geolocation=(), microphone=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
