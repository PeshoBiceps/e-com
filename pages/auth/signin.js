import { useEffect } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";

import SignIn from "../../components/SignIn"

const SignInPage = () => {

  const router = useRouter();

  //////
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      }
    });
  }, [router]);

  return (
    <SignIn />
  )
}

export default SignInPage