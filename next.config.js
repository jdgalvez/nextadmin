/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        // hostname: "www.google.com",
        // https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forensicmag.com%2F582211-2018-John-Doe-ID-ed-as-University-of-Michigan-PhD-Student%2F&psig=AOvVaw0al8SjfR9JlMFSHV8O7TwF&ust=1699690605070000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMCT8of_uIIDFQAAAAAdAAAAABAE
      },
    ],
  },
};

module.exports = nextConfig;
