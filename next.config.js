/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER: process.env.SERVER,
    DB_HOST: process.env.DB_HOST,
    DB_PASS: process.env.DB_PASS,
    DB_USER: process.env.DB_USER,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_PORT: process.env.DB_PORT,
  },
};

module.exports = nextConfig;
