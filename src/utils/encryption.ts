"use client";

import cryptoJs from "crypto-js";
import bcrypt from "bcryptjs";
import { env } from "./env";

const key: string = env.appkey;
const saltRounds: number = env.saltRounds;

export const encrypt = (data: string): string => {
  const encrypted = cryptoJs.AES.encrypt(data, key).toString();
  return encrypted;
};

export const decrypt = (data: string): string => {
  const decrypted = cryptoJs.AES.decrypt(data, key).toString();
  return decrypted;
};

export const hash = async (data: string): Promise<string> => {
  return await bcrypt.hash(data, saltRounds);
};

export const compare = async (data: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(data, hash);
};
