import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="clients">
      <h1 className="heading">
        Kind words from <span className="text-purple">clients</span> and{" "}
        <span className="text-purple">coworkers</span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
