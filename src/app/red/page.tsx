import Header from "@/components/Header";
import { Metadata } from "next";
import RedLots from "@/data/ParkingLots";
import Button from "@/components/red-lots/Button";

export const metadata: Metadata = {
  title: "GES Lot U - Red",
  description: "GES Lot U Red Route",
};

export default function Home() {
  const lots = Object.keys(RedLots).sort((a, b) => a.localeCompare(b));

  return (
    <div className="h-screen flex flex-col">
      <Header title="GES Lot U - Red" />
      <div className="flex-grow flex flex-col items-center justify-center space-y-2 mt-2">
        {lots.map((lot) => {
          return (
            <Button key={lot} href={`/red/${lot.toLowerCase()}`}>
              {lot}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
