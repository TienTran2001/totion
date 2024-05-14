
"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils"
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-white bg-opacity-95 dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6 ",
      scrolled && "border-b-2 shadow-sm"
    )}>
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between flex items-center gap-x-2">
        <ModeToggle />
      </div>
    </div>
  )
}