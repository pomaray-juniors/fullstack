"use client"

import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { ThemeSwitcher } from "./theme-switch";
import { NextUIProvider } from "@nextui-org/react";
import {ThemeProvider } from "next-themes";

export default function Hero() {
  const aboutUsItem = siteConfig.navItems.find(item => item.id === 5);

  return (
    <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
    <section className="flex flex-col justify-center items-center h-screen pb-60 dark:bg-gray-900">
      <h2 className="font-bold text-4xl max-w-fit dark:text-white">GAMEDEV COMPANY</h2>
      <p className="text-gray-700 dark:text-gray-300">Making games since Fefita la Grande was born.</p>
      <Button href={aboutUsItem?.href} className="mt-4">More about us</Button>
      <ThemeSwitcher />
      </section>
        </ThemeProvider>
    </NextUIProvider>
);
}
