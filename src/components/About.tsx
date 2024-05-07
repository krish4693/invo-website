import { Statistics } from "./Statistics";
import pilot from "../../public/pilot.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-20 md:mt-24"
    >
      
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot.src}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className=" bg-clip-text">
                  About{" "}
                </span>
                <span className="">
                   INVO
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              INVO is  an inventory management system designed to simplify inventory management for small-scale shopkeepers. It helps users track stock levels and monitor sales. INVO empowers small-scale shopkeepers by providing a user-friendly interface that makes inventory management easy and enjoyable.


              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
