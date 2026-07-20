import { MainButton } from "@/src/components/Button";
import { Header } from "@/src/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <MainButton label="Test" variant="solid" />
    </div>
  );
}
