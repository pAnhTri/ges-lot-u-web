import Header from "@/components/Header";
import LotUtility from "@/components/lots/LotUtility";
import TimeBar from "@/components/lots/TimeBar";
import RedLots from "@/data/ParkingLots";
import { Metadata } from "next";

interface PageProps {
  params: { lotId: string };
}

// Helper function to format the lotId
const formatLodId = (lotId: string) => {
  return lotId
    .split(" ")
    .map((word) => {
      return word === "lot" ? "Lot" : word.toUpperCase();
    })
    .join(" ");
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const lotId = formatLodId(decodeURIComponent(params.lotId));

  return {
    title: `GES Lot U - ${lotId}`,
    description: `GES Lot U ${lotId}`,
  };
}

const page = ({ params }: PageProps) => {
  const lotId = formatLodId(decodeURIComponent(params.lotId));

  const lotProperties = RedLots[lotId];

  return (
    <div className="h-screen flex flex-col">
      <Header title={`GES Lot U - ${lotId}`} />
      <div className="self-center my-2">
        <TimeBar lot={lotProperties.name}>{lotProperties.name}</TimeBar>
      </div>

      <div className="self-center grid grid-cols-2 gap-4 p-4">
        {lotProperties.stalls.map((stall, index) => {
          return (
            <LotUtility key={index} stall={stall}>
              {stall.name}
            </LotUtility>
          );
        })}
      </div>
    </div>
  );
};

export default page;
