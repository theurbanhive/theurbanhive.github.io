"use client";

import { createTheme, rem } from "@mantine/core";
import { Outfit, Space_Grotesk } from "next/font/google";

const headingFont = Space_Grotesk({ subsets: ["latin"] });
const bodyFont = Outfit({ subsets: ["latin"] });

export default createTheme({
  headings: {
    fontWeight: "400",
    fontFamily: headingFont.style.fontFamily,
  },
  fontFamily: bodyFont.style.fontFamily,
  fontSizes: {
    xs: rem(10),
    sm: rem(11),
    md: rem(14),
    lg: rem(16),
    xl: rem(20),
  },
});
