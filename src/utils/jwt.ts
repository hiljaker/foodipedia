import jwt from "jsonwebtoken";
import { env } from "./env";

const jwtKey = env.jwtKey;

export const sign = (payload: any, time?: string) => {
  console.log(payload);

  let duration = "7d";
  if (time) duration = time;

  return jwt.sign(payload, jwtKey, { expiresIn: duration });
};

export const decode = (token: string) => {
  return jwt.verify(token, jwtKey, (error, decodedObject) => {
    return decodedObject;
  });
};
