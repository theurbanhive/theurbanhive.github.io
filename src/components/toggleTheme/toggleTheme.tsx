"use client";

import {
  ActionIcon,
  MantineColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { MoonIcon, SunIcon, SunMoonIcon } from "lucide-react";
import { Reducer, useEffect, useReducer } from "react";

const themeReducer: Reducer<
  MantineColorScheme,
  MantineColorScheme | undefined
> = (state, action) => {
  if (action) return action;
  if (state === "light") return "dark";
  if (state === "dark") return "auto";
  if (state === "auto") return "light";
  return "light";
};

function getIcon(theme: MantineColorScheme) {
  if (theme === "light") return <SunIcon />;
  if (theme === "dark") return <MoonIcon />;
  if (theme === "auto") return <SunMoonIcon />;
  return <SunIcon />;
}

export default function ToggleTheme() {
  const initialColorScheme = useColorScheme();
  const [colorScheme, dispatch] = useReducer(themeReducer, initialColorScheme);
  const { setColorScheme } = useMantineColorScheme();
  const icon = getIcon(colorScheme);

  useEffect(() => {
    setColorScheme(colorScheme);
  }, [colorScheme]);

  return (
    <ActionIcon
      variant="subtle"
      aria-label={colorScheme}
      onClick={() => dispatch(undefined)}
    >
      {icon}
    </ActionIcon>
  );
}
