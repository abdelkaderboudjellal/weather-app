"use client";
import { Search, Weather } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  py-24  px-4 md:px-16 xl:px-48  mx-auto bg-[url('https://images.unsplash.com/photo-1501362343565-93d7318347cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center bg-fixed">
      <Search />
    </main>
  );
}
