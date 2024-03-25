import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accesibility",
    description:
      "Invo software prioritizes accessibility, ensuring usability for all users regardless of disabilities or limitations.",
  },
  {
    icon: <MapIcon />,
    title: "Design",
    description:
      "Responsive design of Invo ensures websites adapt seamlessly to various devices, enhancing user experience and accessibility.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Invo software boasts scalability, effortlessly adapting to business growth and increasing demands without compromising performance.",
  },
  {
    icon: <GiftIcon />,
    title: "User Interface",
    description:
    "Invo's user interface is intuitive, user-friendly, and optimized for efficient navigation and seamless interaction.",
  },
];

export const Otherfeatures = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Other{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Features..{" "}
        </span>
        
      </h2>
      {/* <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p> */}

      <div className="m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
