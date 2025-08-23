/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.simpleicons.org"],
        dangerouslyAllowSVG: true,
    },
    output: "export",
};

module.exports = nextConfig;
