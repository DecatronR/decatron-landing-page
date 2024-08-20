/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/public/images/favicons/favicon.ico',
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