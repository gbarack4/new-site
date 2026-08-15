import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  // Amplify Hosting (Next.js / WEB_COMPUTE) needs a normal Next build,
  // not `output: "export"`.
  trailingSlash: true,
};

export default nextConfig;
