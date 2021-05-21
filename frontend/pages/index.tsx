import { GetStaticProps } from "next";
import React from "react";

export default ({ hello }: { hello: string }) => <h1>{hello}</h1>;

//
export const getStaticProps: GetStaticProps = async () => {
  const hello = "helloworld";
  return { props: { hello } };
};