"use client";
import React, { ReactNode } from "react";
import SessionProvider from "../SessionProvider";
type Props = {
  children: ReactNode;
};
const Provider = ({ children }: Props) => {
  return <SessionProvider>{children} </SessionProvider>;
};

export default Provider;
