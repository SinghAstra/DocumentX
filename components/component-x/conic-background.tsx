import { cn } from "@/lib/utils";

interface ConicBackgroundProps {
  className?: string;
  position?: "right" | "top" | "left" | "bottom";
  angleSpan?: "small" | "medium" | "large";
  colorOne?: string;
  colorTwo?: string;
}

const ConicBackground = ({
  className,
  position = "right",
  angleSpan = "medium",
  colorOne = "hsl(var(--primary)/0.4)",
  colorTwo = "hsl(var(--primary))",
}: ConicBackgroundProps) => {
  const positionVal = {
    right: { positionX: "100%", positionY: "50%", from: "180deg" },
    top: { positionX: "50%", positionY: "0%", from: "90deg" },
    left: { positionX: "0%", positionY: "50%", from: "0deg" },
    bottom: { positionX: "50%", positionY: "100%", from: "270deg" },
  }[position];

  const angleStops = {
    small: { start: 45, mid: 90, end: 135 },
    medium: { start: 30, mid: 90, end: 150 },
    large: { start: 15, mid: 90, end: 165 },
  }[angleSpan];

  const conicGradientValue = `conic-gradient(from ${positionVal.from} at ${positionVal.positionX} ${positionVal.positionY}, ${colorOne} ${angleStops.start}deg, ${colorTwo} ${angleStops.mid}deg, ${colorOne} ${angleStops.end}deg)`;

  const maskImageValue = `radial-gradient(circle at ${positionVal.positionX} ${positionVal.positionY}, rgba(255, 255, 255,0.7) 0%, rgba(255, 255, 255, 0.4) 60%, rgba(255, 255, 255, 0.1) 100%)`;

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden z-[-1] bg-background",
        className
      )}
    >
      <div
        className="w-full h-full"
        style={{
          background: conicGradientValue,
          maskImage: maskImageValue,
        }}
      />
    </div>
  );
};

export default ConicBackground;
