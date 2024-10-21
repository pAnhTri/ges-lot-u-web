"use client";

import { Stall } from "@/data/ParkingLots";
import { useEffect, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

interface LotUtilityProps {
  children: string;
  lot: string;
  stall: Stall;
}

const LotUtility = ({ children, lot, stall }: LotUtilityProps) => {
  const [isAdding, setIsAdding] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Load the saved counts
    const savedCount = sessionStorage.getItem(`count_${lot}_${children}`);
    if (savedCount) {
      setCounter(JSON.parse(savedCount));
    }
  }, []);

  // Save the counts
  useEffect(() => {
    sessionStorage.setItem(`count_${lot}_${children}`, JSON.stringify(counter));
  }, [counter]);

  // Calculate the font size based on the name length
  const getFontSize = () => {
    switch (true) {
      case children.length >= 25:
        return "0.6em";
      case children.length >= 20:
        return "0.7em";
      case children.length >= 15:
        return "0.8em";
      default:
        return "0.9em";
    }
  };

  return (
    <div className="font-vietnamese">
      <div className="flex justify-between w-[55px] h-[23px] mb-1">
        <FaPlus
          color={isAdding ? "#00C76A" : ""}
          size={23}
          onClick={() => {
            if ("vibrate" in navigator) navigator.vibrate(100);
            if (counter === 0) setIsAdding(true);
          }}
        />
        <FaMinus
          color={!isAdding ? "#C70000" : ""}
          size={23}
          onClick={() => {
            if ("vibrate" in navigator) navigator.vibrate(100);
            if (counter === 0) setIsAdding(false);
          }}
        />
      </div>
      <div className="flex justify-between w-[145px] h-[55px] text-black">
        <button
          type="button"
          className={`w-[55px] h-[55px] bg-[#E5E0DD] text-center`}
          onClick={() => {
            if ("vibrate" in navigator) navigator.vibrate(100);
            if (isAdding) setCounter(counter + 1);
            else setCounter(counter - 1);
          }}
          style={{ fontSize: getFontSize() }}
        >
          {children}
        </button>
        <div className="flex flex-col justify-between w-[80px] h-[55px] text-right">
          <div className="w-[80px] h-[20px] bg-[#E5E0DD] px-1">{`${
            counter === 0 ? "Count: " : ""
          } ${counter}`}</div>
          <div className="w-[80px] h-[20px] bg-[#E5E0DD] px-1">
            {`${counter === 0 ? "Final: " : ""} ${
              counter >= 0 ? counter : stall.maxCount + counter
            }`}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[55px] h-[12px] bg-[#E5E0DD] mt-1 text-[0.65em] text-black">
        <span>Max: {stall.maxCount}</span>
      </div>
      <button
        type="button"
        className="w-[55px] h-[12px] bg-red-500 mt-1 text-[0.65em] text-black"
        onClick={() => {
          if ("vibrate" in navigator) navigator.vibrate(100);
          setCounter(0);
        }}
      >
        <span>Clear</span>
      </button>
    </div>
  );
};

export default LotUtility;
