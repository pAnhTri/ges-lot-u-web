import Button from "@/components/blue-lots/Button";
import Header from "@/components/Header";
import { BlueLots } from "@/data/ParkingLots";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GES Lot U - Blue",
  description: "GES Lot U Blue Route",
};

export default function Home() {
  const lots = Object.keys(BlueLots).sort((a, b) => a.localeCompare(b));

  return (
    <div className="h-screen flex flex-col">
      <Header title="GES Lot U - Blue" />
      <div className="flex-grow flex flex-col items-center justify-center space-y-2 mt-2">
        {lots.map((lot) => {
          return (
            <Button key={lot} href={`/blue/${lot.toLowerCase()}`}>
              {lot}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
