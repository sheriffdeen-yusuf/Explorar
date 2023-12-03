import AppLayout from "@/components/AppLayout";
import IntroLoader from "@/components/IntroLoader";
import Signin from "@/components/Signin";
import { web5Connection } from "@/services/web5";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function index() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    // web5Connection();
    const timerId = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timerId);
  }, []);

  return <>{show ? <IntroLoader /> : <Signin />}</>;
}

export default index;
