import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Image
        src="https://tinypic.host/images/2023/01/19/SMSCaster-GSM-Standard.th.png"
        height="500"
        width="300"
        alt="test"
        unoptimized
        priority
      />
      <Image
        src="https://tinypic.host/images/2022/12/21/9845g459gijj459.th.jpg"
        height="500"
        width="300"
        alt="test"
        unoptimized
        priority
      />
      <Image
        src="https://tinypic.host/images/2022/12/21/9845g459gijj459.th.jpg"
        height="500"
        width="300"
        alt="test"
        unoptimized
        priority
      />
      <Image
        src="https://tinypic.host/images/2023/02/19/8-Who-Made-Me-A-Princess-Chapter-35---DuaTeman.th.jpg"
        height="100"
        width="400"
        alt="test"
        unoptimized
        priority
      />
      <Image
        src="https://tinypic.host/images/2023/02/23/IMG_7690.th.jpg"
        height="100"
        width="400"
        alt="test"
        unoptimized
        priority
      />
      <Image
        src="https://tinypic.host/images/2022/06/23/h.th.png"
        height="100"
        width="400"
        alt="test"
        unoptimized
        priority
      />
      <Image
        src="https://tinypic.host/images/2022/10/12/image022.th.jpg"
        height="100"
        width="400"
        alt="test"
      />
      <Image
        src="https://tinypic.host/images/2022/05/01/Layered-Blinds-And-Shades-Canada.th.jpg"
        height="100"
        width="400"
        alt="test"
      />
    </>
  );
}
