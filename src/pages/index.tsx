import { type NextPage } from "next";
// import Head from "next/head";
// import Link from "next/link";

import { trpc } from "../utils/trpc";
import { Nav } from "./components/nav";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
        <Nav/>
    </>
  );
};

export default Home;
