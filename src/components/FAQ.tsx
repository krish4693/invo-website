import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FAQProps {
    question: string;
    answer: string;
    value: string;
  }
  
  const FAQList: FAQProps[] = [
    {
      "question":"What is INVO Inventory?",
      "answer":"INVO Inventory is a web-based application designed to help small businesses manage their inventory efficiently. It provides tools for tracking stock levels, managing orders, and generating reports.",
      value: "item-1",
    },
    {
      "question": "Who is INVO Inventory suitable for?",
          "answer": "INVO Inventory is ideal for small businesses that need a simple and intuitive solution for managing their inventory. Whether you run an online store, a retail shop, or a manufacturing business, INVO can help streamline your inventory management processes.",
  
      value: "item-2",
    },
    {
      
          "question":"What features does INVO Inventory offer?",
          "answer":"INVO Inventory offers a range of features including inventory tracking, order management, customizable reporting, barcode scanning, multi-location support, and integrations with other business tools.",
      value: "item-3",
    },
    {
      "question":"Is INVO Inventory easy to use?",
          "answer":"Yes, INVO Inventory is designed to be user-friendly and intuitive. With a clean and simple interface, you can easily navigate the system and perform tasks such as adding products, creating purchase orders, and generating sales reports.",
      value: "item-4",
    },
    {
      "question":"How secure is my data with INVO Inventory?",
          "answer":"INVO Inventory takes data security seriously and employs industry-standard measures to protect your information. Our servers are hosted in secure data centers and all data transmissions are encrypted to ensure the confidentiality and integrity of your data."
  
  ,
      value: "item-5",
    },
  ];
  
  export const FAQ = () => {
    return (
      <section
        id="faq"
        className="container py-24 sm:py-32"
      >
        <h2 className="bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked{" "}
            Questions
        </h2>
  
        <Accordion
          type="single"
          collapsible
          className="w-full AccordionRoot"
        >
          {FAQList.map(({ question, answer, value }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
            >
              <AccordionTrigger className="text-left">
                {question}
              </AccordionTrigger>
  
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
  
        <h3 className="font-medium mt-4">
          Still have questions?{" "}
          <a
            href="#contact"
            className=" transition-all border-primary hover:border-b-2"
          >
            Contact us
          </a>
        </h3>
      </section>
    );
  };
  