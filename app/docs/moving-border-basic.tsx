import MovingBorder from "@/components/ui/moving-border";
import React from "react";

const MovingBorderBasic = () => {
  return (
    <div>
      <div className="overflow-hidden p-[2px] relative w-fit">
        <MovingBorder />
        <div className="bg-background w-fit px-3 py-1 border">
          Moving Border
        </div>
      </div>
    </div>
  );
};

export default MovingBorderBasic;
