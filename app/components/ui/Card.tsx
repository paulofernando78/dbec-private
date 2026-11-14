import { Children, Fragment, isValidElement, type ReactNode } from "react";

type CardProps = {
  id?: string;
  title?: ReactNode;
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  maxContent?: boolean;
  inset?: boolean;
};

const getLastChild = (children: ReactNode): ReactNode => {
  const lastChild = Children.toArray(children).at(-1);

  if (
    isValidElement<{ children?: ReactNode }>(lastChild) &&
    lastChild.type === Fragment
  ) {
    return getLastChild(lastChild.props.children);
  }

  return lastChild;
};

export const Card = ({
  id,
  title,
  titleAs: Title = "h2",
  children,
  maxContent = false,
  inset = false,
  className = "",
  contentClassName = "",
}: CardProps) => {
  const hasCustomBackground = /(?:^|\s)bg-/.test(className ?? "");
  const lastChild = getLastChild(children);
  const lastChildType = isValidElement(lastChild) ? lastChild.type : undefined;
  const hasTrailingRadio =
    (typeof lastChildType === "function" ||
      (typeof lastChildType === "object" && lastChildType !== null)) &&
    "compactCardBottom" in lastChildType &&
    lastChildType.compactCardBottom === true;

  return (
    <div
      id={id}
      className={`
      w-full
      p-4
      min-w-0
      max-w-full
      text-(--text-color)
      rounded-xl
      ${hasCustomBackground ? "" : "bg-(--surface)"}
      ${maxContent ? "w-fit max-w-full" : ""} ${className}`}
    >
      {title && <Title className="mb-4 text-lg font-bold">{title}</Title>}
      {inset ? (
        <div
          className={`rounded-xl bg-(--background) p-4 ${contentClassName}`}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};
