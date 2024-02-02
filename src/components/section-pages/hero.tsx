"use client";

import React from "react";
import { motion } from "framer-motion";

import Spline from "@splinetool/react-spline";
import { EmailListForm } from "../email-list-form";
import { Computer } from "lucide-react";
import FeatureCard from "../feature-card";
import { Button } from "../ui/button";
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

const features = [
  {
    icon: <Computer />,
    title: "Web Design",
    description: "Crafting websites that convert and grow your business",
  },
  {
    icon: <Computer />,
    title: "Web Design",
    description: "Crafting websites that convert and grow your business",
  },
  {
    icon: <Computer />,
    title: "Web Design",
    description: "Crafting websites that convert and grow your business",
  },
];

const titleVariant = {
  hidden: {
    scale: 0,
    opacity: 0.0025,
  },
  visible: {
    transition: { delay: 0.2, duration: 0.4 },
    scale: 1,
    opacity: 1,
  },
};

const descriptionVariant = {
  hidden: {
    y: 40,
    opacity: 0.0025,
  },
  visible: {
    transition: { delay: 0.6 },
    y: 0,
    opacity: 1,
  },
};

const formVariant = {
  hidden: {
    y: -20,
    scale: 0.75,
    opacity: 0,
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 2,
      duration: 0.6,
    },
  },
};

const featureCardVariant = (idx: number) => ({
  hidden: {
    y: 40,
    opacity: 0.0025,
  },
  visible: {
    transition: { delay: 1 + idx * 0.4 },
    y: 0,
    opacity: 1,
  },
});

function HeroPage() {
  return (
    <>
      <div className="flex flex-col items-center w-full gap-4 lg:gap-8">
        <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-6xl w-full text-center flex flex-col items-center gap-4">
          <motion.h1
            initial="hidden"
            exit="hidden"
            animate="visible"
            variants={titleVariant}
            className="font-bold  text-5xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-7xl"
          >
            We make great digital products for
            <span className="text-primary">{" innovative "}</span>
            brands.
          </motion.h1>
          <motion.p
            initial="hidden"
            exit="hidden"
            animate="visible"
            variants={descriptionVariant}
            className="text-muted-foreground  sm:text-lg lg:text-xl max-w-2xl "
          >
            Get your desired design services from our talented designers, around
            the world at a reasonable cost
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          exit="hidden"
          animate="visible"
          variants={formVariant}
        >
          <EmailListForm />
        </motion.div>
        <div className="flex md:hidden flex-col gap-4 items-center sm:mt-10">
          <FeatureCard {...features[0]} />
          {/* <Button variant={"outline"}>Learn more</Button> */}
          <Drawer>
            <DrawerTrigger>Learn more</DrawerTrigger>
            <DrawerContent className="p-4">
              <ul className=" flex-wrap justify-center items-center gap-12 my-20 flex flex-col">
                {features.map((feature, idx) => (
                  <motion.li key={idx}>
                    <FeatureCard {...feature} />
                  </motion.li>
                ))}
              </ul>
            </DrawerContent>
          </Drawer>
        </div>

        <ul className=" flex-wrap justify-center gap-12 mt-20 hidden md:flex">
          {features.map((feature, idx) => (
            <motion.li
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={featureCardVariant(idx)}
              key={idx}
            >
              <FeatureCard {...feature} />
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HeroPage;
