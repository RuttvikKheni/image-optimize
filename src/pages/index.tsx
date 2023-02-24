import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Image
        src="https://tinypic.host/images/2023/01/17/DSC00455_zps03ba7e02.th.jpg"
        height="500"
        width="300"
        alt="test"
        unoptimized
        priority
      />
      <Image
        src="https://tinypic.host/images/2023/02/04/515454515.jpg"
        height="500"
        width="300"
        alt="test"
      />
      <Image
        src="https://tinypic.host/images/2023/02/22/imagedb33e64846805f71.th.png"
        height="500"
        width="300"
        alt="test"
        priority
        unoptimized
      />
      <Image
        src="https://tinypic.host/images/2023/02/13/instantnoodle2303.th.jpg"
        height="100"
        width="400"
        alt="test"
        priority
        unoptimized
      />
      <Image
        src="https://tinypic.host/images/2023/02/07/P-UNLV046.th.jpg"
        height="100"
        width="400"
        alt="test"
        priority
        unoptimized
      />
      <Image
        src="https://tinypic.host/images/2022/02/18/Kimber-Mags.th.jpg"
        height="100"
        width="400"
        alt="test"
        priority
        unoptimized
      />
      <Image
        src="https://tinypic.host/images/2022/10/31/Custom-Floor-Signs.th.jpg"
        height="100"
        width="400"
        alt="test"
        priority
        unoptimized
      />
      <Image
        src="https://tinypic.host/images/2023/02/21/export202302210845517160.png"
        height="100"
        width="400"
        alt="test"
        priority
        unoptimized
      />
    </>
  );
}
