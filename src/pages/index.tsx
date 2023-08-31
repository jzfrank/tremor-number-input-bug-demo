import Image from "next/image";
import { Inter } from "next/font/google";
import { NumberInput } from "@tremor/react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className="w-84">
        <h1 className="text-lg font-medium">
          Tremor@3.6.6 Number Input breaks when using onChange with stepper
        </h1>
        <h3 className="italic">How to reproduce: </h3>
        <p className="p-3 text-sm mb-5">
          Click on the stepper buttons to increase/decrease the value. <br />
          Say you clicked up for 5 times, the value should be 5. <br />
          Now, click your mouse elsewhere on the page. <br />
          The value should be nonzero, but it is 0. <br />
        </p>
        <NumberInput
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
      </div>
    </main>
  );
}
