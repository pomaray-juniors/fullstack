"use client"

import { useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  User,
  Avatar,
} from "@nextui-org/react";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { PlusIcon } from "./PlusIcon";
import Logo from "./icons";

export const Navbar = () => {
  const [theme, setTheme] = useState("system"); // State for managing theme

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme); // Update theme state based on selection
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit dark:text-white">GAMEDEV COMPANY XDDD</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="flex basis-3/5 justify-center" justify="center">
        <ul className="flex gap-4 justify-center ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium mr-4 ml-4"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Dropdown
            showArrow
            radius="sm"
            classNames={{
              base: "before:bg-default-200", // change arrow background
              content: "p-0 border-small border-divider bg-background",
            }}
          >
            <DropdownTrigger>
              <Avatar className="cursor-pointer h-11 w-11" showFallback />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Custom item styles"
              disabledKeys={["profile"]}
              className="p-3"
              itemClasses={{
                base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              }}
            >
              <DropdownSection aria-label="Profile & Actions" showDivider>
                <DropdownItem
                  isReadOnly
                  key="profile"
                  className="opacity-100 h-14 gap-2 w-25"
                  textValue="Profile"
                >
                  <User
                    name="User"
                    description="Login or register to have a user"
                    classNames={{
                      name: "text-default-600",
                      description: "text-default-500",
                    }}
                    avatarProps={{
                      size: "sm",
                      src: "",
                    }}
                  />
                </DropdownItem>
                <DropdownItem key="dashboard" textValue="Dashboard">Dashboard</DropdownItem>
                <DropdownItem key="settings" textValue="Settings">Settings</DropdownItem>
                <DropdownItem
                  key="new_feedback"
                  endContent={<PlusIcon className="text-large" />}
                  textValue="New Feedback"
                >
                  New Feedback
                </DropdownItem>
              </DropdownSection>

              <DropdownSection aria-label="Preferences" showDivider>
                <DropdownItem
                  isReadOnly
                  key="theme"
                  className="cursor-default"
                  endContent={
                    <select
                      className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                      id="theme"
                      name="theme"
                      onChange={handleThemeChange}
                      value={theme}
                    >
                      <option value="system">System</option>
                      <option value="dark">Dark</option>
                      <option value="light">Light</option>
                    </select>
                  }
                  textValue="Theme"
                >
                  Theme
                </DropdownItem>
              </DropdownSection>

              <DropdownSection aria-label="Help & Support">
                <DropdownItem key="help_and_support" textValue="Help & Support">Help & Support</DropdownItem>
                <DropdownItem key="logout" textValue="Log Out">Log Out</DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
