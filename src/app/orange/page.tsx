import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GES Lot U - Orange",
  description: "GES Lot U Orange Route",
};

export default function Home() {
  return (
    <div>
      <Header title="GES Lot U - Orange" />
    </div>
  );
}
