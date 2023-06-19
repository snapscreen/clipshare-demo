import React, { useState, useEffect } from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { Button } from "../button";

declare const window: any;

export const ThemeSwitch: React.FC = () => {
  let websiteTheme: string | undefined = undefined;
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme;
  }
  useEffect(() => {
    setTheme(window.__theme);
  }, []);


  const ThemeToggle = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark");
    setTheme(websiteTheme === "dark" ? "light" : "dark");
  };

  const [theme, setTheme] = useState(websiteTheme);

  return (
    <Button
      as="button"
      styleType="icon"
      onClick={ThemeToggle}
      className="--icon"
    >
      {theme === "dark" ? (
        <>
          <MoonIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Switch to light mode</span>
        </>
      ) : (
        <>
          <SunIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Switch to dark mode</span>
        </>
      )}
    </Button>
  );
};
