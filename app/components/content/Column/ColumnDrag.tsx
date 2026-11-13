import styles from "./Column.module.css";

import { useRef } from "react";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/content/Text";
import { Portuguese } from "@/components/content/Portuguese";
import { useDragScroll } from "@/hooks/useDragScroll";

type ColumnContentItem = {
  display?: string;
  as?: string;
  parts?: any[];
  lineBreak?: boolean;
  translation?: string;
};

type ColumnSpacerItem = {
  type: "spacer";
};

type ColumnItem = ColumnContentItem | ColumnSpacerItem;

const isSpacerItem = (item: ColumnItem): item is ColumnSpacerItem =>
  "type" in item && item.type === "spacer";

const hasPortuguese = (parts: any[] = []) =>
  parts.some(
    (part) =>
      part &&
      typeof part === "object" &&
      ["portuguese", "portuguese-bold", "bold-portuguese"].includes(part.type),
  );

type ColumnData = {
  column: string;
  items: ColumnItem[];
};

type ColumnDragProps = {
  cols?: ColumnData[];
  maxCols?: number;
  width?: number;
};

export const ColumnDrag = ({
  cols = [],
  maxCols,
  width = 250,
}: ColumnDragProps) => {
  const visibleCols = maxCols ? cols.slice(0, maxCols) : cols;
  const scrollRef = useRef(null);
  useDragScroll(scrollRef);

  return (
    <>
      <div className="mb-4">
        <div
          ref={scrollRef}
          className={styles.wrapper}
          style={{
            gridTemplateColumns: `repeat(${visibleCols.length}, ${width}px)`,
          }}
        >
          {visibleCols.map((c, cIndex) => (
            <Card key={cIndex} title={c.column} titleAs="h4" inset>
              {(c.items || []).map((item, index) => {
                if (isSpacerItem(item)) {
                  return <div key={index} className="h-4" />;
                }

                const display =
                  item.display === "block" || item.display === "inline"
                    ? item.display
                    : undefined;
                const as =
                  item.as === "p" || item.as === "span" ? item.as : undefined;
                const translation = item.translation;

                return (
                  <div key={index} className={item.lineBreak ? "mb-4" : ""}>
                    {item.parts && (
                      <Text display={display} as={as} value={item.parts} />
                    )}
                    {translation && !hasPortuguese(item.parts) && (
                      <div>
                        <Portuguese>{translation}</Portuguese>
                      </div>
                    )}
                  </div>
                );
              })}
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
