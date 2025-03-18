/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/zlobek-na-ulicy-slicznej", // Stary URL
        destination: "/zlobki/sliczna", // Nowy URL
        permanent: true, // Stałe przekierowanie (301)
      },
      {
        source: "/zlobek-na-ulicy-glogera", // Kolejny stary URL
        destination: "/zlobki/glogera", // Kolejny nowy URL
        permanent: true, // Stałe przekierowanie (301)
      },
      {
        source: "/zlobek-na-ulicy-vetulaniego", // Kolejny stary URL
        destination: "/zlobki/vetulaniego", // Kolejny nowy URL
        permanent: true, // Stałe przekierowanie (301)
      },
      {
        source: "/zlobek-na-ulicy-stanczyka", // Kolejny stary URL
        destination: "/zlobki/stanczyka", // Kolejny nowy URL
        permanent: true, // Stałe przekierowanie (301)
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
