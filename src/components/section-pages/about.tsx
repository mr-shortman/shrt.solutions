"use client";

import React from "react";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

import { siteName } from "@/config/site.config";
import { Icons } from "../icons";

function AboutPage() {
  const logoVariant = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.4,
        duration: 0.6,
      },
    },
  };
  const imageVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      transition: {
        delay: 0.4,
        duration: 2,
      },
      opacity: 1,
    },
  };
  const text1Variant = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.4,
      },
    },
  };
  const text2Variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      transition: {
        delay: 1,
        duration: 0.4,
      },
      opacity: 1,
    },
  };

  return (
    <div className="container flex gap-20 items-center h-full mt-20 justify-between">
      <motion.div
        initial="hidden"
        exit="hidden"
        animate="visible"
        variants={imageVariant}
        className="relative w-full border-2 h-96 rounded-2xl flex items-center justify-center"
      >
        <motion.div
          initial="hidden"
          exit="hidden"
          animate="visible"
          variants={logoVariant}
          className="absolute left-0 -top-16 flex items-center gap-2"
        >
          <Icons.logo
            className=" left-0 -top-20 uppercase text-primary  font-bold "
            size={60}
          />
          <h1 className=" uppercase text-primary  text-6xl font-light ">
            {siteName}
          </h1>
        </motion.div>
        <ImageIcon size={240} className="text-gray-900" />
      </motion.div>
      <div className="w-full flex flex-col  gap-5 ">
        <motion.h2
          initial="hidden"
          exit="hidden"
          animate="visible"
          variants={text1Variant}
          className="font-bold text-4xl"
        >
          About
        </motion.h2>
        <motion.p
          initial="hidden"
          exit="hidden"
          animate="visible"
          variants={text1Variant}
          className="text-muted-foreground"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          consectetur repudiandae placeat ipsam maiores error asperiores sint
          totam. maiores error asperiores sint totam.
        </motion.p>

        <motion.h3
          initial="hidden"
          exit="hidden"
          animate="visible"
          variants={text2Variant}
          className="mt-20 font-bold text-3xl"
        >
          Our Mission
        </motion.h3>
        <motion.p
          initial="hidden"
          exit="hidden"
          animate="visible"
          variants={text2Variant}
          className="text-muted-foreground"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime
          officiis itaque beatae reprehenderit officia ad quam quod enim
          laudantium nisi ipsum unde, quibusdam quos dolor sapiente dolores,
          soluta optio.lorem Lorem ipsum dolor sit amet consectetur adipisicing
          elit. <br /> <br /> Voluptatum eum nemo quod, nostrum delectus
          exercitationem quia quisquam fuga vitae mollitia, pariatur, dolorem
          magnam eaque voluptas aspernatur aliquid veritatis error consequuntur.
        </motion.p>
      </div>
    </div>
  );
}
export default AboutPage;
