"use client";

import crypto from "crypto";
import bcrypt from "bcryptjs";
import { env } from "./env";

const key: string = env.appkey;
const saltRounds: number = env.saltRounds;
const algorithm: string = env.algorithm;
const iv: string = env.iv;

export const encrypt = (plain: string): string => {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(plain, "utf-8", "hex");
  encrypted += cipher.final("hex");

  return encrypted;
};

export const decrypt = (hash: string): string => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(hash, "hex", "utf-8");
  decrypted += decipher.final("utf-8");

  return decrypted;
};

export const hash = async (data: string): Promise<string> => {
  return await bcrypt.hash(data, saltRounds);
};

export const compare = async (data: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(data, hash);
};
