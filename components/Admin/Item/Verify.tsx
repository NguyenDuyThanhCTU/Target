"use client";
import { useStateProvider } from "@context/StateProvider";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Verify = () => {
  const { Verify } = useStateProvider();
  const router = useRouter();
  useEffect(() => {
    if (!Verify) {
      router.push("/login");
    }
  }, []);

  return <></>;
};

export default Verify;
