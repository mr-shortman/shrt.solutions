"use client";

import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Code2, Languages, ServerIcon } from "lucide-react";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sheet } from "../ui/sheet";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "../ui/drawer";

const steps = [
  {
    Icon: (props: IconProps) => <Languages {...props} />,
    title: "Consulting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consectetur atque in.",
  },
  {
    Icon: (props: IconProps) => <Code2 {...props} />,
    title: "Develope",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consectetur atque in.",
  },
  {
    Icon: (props: IconProps) => <ServerIcon {...props} />,
    title: "Service & Hosting",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consectetur atque in.",
  },
];

// interface StepProps extends typeof<sta>
type Step = (typeof steps)[0] & { index: number };
const Step = ({ title, Icon, description, index }: Step) => {
  return (
    <div className="h-full py-8 flex gap-6 lg:min-h-64">
      <div className=" relative">
        <div className="w-12 h-12 flex items-center justify-center rounded-ful lfont-bold text-xl bg-muted rounded-full font-light">
          {`${index + 1}.0`}
        </div>
        <div className="w-4 h-full absolute border-dashed border-r-2 left-2 " />
      </div>
      <div className="max-w-xs space-y-2">
        <div className="flex gap-2">
          <div className="p-1 bg-foreground text-background rounded-sm">
            <Icon className="w-5 h-5" />
          </div>
          <Badge className="p-px w-max h-max rounded-sm text-md text-background bg-foreground">
            {title}
          </Badge>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

function SolutionsPage() {
  const titleVariant = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      transition: {
        delay: 0.6,
      },
      opacity: 1,
      y: 0,
    },
  };

  const buttonVariant = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      transition: {
        delay: 0.8,
      },
      opacity: 1,
      x: 0,
    },
  };

  return (
    <div className="container w-full flex flex-col lg:flex-row items-center lg:items-start  lg:justify-between">
      <div className="flex flex-col  gap-6 w-full max-w-xl justify-center text-center lg:text-start">
        <motion.h1
          variants={titleVariant}
          initial="hidden"
          exit="hidden"
          animate="visible"
          className="text-4xl font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing adipisicing.
        </motion.h1>
        <motion.div
          initial="hidden"
          exit="hidden"
          animate="visible"
          variants={buttonVariant}
        >
          <Link href={"/contact"}>
            <Button className="w-max" variant={"outline"}>
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
      <ul className="relative mt-12 lg:mt-0 flex flex-col justify-between h-full ">
        <li className="hidden lg:block absolute left-0 -top-12 lg:-left-24 lg:top-2 uppercase text-2xl text-muted-foreground font-bold hover:text-primary blending">
          <Link href={"/contact"}>start</Link>
        </li>
        {steps.map((step, idx) => (
          <li key={idx} className="h-full">
            <Step {...step} index={idx} />
          </li>
        ))}
      </ul>
      <Drawer>
        <DrawerTrigger className="lg:hidden absolute bottom-8 bg-background text-primary z-50 p-4 rounded-xl  tracking-wider">
          learn more
        </DrawerTrigger>
        <DrawerContent className="pt-12 pb-8 px-4">
          <ul className="xs-bottom-20 relative lg:mt-0 flex flex-col justify-between h-full ">
            {steps.map((step, idx) => (
              <li key={idx} className="h-full">
                <Step {...step} index={idx} />
              </li>
            ))}
          </ul>
          <div className="absolute w-full h-32 md:h-64 bottom-0 right-0 bg-gradient-to-t from-background to-transparent" />
        </DrawerContent>
      </Drawer>

      <div className="absolute w-full h-64 bottom-0 right-0 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export default SolutionsPage;
