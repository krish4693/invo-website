"use client"
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const Contactus = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="contact" className="md:mb-7">

      <div className="flex flex-col md:flex md:flex-row md:mx-10">
      <form
          className="flex flex-col  justify-center  align-center w-full md:flex-col md:w-6/12 lg:w-4/12  gap-4 md:gap-2 md:ml-auto md:justify-center md:align-baseline"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Name"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="name"
          />
          <Input
            placeholder="Email"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Input
            placeholder="Message"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="text"
          />
          <Button className="w-40 mx-auto">Send Message</Button>
        </form>


        <div className="md:mr-auto md:ml-10 text-center">
        <h3 className="text-4xl md:text-5xl font-bold mt-10">
          Have any Queries??{" "}
          
        </h3>
        <h3 className="bg-gradient-to-b from-gray-400 to-gray-600 text-transparent bg-clip-text text-center text-4xl md:text-5xl font-bold md:text-center">
            Contact Us
          </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8 ">
          We will get back to you soon!
        </p>
        </div>
        

       
      </div>

    </section>
  );
};
