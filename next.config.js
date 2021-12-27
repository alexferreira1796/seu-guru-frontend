/** @type {import('next').NextConfig} */
const withImages = require('next-images');
module.exports = withImages({
  inlineImageLimit: false,
  reactStrictMode: true,
});
