import Header from "@/components/Header";
import Button from "@/components/orange-lots/Button";
import { OrangeLots } from "@/data/ParkingLots";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GES Lot U - Orange",
  description: "GES Lot U Orange Route",
};

export default function Home() {
  const lots = Object.keys(OrangeLots).sort((a, b) => a.localeCompare(b));

  return (
    <div className="h-screen flex flex-col">
      <Header title="GES Lot U - Orange" />
      <div className="flex-grow flex flex-col items-center justify-center space-y-2 mt-2">
        {lots.map((lot) => {
          return (
            <Button key={lot} href={`/orange/${lot.toLowerCase()}`}>
              {lot}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
