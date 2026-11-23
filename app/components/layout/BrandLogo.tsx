type BrandLogoProps = {
  compact?: boolean;
  heading?: boolean;
  layout?: "column" | "row" | "responsive";
  className?: string;
};

export function BrandLogo({
  compact = false,
  heading = false,
  layout = "column",
  className = "",
}: BrandLogoProps) {
  const LogoText = heading ? "h1" : "div";
  const isRow = layout === "row";
  const isResponsive = layout === "responsive";
  const textSize = compact
    ? isResponsive
      ? "text-sm min-[520px]:text-[clamp(0.875rem,calc((100cqw-0.5rem)/14),1.75rem)]"
      : "text-[clamp(0.875rem,calc(100cqw/10),1.75rem)]"
    : "text-[3rem]";
  const logoStyle = {
    fontFamily: "var(--font-luckiest-guy)",
    color: "#222222",
    WebkitTextStroke: `${compact ? 4 : 12}px var(--gray-2)`,
    paintOrder: "stroke fill" as const,
    filter: compact
      ? "drop-shadow(1px 2px 0 var(--gray-4)) drop-shadow(1px 2px 2px rgb(17 24 39 / 0.45))"
      : "drop-shadow(1px 2px 0 var(--gray-4)) drop-shadow(2px 3px 0 var(--gray-5)) drop-shadow(3px 5px 3px rgb(17 24 39 / 0.55))",
    textShadow: "1px 2px 0 var(--gray-4)",
  };

  return (
    <div className={`w-max ${className}`}>
      <div style={logoStyle} className={compact ? "leading-none" : "leading-14"}>
        <LogoText
          className={`${textSize} ${
            isRow
              ? "flex items-baseline gap-2 whitespace-nowrap"
              : isResponsive
                ? "min-[520px]:flex min-[520px]:items-baseline min-[520px]:gap-2 min-[520px]:whitespace-nowrap"
                : ""
          }`}
        >
          <span>DAILY BASIS</span>
          <span
            className={
              isRow
                ? "inline text-[1em]"
                : isResponsive
                  ? `${compact ? "text-[0.76em]" : "text-[2.26rem]"} block min-[520px]:inline min-[520px]:text-[1em]`
                : `block ${compact ? "text-[0.76em]" : "text-[2.26rem]"}`
            }
          >
            ENGLISH COURSE
          </span>
        </LogoText>
      </div>
      {!compact && (
        <span className="block text-right font-edu text-2xl">private</span>
      )}
    </div>
  );
}
