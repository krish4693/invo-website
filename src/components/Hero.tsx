
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Mockup from "./Mockup";
import { GitHubLogoIcon,ReaderIcon,DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      
      <div className="text-center lg:text-start space-y-6  ">
        <main className="text-5xl md:text-6xl font-bold ">
          <h1 className="inline">
            <span>
              Simplified
            </span>{" "}
            <span className="dark:bg-gradient-to-r dark:from-white dark:to-gray-400 dark:text-transparent dark:bg-clip-text">
            Inventory

            </span>
          </h1>{" "}
          and{" "}
          <h2 className="inline">
            <span className=" dark:bg-gradient-to-r dark:from-white dark:to-gray-400 dark:text-transparent dark:bg-clip-text">
              Invoice
            </span>{" "}
            Management
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Streamline your inventory, amplify your profits. Simplify small-scale shopkeeping with ease.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">
            <DownloadIcon className="mr-2 font-bold"/>
            Download</Button>

          <Link
            href="/docs/Getting-Started"
            
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            <ReaderIcon className="mr-2 font-bold"/>
            Documentation
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      

      {/* Shadow effect */}
      {/* <div className="shadow"></div> */}
      
      <div className="z-10">
        <Mockup/>
        {/* <HeroCards /> */}
      </div>
      
    </section>
  );
};
