import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  // Static HTML export for AWS Amplify Hosting (Web / SSG).
  output: "export",
  images: {
    unoptimized: true,
  },
  // Helps Amplify/S3 serve nested routes like /pricing/ correctly.
  trailingSlash: true,
};

export default nextConfig;
