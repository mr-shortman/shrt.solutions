import React from "react";
import { motion } from "framer-motion";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
  animationDelay: number;
}

function FeatureCard({ title, description, icon, animationDelay }: Props) {
  //     const delay = globalDelay +
  //   const titleVariant = {
  //     hidden: {
  //       opacity: 0,
  //       y: -10,
  //     },
  //     animate: {
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         delay: 1,
  //       },
  //     },
  //   };

  return (
    <div className="flex flex-col gap-2 items-center w-full max-w-xs text-center">
      <div className="p-4 text-primary bg-primary/25 rounded-full">{icon}</div>
      <motion.h4
        // variants={titleVariant}
        // initial="hidden"
        // animate="animate"
        // exit="hidden"
        className="font-bold text-primary text-xl"
      >
        {title}
      </motion.h4>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
}

export default FeatureCard;
