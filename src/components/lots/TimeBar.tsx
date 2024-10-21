"use client";

import { useEffect, useState } from "react";

interface TimeBarProps {
  children: string;
  lot: string;
}

interface TimeType {
  timeIn: string;
  timeOut: string;
}

const TimeBar = ({ children, lot }: TimeBarProps) => {
  const [times, setTimes] = useState<TimeType>({ timeIn: "-1", timeOut: "-1" });

  // Restore times if they exist
  useEffect(() => {
    const savedTimes = sessionStorage.getItem(`times_${lot}`);
    if (savedTimes) {
      setTimes(JSON.parse(savedTimes));
    }
  }, []);

  // Store the times in sessionStorage
  useEffect(() => {
    sessionStorage.setItem(`times_${lot}`, JSON.stringify(times));
  }, [times]);

  const getTime = () => {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return formattedTime;
  };

  return (
    <div className="flex justify-between items-center px-2 w-[368px] sm:w-[80vw] text-black font-vietnamese">
      <div className="flex items-center justify-between py-2 max-w-[110px] w-full bg-[#E5E0DD] rounded-md">
        <span className="ml-1">
          {times.timeIn === "-1" ? "START" : times.timeIn}
        </span>
        <button
          className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#00C76A] text-[0.75em] mr-1"
          type="button"
          onClick={() => {
            setTimes({ ...times, timeIn: getTime() });
          }}
        >
          Start
        </button>
      </div>
      <span className="py-2 dark:text-[#E5E0DD]">{children}</span>
      <div className="flex items-center justify-between py-2 max-w-[110px] w-full bg-[#E5E0DD] rounded-md">
        <span className="ml-1">
          {times.timeOut === "-1" ? "STOP" : times.timeOut}
        </span>
        <button
          className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#C70000] text-[0.75em] mr-1"
          type="button"
          onClick={() => {
            setTimes({ ...times, timeOut: getTime() });
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default TimeBar;
