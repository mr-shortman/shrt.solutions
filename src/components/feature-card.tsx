import React from "react";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

function FeatureCard({ title, description, icon }: Props) {
  return (
    <div className="flex flex-col gap-2 items-center w-full max-w-xs text-center">
      <div className="p-4 text-primary bg-primary/25 rounded-full">{icon}</div>
      <h4 className="font-bold text-primary text-xl">{title}</h4>
      <p className="text-muted-foreground text-lg">{description}</p>
    </div>
  );
}

export default FeatureCard;
