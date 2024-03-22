"use client";

import { checkToken } from "@src/redux/slices/auth";
import { useDispatch } from "@src/redux/store";
import { FC, PropsWithChildren, useEffect } from "react";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, [dispatch]);

  return children;
};

export default AuthProvider;
