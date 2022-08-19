/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  reactStrictMode: true,
  images: {
		domains: ['cdn.sanity.io']
	}
}
