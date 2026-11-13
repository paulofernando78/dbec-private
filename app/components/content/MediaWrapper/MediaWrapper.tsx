import type { ReactNode } from "react";

import styles from "./MediaWrapper.module.css";

type MediaWrapperProps = {
  children: ReactNode;
  className?: string;
  mediaPosition?: "left" | "right" | "top" | "bottom";
};

export const MediaWrapper = ({
  children,
  className = "",
  mediaPosition = "left",
}: MediaWrapperProps) => {
  return (
    <div className={`${styles.wrapper} ${styles[mediaPosition]} ${className}`}>
      {children}
    </div>
  );
};

MediaWrapper.Item = function MediaWrapperItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

MediaWrapper.Content = function MediaWrapperContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
};
