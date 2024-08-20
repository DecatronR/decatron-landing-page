/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/favicon.svg',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000',
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;