"use client";

import { createTheme, rem } from "@mantine/core";
import { Outfit, Space_Grotesk } from "next/font/google";

const headingFont = Space_Grotesk({ subsets: ["latin"] });
const bodyFont = Outfit({ subsets: ["latin"] });

export default createTheme({
  headings: {
    fontWeight: "400",
    fontFamily: headingFont.style.fontFamily
  },
  fontFamily: bodyFont.style.fontFamily,
  fontSizes: {
    xs: rem(13),
    sm: rem(14),
    md: rem(16),
    lg: rem(20),
    xl: rem(24)
  }
});
