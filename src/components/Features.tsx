import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../../public/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Stock Tracking",
    description:
      "Stock Tracking can make a analysis of the stock level and can make better planning according to the data present in the dashboard.",
    icon: <WalletIcon />,
  },
  {
    title: "Sales monitoring",
    description:
      "vital role in helping businesses optimize their inventory levels, maximize sales opportunities, and improve overall operational efficiency.",
    icon: <ChartIcon />,
  },
  {
    title: "Customizable columns",
    description:
      "User can customize the columns according to their need and convienience.This can makes a customized billing interface and ease for inventory management.",
    icon: <MagnifierIcon />,
  },

  {
    title: "Chatbot",
    description:
      "Chatbot feature offers real-time assistance to users, providing instant responses to inquiries related to inventory management, billing, and other functionalities.",
    icon: <MagnifierIcon />,
  },
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="mb-8 text-3xl md:text-4xl font-bold">
            <span className="mb-8 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Features {" "}
            </span>
            of INVO
          </h2>

          

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg.src}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
