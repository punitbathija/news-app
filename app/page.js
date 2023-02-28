import Image from "next/image";
import Header from "./header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">My News App!</h1>
    </>
  );
}
