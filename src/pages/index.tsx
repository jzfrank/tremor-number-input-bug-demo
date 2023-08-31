import Image from "next/image";
import { Inter } from "next/font/google";
import { NumberInput } from "@tremor/react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-84">
        <NumberInput
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
    </main>
  );
}
