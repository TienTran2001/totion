"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
        Your Ideals, Documents, & Plans. Unified. Welcome to {""}
        <span className="underline">
          Totion
        </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium ">
        Totion is the connected workspace where <br /> better, faster work happens.
      </h3>
      <Button >
        Enter Totion
        <ArrowRight className="w-4 h-4 ml-2 " />
      </Button>
    </div>
  )
}