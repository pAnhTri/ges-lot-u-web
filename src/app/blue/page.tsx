import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GES Lot U - Blue",
  description: "GES Lot U Blue Route",
};

export default function Home() {
  return (
    <div>
      <Header title="GES Lot U - Blue" />
    </div>
  );
}
