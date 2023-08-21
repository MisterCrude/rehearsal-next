import { useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";

const TestPage: NextPage = () => {
  const router = useRouter();
  console.log("🚀 ~ file: test.tsx:7 ~ router:", router);

  useEffect(() => {
    if (router?.query?.token) {
      if (typeof router.query.token === "string") {
        console.log("token", router.query.token);
      } else {
        console.log("Not token is not number");
        console.log("Push to login page");
        router.push("/");
      }
    } else {
      console.log("Not token not exists");
      console.log("Push to login page");
      router.push("/");
    }
  }, [router]);

  return <>Change password</>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default TestPage;
