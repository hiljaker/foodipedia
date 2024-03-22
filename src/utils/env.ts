export const env = {
  appkey: process.env.NEXT_PUBLIC_KEY as string,
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL as string,

  algorithm: process.env.NEXT_PUBLIC_ALGORITHM as string,
  saltRounds: Number(process.env.NEXT_PUBLIC_SALT_ROUNDS),
  iv: process.env.NEXT_PUBLIC_IV as string,

  jwtKey: process.env.NEXT_PUBLIC_JWT_KEY as string,
};
