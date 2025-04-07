"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function Footer() {

  const handlesubmit = () => {
    //e: React.FormEvent<HTMLFormElement>
    //e.preventdefault();


  }
  useEffect(() => {
    toast.success("This is a success message.");
  }, []);

  return (
    <>
      <footer className="bg-red-50 border-t">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <span className="red">Copyright text</span>
            <Button
              variant="outline"
              onClick={() => {
                toast.message("Event has been created")
                console.log(55)
              }
              }
            >
              Show Toast
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}
