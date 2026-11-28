type BrandLogoProps = {
  variant?: "hero" | "header";
  heading?: boolean;
  className?: string;
};

export function BrandLogo({
  variant = "hero",
  className = "",
}: BrandLogoProps) {
  const isHero = variant === "hero";

  const strokeStyle = {
    fontFamily: "var(--font-luckiest-guy)",
    color: "#222222",
    WebkitTextStroke: `${isHero ? 12 : 4}px var(--gray-2)`,
    paintOrder: "stroke fill" as const,
    filter: isHero
      ? "drop-shadow(1px 2px 0 var(--gray-4)) drop-shadow(2px 3px 0 var(--gray-5)) drop-shadow(3px 5px 3px rgb(17 24 39 / 0.55))"
      : "drop-shadow(1px 2px 0 var(--gray-4)) drop-shadow(1px 2px 2px rgb(17 24 39 / 0.45))",
    textShadow: "1px 2px 0 var(--gray-4)",
  };

  return (
    <div className={className}>
      <div
        style={strokeStyle}
        className={`h1
          ${isHero
            ? "flex flex-col text-[3rem] leading-[1.1]"
            : "flex flex-col items-center text-sm leading-tight min-[600px]:flex-row min-[600px]:gap-1.5 min-[600px]:text-2xl"}
        `}
      >
        <span className={isHero ? "origin-left scale-x-[1.05]" : undefined}>
          DAILY BASIS
        </span>
        <span
          className={
            isHero
              ? "text-[0.75em]"
              : "text-[0.76em] min-[600px]:text-[1em]"
          }
        >
          ENGLISH COURSE
        </span>
      </div>

      {isHero && (
        <span className="block text-right font-edu text-2xl">private</span>
      )}
    </div>
  );
}
