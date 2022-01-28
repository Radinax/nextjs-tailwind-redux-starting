import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../components/Counter/Counter";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default IndexPage;
