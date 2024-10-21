import Button from "@/components/group-page/Button";
import Header from "@/components/Header";

export default function Home() {
  // Buttons
  const colorDic = {
    Blue: "bg-[#00A6FF] dark:bg-[#1E485F]",
    Orange: "bg-[#FF7700] dark:bg-[#914C10]",
    Red: "bg-[#FF4C4C] dark:bg-[#871111]",
  };

  return (
    <div className="h-screen flex flex-col">
      <Header title="GES Lot U - Routes" />
      <div className="flex-grow flex flex-col items-center justify-center space-y-2">
        {Object.keys(colorDic).map((key) => {
          return (
            <Button
              key={key}
              colorCode={colorDic[key as keyof typeof colorDic]}
              href={`/${key.toLowerCase()}`}
            >
              {key}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
