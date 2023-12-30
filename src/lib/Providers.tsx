"use client";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { store } from "@/redux/store";
import { Provider } from "react-redux";
import SessionProvider from "../SessionProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <Provider store={store}>
    <SessionProvider>
      {children}
      <ToastContainer />
    </SessionProvider>
    // </Provider>
  );
};

export default Providers;

// "use client";
// import React, { ReactNode } from "react";
// import SessionProvider from "../SessionProvider";
// type Props = {
//   children: ReactNode;
// };
// const Provider = ({ children }: Props) => {
//   return <SessionProvider>{children} </SessionProvider>;
// };

// export default Provider;
