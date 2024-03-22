import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "./env";
import { User } from "@src/types/user.types";

const jwtKey = env.jwtKey;

type decodedObject = Pick<User, "email" | "id">;

export const sign = (payload: any, time?: string) => {
  let duration = "7d";
  if (time) duration = time;

  return jwt.sign(payload, jwtKey, { expiresIn: duration });
};

export const decode = (token: string) => {
  let decodedToken = {} as decodedObject | null;

  jwt.verify(token, jwtKey, (error, decoded) => {
    if (error) {
      decodedToken = null;
    }

    decodedToken = decoded as decodedObject;
  });

  return decodedToken;
};
