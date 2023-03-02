import Image from "next/image";
import styles from "./page.module.css";
import { BiCategory, BiCodeBlock } from "react-icons/bi";
import { GiNewspaper } from "react-icons/gi";
import { IoMdBusiness } from "react-icons/io";
import { MdSportsCricket, MdLocalMovies } from "react-icons/md";
import Header from "./Header";
import Newscard from "./Newscard";
import Category from "./category/page";

export default function Home() {
  return (
    <>
      <Header />
      <Category />

      <h2 className="px-16 py-4 font-bold text-2xl">Top News📰</h2>
      <Newscard />
    </>
  );
}
