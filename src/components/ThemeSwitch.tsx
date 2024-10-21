"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    if ("vibrate" in navigator) navigator.vibrate(100);
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (mounted) {
    return resolvedTheme === "dark" ? (
      <button className="px-2" onClick={() => handleClick()} type="button">
        <FiSun size="1.5em" />
      </button>
    ) : (
      <button className="px-2" onClick={() => handleClick()} type="button">
        <FiMoon size="1.5em" />
      </button>
    );
  } else {
    return <span>Loading</span>;
  }
};

export default ThemeSwitch;
